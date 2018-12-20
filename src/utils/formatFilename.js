import FileTypes from '@/utils/fileTypes'

const formatFilename = (filename, format) => {
    switch (format) {
        case FileTypes.MJS:
            return `${filename}.mjs`
        case FileTypes.JSX:
            return `${filename}.jsx`
        case FileTypes.TS:
            return `${filename}.ts`
        case FileTypes.TSX:
            return `${filename}.tsx`
        case FileTypes.JS:
        case FileTypes.ESM:
            return `${filename}.js`
        case FileTypes.JSON:
            return `${filename}.json`
        case FileTypes.JSON_NO_EXT:
        case FileTypes.RAW:
        default:
            return filename
    }
}

export default formatFilename
