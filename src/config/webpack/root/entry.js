module.exports.default = () => ({
    vendor: [
        require.resolve('formdata-polyfill'),
        require.resolve('babel-polyfill'),
        require.resolve('whatwg-fetch'),
        require.resolve('url-search-params-polyfill')
    ],
    app: ['./src']
})
