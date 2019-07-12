import mhyWP from '@/configs/webpack'

export default ({ config }) => {
    mhyWP.resolve.modules = [...config.resolve.modules, ...mhyWP.resolve.modules]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...config.resolve.alias
    }
    config.resolve = mhyWP.resolve
    config.module = mhyWP.module

    // Transpile css from anywhere
    config.module.rules.forEach(rule => {
        if (rule.test.toString().includes('css')) {
            rule.include = /./
        }
    })

    // No need to do eslint here...
    const eslint = config.module.rules.find(({ loader }) => loader && loader.includes('eslint'))
    if (eslint) {
        config.module.rules.splice(config.module.rules.indexOf(eslint), 1)
    }
    config.mode = 'development'

    return config
}
