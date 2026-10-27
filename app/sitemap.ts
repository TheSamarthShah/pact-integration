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
    "/expertise/custom-software-development",
    "/expertise/dotnet-aspnet-core-development",
    "/expertise/ai-automation-integration",
    "/expertise/react-angular-development",
    "/expertise/business-management-software",
    "/expertise/dedicated-development-teams",
    "/insights/scoping-a-useful-mvp",
    "/insights/useful-ai-starts-with-a-workflow",
    "/insights/software-that-fits-operations",
    "/insights/ai-integration-aspnet-core-sql-server-n8n",
  ];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    priority: path === "/" ? 1 : path.startsWith("/expertise/") ? 0.8 : 0.6,
  }));
}
