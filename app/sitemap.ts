// app/sitemap.ts — Pact Integration canonical service pages and existing sector pages.
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pactintegration.com";
  const paths = [
    "/",
    "/manufacturing",
    "/logistics",
    "/jewelry",
    "/about",
    "/expertise/custom-software-development.html",
    "/expertise/dotnet-aspnet-core-development.html",
    "/expertise/ai-automation-integration.html",
    "/expertise/react-angular-development.html",
    "/expertise/business-management-software.html",
    "/expertise/dedicated-development-teams.html",
    "/insights/scoping-a-useful-mvp.html",
    "/insights/useful-ai-starts-with-a-workflow.html",
    "/insights/software-that-fits-operations.html",
  ];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    priority: path === "/" ? 1 : path.startsWith("/expertise/") ? 0.8 : 0.6,
  }));
}
