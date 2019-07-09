export default (defaults = []) => [
    ...defaults,
    [
        require.resolve('@babel/preset-env'),
        {
            targets: {
                "chrome": 78,
                "edge": 18,
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
