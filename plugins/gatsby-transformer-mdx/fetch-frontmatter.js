const babel = require('babel-core')
const mdx = require('@mdx-js/mdx')
const babelReact = require('babel-preset-react')
const makePlugin = require('babel-plugin-config-export')

const frontmatter = makePlugin('frontmatter')

module.exports = async (fileContents) => {
  const jsxContents = await mdx(fileContents)
  const result = babel.transform(jsxContents, {
    presets: [ babelReact ],
    plugins: [ frontmatter ]
  })
  
  return frontmatter.getConfig(result)
} 