const crypto = require('crypto')
const readTime = require('reading-time')
const fetchFrontmatter = require('./fetch-frontmatter')

module.exports = async ({
  node, getNode, loadNodeContent, boundActionCreators
}) => {
  const { createNode, createParentChildLink } = boundActionCreators

  if (
    node.internal.mediaType !== `text/markdown` &&
    node.internal.mediaType !== `text/x-markdown`
  ) {
    return
  }

  if (node.owner === "gatsby-transformer-react-docgen") {
    return;
  }

  const content = await loadNodeContent(node)

  const mdxNode = {
    ...node,
    id: `${node.id} >>> Mdx`,
    children: [],
    parent: node.id,
    internal: {
      content,
      type: `Mdx`,
    },
  }

  const data = await fetchFrontmatter(content)

  mdxNode.readTime = readTime(content)
  mdxNode.frontmatter = {
    title: '',
    ...data
  }

  mdxNode.internal.contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(mdxNode))
    .digest(`hex`)

  createNode(mdxNode)
  createParentChildLink({ parent: node, child: mdxNode })
}
