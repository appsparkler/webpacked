module.exports = {
  entry: {
    foo: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  }
}
