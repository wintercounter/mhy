export default (defaults = []) => [
    ...defaults,
    [
        require.resolve('@babel/preset-env'),
        {
            targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
                esmodules: false
            },
            modules: false
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
