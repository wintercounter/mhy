import path from 'path'
import { applyJson, applyEntries } from '@/utils'

const loadConfig = (module, defaults = {}) => {
    const envs = ['root', ...process.env.MHY_ENVS.split(':')]

    for (const env of envs) {
        // 1. from MHY
        applyEntries(defaults, path.join(__dirname, '../configs', module, env), '**/*.{js,cjs}')

        // 2. from process.cwd()
        applyEntries(
            defaults,
            path.join(process.cwd(), process.env.MHY_LOCAL_DIR, 'configs', module, env),
            '**/*.{js,cjs}',
            true
        )

        // 3. from JSON
        defaults = applyJson(module, env, defaults)
    }

    return defaults
}

export default loadConfig
