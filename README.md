## md-html-webpack-plugin

### Use

```javascript
const MarkdownToHtmlPlugin = require('md-html-webpack-plugin')

module.exports = {
  entry: 'index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },

  plugins: [
    new MarkdownToHtmlPlugin({
      input: 'CHANGELOG.md',
      output: 'static/CHANGELOG.html'
    })
  ]
}
```