import fs from 'fs'
import path from 'path'

import webpack, { HotModuleReplacementPlugin } from 'webpack'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
//import WebpackPwaManifestPlugin from 'webpack-pwa-manifest'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import manifest from '@/configs/manifest'
import mhyConfig, { defaultKeys } from '@/configs/mhy'

// Remove default values, no use on client side
const getMhyConfig = () => {
    const config = JSON.parse(JSON.stringify(mhyConfig))
    for (const i of defaultKeys) {
        delete config[i]
    }
    return config
}

export default (plugins = []) => {
    manifest.icons.map(icon => {
        const inCwdPath = path.resolve(process.cwd(), icon.src)
        if (fs.existsSync(inCwdPath)) {
            icon.src = inCwdPath
        }
        return icon
    })

    if (process.env.WEBPACK_DEV_SERVER) {
        plugins.push(new HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins.concat([
        // Disabled currently due to no WP5 support
        //new WebpackPwaManifestPlugin(manifest),
        new WebpackManifestPlugin({
            fileName: './manifest.webpack.json',
            generate: (seed, files, e) => {
                const entries = JSON.parse(JSON.stringify(e))
                const output = {
                    __all: files.map(({ chunk, isAsset, isChunk, isInitial, isModuleAsset, name, path }) => ({
                        isAsset,
                        isChunk,
                        isInitial,
                        isModuleAsset,
                        name,
                        path
                    }))
                }
                for (const [key, chunks] of Object.entries(e)) {
                    output[key] = chunks.map(entry => {
                        const { isAsset, isChunk, isInitial, isModuleAsset, name, path } = files.find(({ path }) =>
                            path.includes(entry)
                        )
                        return { isAsset, isChunk, isInitial, isModuleAsset, name, path }
                    })
                }
                return output
            }
        }),
        new webpack.DefinePlugin({
            mhy: JSON.stringify(getMhyConfig()),
            'process.env': JSON.stringify({
                NODE_ENV: process.env.NODE_ENV
            })
        }),
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV !== 'production' ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: process.env.NODE_ENV !== 'production' ? '[id].css' : '[id].[contenthash].css',
            ignoreOrder: true
        })
    ])
}
