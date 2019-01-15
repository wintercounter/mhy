import { loadConfig } from '@/utils'
import path from 'path'

export default loadConfig('manifest', {
    name: 'mhy Progressive Web App',
    short_name: 'mhyPWA',
    description: 'mhy awesome Progressive Web App!',
    background_color: '#336699',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
        {
            src: path.resolve(__dirname, './logo-512.png'),
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
            src: path.resolve(__dirname, './logo-1024.png'),
            size: '1024x1024' // you can also use the specifications pattern
        }
    ]
})
