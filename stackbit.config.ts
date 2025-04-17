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
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "index.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown", required: true }
          ]
        }
      ],
    })
  ]
});
