import type { GitHubRepo, Project, ProjectCategory } from "@/types";
import { getProjectCoverImage } from "@/lib/images";

const GITHUB_API_URL =
  "https://api.github.com/users/zestymec/repos?per_page=100&sort=updated";

function inferCategory(
  repo: GitHubRepo
): Exclude<ProjectCategory, "all"> {
  const name = repo.name.toLowerCase();
  const topics = repo.topics.map((t) => t.toLowerCase());
  const lang = repo.language?.toLowerCase() ?? "";
  const description = (repo.description ?? "").toLowerCase();
  const combined = `${name} ${description} ${topics.join(" ")}`;

  if (
    topics.includes("react-native") ||
    name.includes("mobile") ||
    name.includes("app") ||
    name.includes("rn-") ||
    lang === "dart" ||
    lang === "kotlin" ||
    lang === "swift" ||
    combined.includes("react native") ||
    combined.includes("flutter") ||
    combined.includes("expo")
  ) {
    return "mobile";
  }

  if (
    combined.includes("cli") ||
    combined.includes("tool") ||
    combined.includes("utility") ||
    combined.includes("bot") ||
    combined.includes("script") ||
    combined.includes("automation") ||
    name.includes("util") ||
    name.includes("tool")
  ) {
    return "utilities";
  }

  if (
    topics.includes("mern") ||
    topics.includes("nextjs") ||
    topics.includes("react") ||
    topics.includes("mongodb") ||
    name.includes("ecommerce") ||
    name.includes("e-commerce") ||
    name.includes("web") ||
    name.includes("dashboard") ||
    lang === "typescript" ||
    lang === "javascript" ||
    topics.includes("express") ||
    topics.includes("node")
  ) {
    return "web";
  }

  return "opensource";
}

function formatRepoTitle(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(GITHUB_API_URL, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => {
        const title = formatRepoTitle(repo.name);
        const category = inferCategory(repo);

        return {
          id: String(repo.id),
          title,
          description: repo.description ?? "Authentic open-source repository",
          tags: [
            ...(repo.language ? [repo.language] : []),
            ...repo.topics.slice(0, 3),
          ],
          category,
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          imageUrl: getProjectCoverImage(title, category),
          featured: repo.stargazers_count > 0,
        };
      });
  } catch {
    return [];
  }
}
