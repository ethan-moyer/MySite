const { DateTime } = require("luxon");
const striptags = require("striptags");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("excerpt", (content) => {
        let full = striptags(content).replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "").trim().concat("...");
        let excerpt = striptags(content).substring(0, 250).replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "").trim().concat("...");
        if (full.length == excerpt.length) {
            return content;
        }
        else {
            return excerpt;
        }
    });
}