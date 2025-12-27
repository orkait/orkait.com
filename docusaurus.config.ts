import {themes as prismThemes} from "prism-react-renderer"
import type * as Preset from "@docusaurus/preset-classic"
import prismTheme from "./src/theme/CodeBlock/theme"
import type {Config} from "@docusaurus/types"
import {getNavDropdownItemHtml} from "./src/utils"

const title = "Orkait"
const organization = "orkait"
const project = "orkait-website"

export default {
  title,
  trailingSlash: true,
  tagline: "we craft digital experience that inspire",
  headTags: [
    {
      tagName: "script",
      attributes: {
        id: "chatbotscript",
        "data-accountid": "CZPG9aVdtk59Tjz4SMTu8w==",
        "data-websiteid": "75VGI0NlBqessD4BQn2pFg==",
        src: "https://app.robofy.ai/bot/js/common.js?v=" + new Date().getTime(),
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Orkait",
        url: "https://orkait.com/",
      }),
    },
  ],
  url: "https://orkait.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  favicon: "images/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organization, // Usually your GitHub org/user name.
  projectName: project, // Usually your repo name.
  deploymentBranch: "main", // Branch that GitHub pages will deploy from.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
      },
    },
  },
  future: {
    experimental_faster: false, // Required for faster production builds. For reference: https://docusaurus.io/blog/releases/3.6#adoption-strategy
  },
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      {
        docs: {
          // docRootComponent: require.resolve("./src/components/docs/Layout.tsx"),
          sidebarPath: require.resolve("./sidebars.ts"),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organization}/${project}/tree/develop`,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/blogs/**"],
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "icons/companies/orkait.svg",

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Orkait Logo",
        src: "animations/animated_eye.gif",
      },
      items: [
        {to: "/", label: "Home", position: "left", activeBaseRegex: "^/$"},
        {to: "/services", label: "Services", position: "left"},
        {to: "/about", label: "About", position: "left"},
        {to: "/contact", label: "Contact", position: "left"},
        // {to: "/blog", label: "Blog", position: "left"},
        // Developers dropdown disabled - no developer API/docs available yet
        // Uncomment when ready to add documentation
        // {
        //   label: "Developers",
        //   position: "left",
        //   items: [
        //     {
        //       to: "/docs",
        //       html: getNavDropdownItemHtml("/images/home/book.svg", "Docs Icon", "Docs"),
        //     },
        //   ],
        // },
      ],
    },
    prism: {
      theme: prismTheme,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["protobuf", "json", "diff"],
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    tableOfContents: {},
  } satisfies Preset.ThemeConfig,
  plugins: [
    // Blog plugin disabled - no blogs available yet
    // [
    //   "./plugins/custom-blog-plugin.ts",
    //   {
    //     path: "blog",
    //     editLocalizedFiles: false,
    //     blogTitle: "Feed of Orkait blogs",
    //     blogDescription: "List of blog posts on Orkait blog",
    //     blogSidebarCount: 10,
    //     blogSidebarTitle: "Recent Blog Posts",
    //     routeBasePath: "blog",
    //     include: ["**/*.{md,mdx}"],
    //     exclude: ["**/_*.{js,jsx,ts,tsx,md,mdx}", "**/_*/**", "**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**"],
    //     postsPerPage: "ALL",
    //     blogListComponent: "@theme/BlogListPage",
    //     blogPostComponent: "@theme/BlogPostPage",
    //     blogTagsListComponent: "@theme/BlogTagsListPage",
    //     blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
    //     rehypePlugins: [],
    //     beforeDefaultRemarkPlugins: [],
    //     beforeDefaultRehypePlugins: [],
    //     truncateMarker: /<!--\s*(truncate)\s*-->/,  
    //     showReadingTime: true,
    //     feedOptions: {
    //       type: "all",
    //       copyright: `Copyright © ${new Date().getFullYear()} Orkait, Inc.`,
    //     },
    //     onInlineAuthors: "throw",
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "privacy",
        path: "privacy",
        routeBasePath: "privacy",
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./privacy/sidebar.ts"),
      },
    ],

    // GraphQL docs plugin disabled - not needed for Orkait
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "graphql",
    //     path: "graphql",
    //     routeBasePath: "graphql",
    //     showLastUpdateTime: true,
    //     sidebarPath: require.resolve("./graphql/sidebar.ts"),
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "releases",
        path: "releases",
        routeBasePath: "releases",
        showLastUpdateTime: true,
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}: any) {
          const sidebarItems = await defaultSidebarItemsGenerator(args)
          return sidebarItems.reverse()
        },
      },
    ],
    async function tailwindPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          return {
            ...postcssOptions,
            plugins: [...postcssOptions.plugins, require("tailwindcss"), require("autoprefixer")],
          }
        },
      }
    },
  ],
} satisfies Config
