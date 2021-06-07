const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(__dirname, "src", "templates/blog-template.js"),
      context: {
        slug: blog.slug,
      },
    })
  })
}

module.exports.createPages = createPages
