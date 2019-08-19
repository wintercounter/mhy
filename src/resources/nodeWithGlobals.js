import path from 'path'
import '@/utils/globals'

const scriptKey = '--mhy-script'
const scriptIndex = process.argv.findIndex(v => v.includes(scriptKey))
const scriptValue = process.argv[scriptIndex]
const src =
    scriptValue.length === scriptKey.length ? process.argv[scriptIndex + 1] : scriptValue.replace(`${scriptKey}=`, '')

// Remove them
process.argv.splice(scriptIndex, 2)

require(path.resolve(process.cwd(), src))
