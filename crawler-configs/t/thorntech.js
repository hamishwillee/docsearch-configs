new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.thorntech.com/docs/",
    "https://help.thorntech.com/",
    "https://help.thorntech.com/docs/sftp-gateway-2.0/getting-started-with-sftp-gateway-2.0/",
    "https://help.thorntech.com/docs/sftp-gateway-classic/initial-setup/",
    "https://help.thorntech.com/docs/sftp-gateway-azure/azure-getting-started/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://help.thorntech.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.thorntech.com/**"],
  schedule: "at 19:10 on Friday",
  actions: [
    {
      indexName: "thorntech",
      pathsToMatch: [
        "https://help.thorntech.com/docs/**",
        "https://help.thorntech.com/docs/sftp-gateway-2.0/getting-started-with-sftp-gateway-2.0/**",
        "https://help.thorntech.com/docs/sftp-gateway-classic/initial-setup/**",
        "https://help.thorntech.com/docs/sftp-gateway-azure/azure-getting-started/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lvl5: ".post h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    thorntech: {
      attributesForFaceting: ["type", "lang", "language", "version"],
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