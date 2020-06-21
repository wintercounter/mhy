import { loadConfig } from '@/utils'

const defaults = {
    hooks: {
        "pre-push": "npm test"
    }
}

const eslintConfig = loadConfig('githooks', defaults)

export default eslintConfig
