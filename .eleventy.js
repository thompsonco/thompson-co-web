module.exports = function(eleventyConfig) {
  // Betyr: "Ikke rør innloggingen eller bildene, bare send dem rett ut på nettsiden"
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
