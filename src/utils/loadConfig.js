import path from 'path'
import { applyJson, applyEntries } from '@/utils'

const loadConfig = (module, defaults = {}) => {
    // 1. MHY root
    applyEntries(
        defaults,
        path.join(__dirname, '../configs', module, 'root'),
        '**/*.js'
    )

    // 2. LOCAL root
    applyEntries(
        defaults,
        path.join(
            process.cwd(),
            process.env.MHY_LOCAL_DIR,
            'configs',
            module,
            'root'
        ),
        '**/*.js'
    )

    // 3. JSON root
    defaults = applyJson(module, 'root', defaults)

    // 4. MHY env
    applyEntries(
        defaults,
        path.join(__dirname, '../configs', module, process.env.NODE_ENV),
        '**/*.js'
    )

    // 5. LOCAL env
    applyEntries(
        defaults,
        path.join(
            process.cwd(),
            process.env.MHY_LOCAL_DIR,
            'configs',
            module,
            process.env.NODE_ENV
        ),
        '**/*.js'
    )

    // 6. JSON env
    defaults = applyJson(module, process.env.NODE_ENV, defaults)

    return defaults
}

export default loadConfig
