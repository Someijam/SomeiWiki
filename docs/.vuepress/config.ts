import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "SomeiWiki",
  description: "Someijam's Wiki",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
