export default resolve => {
    const returnValue = {
        ...resolve,
        unsafeCache: /node_modules|lib/
    }

    if (process.env.WEBPACK_DEV_SERVER) {
        returnValue.alias = {
            ...returnValue.alias,
            'react-dom': '@hot-loader/react-dom'
        }
    }

    return returnValue
}
