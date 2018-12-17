import fs from 'fs'
import path from 'path'

const writeFile = (dir, filename, src, type = writeFile.JS) =>
    fs.writeFile(
        path.resolve(dir, filename),
        type === writeFile.JSON
            ? JSON.stringify(src, null, 2)
            : type === writeFile.JS
            ? `module.exports = module.exports.default = ${JSON.stringify(
                  src,
                  null,
                  4
              )}`
            : src,
        'utf-8',
        function(err) {
            err && console.error(err)
        }
    )

writeFile.JS = 'js'
writeFile.JSON = 'json'
writeFile.RAW = 'raw'

export default writeFile
