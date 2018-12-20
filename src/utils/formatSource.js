import FileTypes from '@utils/fileTypes'

const formatSource = (source, format) => {
    switch (format) {
        case FileTypes.ESM:
        case FileTypes.MJS:
        case FileTypes.JSX:
        case FileTypes.TS:
        case FileTypes.TSX:
            return `export default ${JSON.stringify(source, null, 4)}`
        case FileTypes.JS:
            return `module.exports = module.exports.default = ${JSON.stringify(
                source,
                null,
                4
            )}`
        case FileTypes.JSON:
        case FileTypes.JSON_NO_EXT:
            return JSON.stringify(source, null, 2)
        default:
            return source
    }
}
export default formatSource
