module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles/");
  eleventyConfig.addWatchTarget("./src/styles/");

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "public",
    },
  };
};
