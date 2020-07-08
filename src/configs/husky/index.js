import { loadConfig } from '@/utils'

const defaults = {
    hooks: {
        "pre-push": "npm test"
    }
}

const huskyConfig = loadConfig('husky', defaults)

export default huskyConfig
