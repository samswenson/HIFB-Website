// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["."],
      models: [
        // Page models
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "index.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "heroHeading", type: "string", required: true },
            { name: "heroSubheading", type: "string" },
            { name: "missionStatement", type: "markdown" }
          ]
        },
        // For future pages
        {
          name: "StandardPage",
          type: "page",
          urlPath: "/{slug}",
          filePath: "{slug}.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        },
        // Component models
        {
          name: "Header",
          type: "object",
          fields: [
            { name: "logo", type: "string" },
            { name: "navigationItems", type: "list", items: { type: "NavigationItem" } }
          ]
        },
        {
          name: "NavigationItem",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "url", type: "string", required: true }
          ]
        },
        {
          name: "CorePrinciple",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" }
          ]
        },
        {
          name: "DonationSection",
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "subheading", type: "string" },
            { name: "description", type: "markdown" }
          ]
        },
        {
          name: "Footer",
          type: "object",
          fields: [
            { name: "copyright", type: "string" },
            { name: "links", type: "list", items: { type: "NavigationItem" } }
          ]
        }
      ]
    })
  ]
});
