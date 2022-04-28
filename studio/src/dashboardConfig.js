export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626a902de34d4206f4c62089",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-pxud2b8k",
                  apiId: "92526f6d-b19f-40af-812e-99ebd3d6c6ec",
                },
                {
                  buildHookId: "626a902ef9a488073f849d82",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-rrv37c4b",
                  apiId: "950bbaa8-b613-45b0-9640-466ed93577ad",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/thunem/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-rrv37c4b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
