const mhyWP = require('../../webpack').default

module.exports = module.exports.default = (baseConfig, env, defaultConfig) => {
    mhyWP.resolve.modules = [
        ...defaultConfig.resolve.modules,
        ...mhyWP.resolve.modules
    ]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...defaultConfig.resolve.alias
    }
    defaultConfig.resolve = mhyWP.resolve
    defaultConfig.module = mhyWP.module
    return defaultConfig
}
