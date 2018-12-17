const path = require('path')
const fse = require('fs-extra')

module.exports = (technology = 'react', template = 'default', outputPath = 'src') => {
    const source = path.resolve(__dirname, `templates/${technology}/${template}`)
    const destination = path.resolve(process.cwd(), outputPath)

    fse.copy(source, destination, function (err) {
        if (err) {
            return console.error('@mhy/boot', 'An error occured while copying the source to the destination.', err)
        }
        console.log('@mhy/boot', 'Boot completed!')
    })
}