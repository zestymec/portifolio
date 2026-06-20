import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

export async function GET() {
  const projects = await fetchGitHubProjects();
  return NextResponse.json(projects);
}
