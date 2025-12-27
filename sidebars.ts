/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

import {SidebarsConfig} from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Usage",
      collapsed: false,
      items: ["getting-started"],
    },
    {
      type: "category",
      label: "Runtime configuration",
      collapsed: false,
      items: ["config/links", "config/server", "config/telemetry", "config/upstream"],
    },
    {
      type: "category",
      label: "Directives",
      collapsed: false,
      items: [
        "directives/addField",
        "directives/cache",
        "directives/call",
        "directives/discriminate",
        "directives/expr",
        "directives/graphQL",
        "directives/grpc",
        "directives/http",
        "directives/js",
        "directives/modify",
        "directives/omit",
        "directives/protected",
        "directives/rest",
      ].sort(),
    },
    {
      type: "category",
      label: "Contributors",
      collapsed: false,
      items: [
        "contributors/guidelines",
        "contributors/bounty",
        "contributors/testing",
        "contributors/integration-testing",
        "contributors/mutability",
        "contributors/telemetry",
        "contributors/micro-benchmark",
        "contributors/wrk-benchmark",
      ],
    },
  ],
}

module.exports = sidebars
