const fs = require('fs')
const showdown = require('showdown')

class MarkdownToHtmlPlugin {
  constructor (options) {
    this.input = options.input
    this.output = options.output

    this.converter = new showdown.Converter()
  }

  apply (compiler) {
    compiler.hooks.emit.tapAsync('MarkdownToHtmlPlugin', (compilation, callback) => {
      fs.readFile(this.input, 'utf-8', (err, data) => {
        if (err) throw err

        const htmlContent = this.converter.makeHtml(data)
        compilation.assets[this.output] = {
          source: function () {
            return htmlContent
          },
          size: function () {
            return htmlContent.length
          }
        }
        callback()
      })
    })
  }
}

module.exports = MarkdownToHtmlPlugin
