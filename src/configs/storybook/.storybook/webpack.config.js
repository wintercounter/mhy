import mhyWP from '@/configs/webpack'

export default ({ config }) => {
    mhyWP.resolve.modules = [...config.resolve.modules, ...mhyWP.resolve.modules]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...config.resolve.alias
    }
    config.resolve = mhyWP.resolve
    config.module = mhyWP.module
    config.mode = 'development'

    return config
}
