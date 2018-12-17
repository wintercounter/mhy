import path from 'path'
import fs from 'fs'

import { loadConfig } from '../../util'

export default loadConfig('mhy', {
    defaultIndexHtml: path.resolve(__dirname, '../..', 'resources', 'index.html'),
    get indexHtml() {
        const projectIndexHtml = path.resolve(
            process.cwd(),
            this.srcFolder,
            'index.html'
        )
        return fs.existsSync(projectIndexHtml)
            ? projectIndexHtml
            : this.defaultIndexHtml
    },
    get srcFolder() {
        return 'src'
    }
})
