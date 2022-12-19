// eslint-disable-next-line no-undef
module.exports = {
    env: {
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'eslint-plugin-import-helpers',
        'prettier'
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'import-helpers/order-imports': [
            'warn',
            {
                // example configuration
                newlinesBetween: 'always',
                groups: [
                    '/^react/',
                    '/^@react/',
                    'module',
                    '/^@utils/',
                    '/^@hooks/',
                    '/^@contexts/',
                    '/^@screens/',
                    '/^@components/',
                    '/^@constants/',
                    '/^@services/',
                    '/^@src/',
                    '/^@assets/',
                    '/^@styles/',
                    '/^./components/',
                    '/^./styles/',
                    ['parent', 'sibling', 'index']
                ],
                alphabetize: { order: 'asc', ignoreCase: true }
            }
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'avoid',
                endOfLine: 'auto'
            }
        ],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/require-await': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'no-async-promise-executor': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-call': 'off'
    }
}
