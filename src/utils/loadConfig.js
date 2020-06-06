import path from 'path'
import { applyJson, applyEntries } from '@/utils'

const loadConfig = async (module, defaults = {}) => {
    const envs = ['root', ...process.env.MHY_ENVS.split(':')]
    defaults = typeof defaults === 'function' ? await defaults() : defaults

    for (const env of envs) {
        // 1. from MHY
        await applyEntries(defaults, path.join(__dirname, '../configs', module, env), '**/*.{js,cjs}')

        // 2. from process.cwd()
        await applyEntries(
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
