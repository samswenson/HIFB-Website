// stackbit.config.ts
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["."],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "index.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        }
        // Your other models here...
      ]
    })
  ],
  // Simple siteMap function for your current structure
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");
    
    return documents
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      .map((document) => {
        if (document.modelName === "HomePage") {
          return {
            stableId: document.id,
            urlPath: "/",
            document,
            isHomePage: true
          };
        }
        
        return null;
      })
      .filter(Boolean) as SiteMapEntry[];
  }
});
