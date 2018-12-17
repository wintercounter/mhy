import { loadConfig } from '../../util'

export default loadConfig('tslint', {
    extends: [
        'tslint:recommended',
        'tslint-config-airbnb',
        'tslint-react',
        'tslint-config-prettier'
    ],
    rules: {
        'max-line-length': {
            options: [120]
        },
        'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-pascal-case'
        ],
        semicolon: [true, 'never'],
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-consecutive-blank-lines': false,
        quotemark: [true, 'single', 'jsx-double'],
        indent: [true, 'spaces', 4],
        'member-access': [true, 'no-public'],
        'arrow-parens': [true, 'ban-single-arg-parens'],
        'array-type': false,
        'object-literal-sort-keys': false,
        'no-boolean-literal-compare': false,
        'import-name': false,
        'trailing-comma': [
            true,
            {
                multiline: 'never',
                singleline: 'never'
            }
        ],
        'jsx-alignment': false,
        align: false,
        'ordered-imports': false,
        'jsx-boolean-value': [true, 'never'],
        'jsx-no-multiline-js': false,
        'no-empty-interface': false,
        'no-var-requires': false,
        'no-shadowed-variable': false
    }
})
