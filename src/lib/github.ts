import type { GitHubRepo, Project, ProjectCategory } from "@/types";

const GITHUB_USERNAME = "zestymec";

function inferCategory(
  repo: GitHubRepo
): Exclude<ProjectCategory, "all"> {
  const name = repo.name.toLowerCase();
  const topics = repo.topics.map((t) => t.toLowerCase());
  const lang = repo.language?.toLowerCase() ?? "";

  if (
    topics.includes("react-native") ||
    name.includes("mobile") ||
    name.includes("app")
  ) {
    return "mobile";
  }

  if (topics.includes("open-source") || repo.stargazers_count > 5) {
    return "opensource";
  }

  if (
    lang === "typescript" ||
    lang === "javascript" ||
    topics.includes("nextjs") ||
    topics.includes("react")
  ) {
    return "web";
  }

  return "opensource";
}

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: String(repo.id),
        title: repo.name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        description: repo.description ?? "Open source project on GitHub",
        tags: [
          ...(repo.language ? [repo.language] : []),
          ...repo.topics.slice(0, 3),
        ],
        category: inferCategory(repo),
        githubUrl: repo.html_url,
        liveUrl: repo.homepage ?? undefined,
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // TODO: Umer - Replace with actual asset link
      }));
  } catch {
    return [];
  }
}
