const path = require("path")
const { generateVPressSidebar } = require("../../vpress-navinator")
const vpressNavigatorPath = path.join(process.cwd(), "vpress-navinator.js")

console.log("FROM ROOT LIKE I WANTED")

const Site = {
  url: "https://nuxtguide.com",
  title: "Nuxt Guide",
  description:
    "Provides code snippets, solutions to common problems, and a resource for Nuxt.js developers.",
  ogType: "website",
  ogImage: "images/main-banner.png",
  twitterUsername: "@DavidRoyer_",
  analyticsId: "UA-56060335-9"
}

module.exports = {
  title: Site.title,
  description: Site.description,
  dest: "public",

  head: [
    ["link", { rel: "icon", type: "image/jpg", href: "/favicon.jpg" }],
    ["meta", { name: "og:title", content: Site.title }],
    ["meta", { name: "og:description", content: Site.description }],
    [
      "meta",
      {
        name: "og:image",
        content: `${Site.url}/${Site.ogImage}`
      }
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:url", content: Site.url }]
  ],

  // markdown: {
  //   extendMarkdown: md => {
  //     md.set({ breaks: true })
  //     md.use(require('markdown-it-xxx'))
  //   }
  // }
  // markdown: {
  //   plugins: ["markdown-it-admonition"]
  // },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require("markdown-it-admonition"))
    }
  },

  themeConfig: {
    displayAllHeaders: true,
    sidebar: generateVPressSidebar()
    // smoothScroll: true,
  },

  extraWatchFiles: [require.resolve(vpressNavigatorPath)],

  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@public": path.join(__dirname, "./public")
        }
      }
    }
  },

  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        backgroundTransition: false,
        successText: "Copied"
      }
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],

    [
      "@vuepress/google-analytics",
      {
        ga: Site.analyticsId
      }
    ]
  ]
}
