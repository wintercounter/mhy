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
            modules: false
        }
    ],
    [
        require.resolve('@babel/preset-react'),
        {
            // runtime: 'automatic'
        }
    ],
    [
        require.resolve('@babel/preset-typescript'),
        {
            isTSX: true,
            allExtensions: true
        }
    ]
]
