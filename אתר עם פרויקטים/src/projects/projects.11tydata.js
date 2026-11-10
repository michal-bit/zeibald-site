import path from "node:path";
// כל פרויקט מקבל עמוד בכתובת לפי שם הקובץ המלא (תאריך ושעה), למשל /projects/2026-11-09-12-50-00/
export default {
  layout: "project.njk",
  eleventyComputed: {
    permalink: (data) => `/projects/${path.basename(data.page.inputPath, ".md")}/`,
  },
};
