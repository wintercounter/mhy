import TerserPlugin from 'terser-webpack-plugin'

export default (opts = {}) => ({
    ...opts,
    minimizer: [
        ...opts.minimizer,
        new TerserPlugin({
            parallel: true,
            minify: TerserPlugin.swcMinify,
            terserOptions: {
                safari10: true
            }
        })
    ]
})
