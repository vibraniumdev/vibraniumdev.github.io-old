const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/guiemi/GitHub/websites/vibranium.dev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/guiemi/GitHub/websites/vibranium.dev/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/guiemi/GitHub/websites/vibranium.dev/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/guiemi/GitHub/websites/vibranium.dev/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/guiemi/GitHub/websites/vibranium.dev/src/templates/blog-post.js")))
}

