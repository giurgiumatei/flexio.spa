module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'no-console' : 1,
        '@typescript-eslint/explicit-module-boundary-types' : 'off',
        'object-curly-spacing': [1, 'always'],
        'quotes' : [1, 'single', 'avoid-escape'],
        'jsx-quotes': [1, 'prefer-single'],
        'semi' : [1, 'always'],
        'comma-dangle' : [1, 'never'],
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true
    },
    globals: {
        JSX: true
    }
};