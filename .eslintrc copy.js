module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        // "airbnb-base",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'jsx-control-statements',
        'prettier',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true,
    },
    globals: {
        $: true,
    },
    rules: {
        'prettier/prettier': 1,
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        eqeqeq: ['warn', 'always'],
        'prefer-const': [
            'error',
            { destructuring: 'all', ignoreReadBeforeAssign: true },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
            { VariableDeclarator: 4, SwitchCase: 1 },
        ],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'always', types: 'never', lib: 'never' },
        ],
        // React���У�����
        'react/jsx-indent': [2, 4],
        'react/jsx-no-undef': [2, { allowGlobals: true }],
        'jsx-control-statements/jsx-use-if-tag': 0,
        'react/jsx-key': 2, //����������������֤JSX����key����
        'react/jsx-max-props-per-line': [1, { maximum: 1 }], // ����JSX�е����ϵ�props���������
        'react/jsx-no-duplicate-props': 2, //��ֹ��JSX���ظ���props
        'react/jsx-no-undef': 1, //��JSX�н�ֹδ�����ı���
        'react/no-string-refs': 1, //Using string literals in ref attributes is deprecated
        'react/jsx-uses-react': 1, //��ֹ��Ӧ������ر��Ϊδʹ��
        'react/jsx-uses-vars': 1, //��ֹ��JSX��ʹ�õı���������ر��Ϊδʹ��
        'react/no-danger': 1, //��ֹʹ��Σ�յ�JSX����
        'react/no-did-update-set-state': 2, //��ֹ��componentDidUpdate��ʹ��setState
        'react/no-did-mount-set-state': 0, //��ֹ��componentDidUpdate��ʹ��setState
        'react/no-direct-mutation-state': 2, //��ֹthis.state��ֵ
        'react/no-unknown-property': 2, //��ֹʹ��δ֪��DOM����
        'react/prefer-es6-class': 1, //ΪReact���ǿ��ִ��ES5��ES6��
        'react/react-in-jsx-scope': 0, //ʹ��JSXʱ������Ҫ����React
        'react/sort-comp': 0, //ǿ���������˳��
        'react/sort-prop-types': 0, //ǿ���������˳��
        'react/jsx-sort-props': 1,
        'react/no-deprecated': 1, //��ʹ�����õķ���
        'react/jsx-equals-spacing': 1, //��JSX������ǿ�ƻ��ֹ�Ⱥ���Χ�Ŀո�
        'react/wrap-multilines': 0,
        // react-hooks
        // 'react-hooks/rules-of-hooks': 'error',
        // 'react-hooks/exhaustive-deps': 'warn'
    },
};
