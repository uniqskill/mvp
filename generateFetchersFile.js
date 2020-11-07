const generateFetcher = require('./generateFetcher')
const getFileAst = require('./getFileAst')
const { generateFile, generateItems } = require('./util')

function buildContent(ast) {
  return `import axios from 'axios';\n\n${
    ''}const ${ast.name} = {};\n\n${
    generateItems(ast, generateFetcher)}\n`
}

module.exports = function generateFetchersFile() {
  getFileAst('./actions/products.js', (ast) => {
    generateFile(ast, 'client/src/actions', 'products.js', buildContent(ast))
  })
}
