import fs from 'fs'
import path from 'path'
import formatSource from '@/utils/formatSource'
import formatFilename from '@/utils/formatFilename'
import FileTypes from '@/utils/fileTypes'

const writeFile = (
    dir,
    filename,
    source,
    format = FileTypes.JS,
    overwrite = true
) => {
    filename = formatFilename(filename, format)
    source = formatSource(source, format)

    const filePath = path.resolve(dir, filename)
    let isExisted = fs.existsSync(filePath)
    let isOverwritten = false
    if (!isExisted || overwrite) {
        fs.writeFileSync(filePath, source)
        isOverwritten = isExisted
    }
    return {
        dir,
        filename,
        source,
        format,
        isExisted,
        isOverwritten
    }
}

export default writeFile
