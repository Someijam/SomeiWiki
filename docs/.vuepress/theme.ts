import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://someijam.github.io/SomeiWiki/",

  author: {
    name: "Someijam",
    url: "https://blog.someijam.cn",
    email: "lingsomeijam1@outlook.com"
  },

  darkmode: "toggle",

  iconAssets: "fontawesome",

  logo: "/logo.svg",

  repo: "Someijam/SomeiWiki",

  docsDir: "docs",

  toc: true,

  // navbar
  navbar,

  // sidebar
  sidebar,

  sidebarSorter: ["readme","title", "filename","order"],

  footer: "默认页脚",

  displayFooter: true,

  encrypt: {
    config: {
      "/CryptoHack_Selections/": ["LingCryptoHack"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    // All features are enabled for demo, only preserve features you need here

    blog:true,

    autoCatalog: {
      level: 3,
      index: false,
      exclude: [],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      card: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,
      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

    },
  },
});
