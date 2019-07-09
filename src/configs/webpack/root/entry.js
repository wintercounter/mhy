export default () => {
    const returnValue = {
        app: ['./src']
    }
    if (process.env.WEBPACK_DEV_SERVER) {
        returnValue.app = [require.resolve('react-hot-loader/patch'), ...returnValue.app]
    }
    return returnValue
}
