new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://svgjs.dev/docs/2.7",
    "https://svgjs.dev/",
    "https://svgjs.dev/docs/3.0",
    "https://svgjs.dev/docs/3.1",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://svgjs.dev/docs/2.7/sitemap/",
    "https://svgjs.dev/docs/3.0/sitemap/",
    "https://svgjs.dev/docs/3.1/sitemap/",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://svgjs.dev/**"],
  schedule: "at 15:50 on Friday",
  actions: [
    {
      indexName: "svgjs",
      pathsToMatch: ["https://svgjs.dev/docs/2.7**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-nav ul li.sidebar-nav-active > a",
            content: "#main p, #main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#main h1",
            lvl3: "#main h2",
            lvl4: "#main h3",
            lvl5: "#main h4",
            lvl6: "#main h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "svgjs",
      pathsToMatch: ["https://svgjs.dev/docs/3.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-nav ul li.sidebar-nav-active > a",
            content: "#main p, #main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#main h1",
            lvl3: "#main h2",
            lvl4: "#main h3",
            lvl5: "#main h4",
            lvl6: "#main h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "svgjs",
      pathsToMatch: ["https://svgjs.dev/docs/3.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-nav ul li.sidebar-nav-active > a",
            content: "#main p, #main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#main h1",
            lvl3: "#main h2",
            lvl4: "#main h3",
            lvl5: "#main h4",
            lvl6: "#main h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    svgjs: {
      attributesForFaceting: ["type", "lang", "version"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.page_rank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});