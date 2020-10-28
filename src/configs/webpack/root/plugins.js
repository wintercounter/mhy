import fs from 'fs'
import path from 'path'

import webpack, { HotModuleReplacementPlugin } from 'webpack'
//import WebpackManifestPlugin from 'webpack-manifest-plugin'
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
        /*        new WebpackManifestPlugin({
            fileName: './manifest.webpack.json'
        }),*/
        new webpack.DefinePlugin({
            mhy: JSON.stringify(getMhyConfig())
        }),
        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV !== 'production' ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: process.env.NODE_ENV !== 'production' ? '[id].css' : '[id].[contenthash].css',
            ignoreOrder: true
        })
    ])
}
