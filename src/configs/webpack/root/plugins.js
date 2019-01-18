import fs from 'fs'
import path from 'path'

import WebpackManifestPlugin from 'webpack-manifest-plugin'
import WebpackPwaManifestPlugin from 'webpack-pwa-manifest'
import { GenerateSW, InjectManifest } from 'workbox-webpack-plugin'

import manifest from '@/configs/manifest'

const defaultSwPath = require.resolve('@/resources/sw')
const projectSwPath = path.resolve(process.cwd(), 'src/sw.js')
const swSrc = fs.existsSync(projectSwPath) ? projectSwPath : defaultSwPath

export default (plugins = []) => {
    manifest.icons.map(icon => {
        const inCwdPath = path.resolve(process.cwd(), icon.src)
        if (fs.existsSync(inCwdPath)) {
            icon.src = inCwdPath
        }
        return icon
    })

    plugins = plugins.concat(new GenerateSW())

    if (fs.existsSync(swSrc)) {
        plugins.push(new InjectManifest({ swSrc }))
    }

    return plugins.concat([
        new WebpackPwaManifestPlugin(manifest),
        new WebpackManifestPlugin({
            fileName: './manifest.webpack.json'
        })
    ])
}
