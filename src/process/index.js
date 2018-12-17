import path from 'path'
import { applyEntries } from '../util'

export const loadProcess = module => {
    const d = {}
    applyEntries(
        __dirname,
        module,
        'root',
        d,
        path.join(__dirname, 'ecosystem', 'root', `${module}.js`)
    )
    applyEntries(
        __dirname.module,
        process.env.NODE_ENV,
        d,
        path.join(__dirname, 'ecosystem', process.env.NODE_ENV, `${module}.js`)
    )
    return d[module]
}

export default loadProcess
