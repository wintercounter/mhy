import path from 'path'

import { loadConfig } from '@/utils'

export default loadConfig('storybook', {
    start: {
        port: 9000,
        host: 'localhost',
        'static-dir': null,
        'config-dir': path.resolve(__dirname, '.storybook')
    },
    build: {
        'static-dir': null,
        'config-dir': path.resolve(__dirname, '.storybook'),
        'output-dir': path.resolve(process.cwd(), '.sb')
    }
})
