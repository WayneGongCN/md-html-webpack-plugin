## md-html-webpack-plugin

![Travis (.com)](https://img.shields.io/travis/com/zowiegong/md-html-webpack-plugin.svg?style=popout-square)
![npm](https://img.shields.io/npm/v/md-html-webpack-plugin.svg?style=popout-square)
![NPM](https://img.shields.io/npm/l/md-html-webpack-plugin.svg?style=popout-square)

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