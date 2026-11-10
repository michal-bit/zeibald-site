// קבצי ה־HTML, התמונות והפונט שבתיקייה הראשית מועתקים לאתר כמו שהם, בלי עיבוד.
// רק מה שבתוך src/ עובר דרך Eleventy (עמודי הפרויקטים).
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("*.{png,jpg,jpeg,webp,svg,gif,ico,woff,woff2}");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // הפרויקטים מהחדש לישן (שמות הקבצים הם תאריך ושעה)
  eleventyConfig.addCollection("projectsNewest", (api) =>
    api.getFilteredByGlob("src/projects/*.md").sort((a, b) => b.inputPath.localeCompare(a.inputPath))
  );

  // תיאור עם ירידות שורה
  eleventyConfig.addFilter("lines", (s) =>
    String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]).replace(/\r?\n/g, "<br>")
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
  };
}
