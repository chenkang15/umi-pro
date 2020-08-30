module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react'
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    plugins: ['@typescript-eslint', 'react', 'jsx-control-statements', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true
    },
    globals: {
        $: true
    },
    rules: {
        'prettier/prettier': 1,
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        "eqeqeq": ['warn', 'always'],
        "prefer-const": ['error', { "destructuring": "all", "ignoreReadBeforeAssign": true }],
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/no-unused-vars': 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-triple-slash-reference": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/triple-slash-reference": ['error', { "path": "always", "types": "never", "lib": "never" }],
        // React相关校验规则
        "react/jsx-indent": [2, 4],
        "react/jsx-no-undef": [2, { allowGlobals: true }],
        "jsx-control-statements/jsx-use-if-tag": 0,
        'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
        'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 限制JSX中单行上的props的最大数量
        'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
        'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
        'react/no-string-refs': 1, //Using string literals in ref attributes is deprecated
        'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
        'react/jsx-uses-vars': 1, //防止在JSX中使用的变量被错误地标记为未使用
        'react/no-danger': 1, //防止使用危险的JSX属性
        'react/no-did-update-set-state': 2, //防止在componentDidUpdate中使用setState
        'react/no-did-mount-set-state': 0, //防止在componentDidUpdate中使用setState
        'react/no-direct-mutation-state': 2, //防止this.state赋值
        'react/no-unknown-property': 2, //防止使用未知的DOM属性
        'react/prefer-es6-class': 1, //为React组件强制执行ES5或ES6类
        'react/react-in-jsx-scope': 0, //使用JSX时，必须要引入React
        'react/sort-comp': 0, //强制组件方法顺序
        'react/sort-prop-types': 0, //强制组件属性顺序
        'react/jsx-sort-props': 1,
        'react/no-deprecated': 1, //不使用弃用的方法
        'react/jsx-equals-spacing': 1, //在JSX属性中强制或禁止等号周围的空格
        'react/wrap-multilines': 0,
        // react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};