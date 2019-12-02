export default (defaults = []) => [
    ...defaults,
    [
        require.resolve('@babel/preset-env'),
        {
            targets: {
                chrome: 78,
                edge: 15,
                esmodules: false
            },
            modules: false,
            useBuiltIns: 'usage',
            corejs: 3
        }
    ],
    [require.resolve('@babel/preset-react'), {}],
    [
        require.resolve('@babel/preset-typescript'),
        {
            isTSX: true,
            allExtensions: true
        }
    ]
]
