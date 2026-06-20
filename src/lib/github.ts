import type { GitHubRepo, Project, ProjectCategory } from "@/types";

const GITHUB_API_URL =
  "https://api.github.com/users/zestymec/repos?per_page=100&sort=updated";

function inferCategory(
  repo: GitHubRepo
): Exclude<ProjectCategory, "all"> {
  const name = repo.name.toLowerCase();
  const topics = repo.topics.map((t) => t.toLowerCase());
  const lang = repo.language?.toLowerCase() ?? "";
  const description = (repo.description ?? "").toLowerCase();

  if (
    topics.includes("react-native") ||
    name.includes("mobile") ||
    name.includes("app") ||
    name.includes("rn-") ||
    description.includes("react native")
  ) {
    return "mobile";
  }

  if (
    name.includes("clone") ||
    name.includes("replica") ||
    topics.includes("clone") ||
    description.includes("clone")
  ) {
    return "clones";
  }

  if (
    topics.includes("mern") ||
    topics.includes("mongodb") ||
    name.includes("ecommerce") ||
    name.includes("e-commerce") ||
    lang === "javascript" ||
    topics.includes("express") ||
    topics.includes("node")
  ) {
    return "mern";
  }

  if (lang === "typescript" || topics.includes("nextjs") || topics.includes("react")) {
    return "mern";
  }

  return "mobile";
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
      .map((repo) => ({
        id: String(repo.id),
        title: formatRepoTitle(repo.name),
        description: repo.description ?? "Authentic open-source repository",
        tags: [
          ...(repo.language ? [repo.language] : []),
          ...repo.topics.slice(0, 3),
        ],
        category: inferCategory(repo),
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || undefined,
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        featured: repo.stargazers_count > 0,
      }));
  } catch {
    return [];
  }
}
