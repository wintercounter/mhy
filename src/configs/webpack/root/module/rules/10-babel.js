import path from 'path'

export default rules => [
    ...rules,
    {
        test: /\.[jt]sx?$/,
        include: path.join(process.cwd(), 'src'),
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: require('@/configs/babel')
            }
        ]
    }
]
