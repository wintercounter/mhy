import path from 'path'

const resolveLoader = () => ({
    modules: ['node_modules', path.resolve(__dirname, '../../../../node_modules')],
    extensions: ['.js', '.mjs', '.css', '.scss', '.json']
})

export default resolveLoader
