module.exports = {

    parser:  '@typescript-eslint/parser', //����ESLint�Ľ�����
    extends: [
        'prettier', 
        'prettier/react',
        'plugin:@typescript-eslint/recommended'
      ],//�����ļ��̳е��ӹ淶
    plugins: ['@typescript-eslint'],//�����˸�eslint�ļ��������Ĳ��
    env:{                          //ָ����������л���
        
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
      // babel parser to support ES6/7 features
      parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true
        },
        sourceType: 'module'
      },
      plugins: [
        'promise', 
        'react', 
        'react-hooks'
      ], 
      rules: {
        'no-compare-neg-zero': 2, //��ֹ�� -0 ���бȽ�
        'no-cond-assign': 2, //��ֹ�������ʽ�г��ָ�ֵ������
        'no-console': 1, //���� console
        'no-constant-condition': 1, //��ֹ��������ʹ�ó������ʽ
        'no-control-regex': 1, //��ֹ��������ʽ��ʹ�ÿ����ַ�
        'no-debugger': 2, //���� debugger
        'no-dupe-args': 2, //��ֹ function �����г�����������
        'no-dupe-keys': 2, //��ֹ�����������г����ظ��� key
        'no-duplicate-case': 2, //��ֹ�����ظ��� case ��ǩ
        'no-const-assign': 1, //��ֹ�޸�const�����ı���
        'no-empty': 1, //��ֹ���ֿ�����
        'no-empty-character-class': 2, //��ֹ��������ʽ��ʹ�ÿ��ַ���
        'no-ex-assign': 2, //��ֹ�� catch �Ӿ���쳣�������¸�ֵ
        'no-extra-boolean-cast': 1, //��ֹ����Ҫ�Ĳ���ת��
        'no-extra-semi': 1, //��ֹ����Ҫ�ķֺ�
        'no-func-assign': 2, //��ֹ�� function �������¸�ֵ
        'no-inner-declarations': 0, //��ֹ��Ƕ�׵Ŀ��г��ֱ��������� function ����,ES6�������ֹ
        'no-invalid-regexp': 2, //��ֹ RegExp ���캯���д�����Ч��������ʽ�ַ���
        'no-irregular-whitespace': 1, //��ֹ���ַ�����ע��֮�ⲻ����Ŀհ�
        'no-obj-calls': 2, //��ֹ��ȫ�ֶ�����Ϊ�������ã�����Math() JSON()
        'no-regex-spaces': 1, //��ֹ������ʽ�������г��ֶ���ո�
        'no-sparse-arrays': 1, //����ϡ������
        'no-unexpected-multiline': 1, //��ֹ������������Ķ��б��ʽ
        'no-unreachable': 1, //��ֹ��return��throw��continue �� break ���֮����ֲ��ɴ����
        'no-unsafe-finally': 2, //��ֹ�� finally �����г��ֿ��������
        'no-unsafe-negation': 1, //��ֹ�Թ�ϵ��������������ʹ�÷񶨲�����
        'use-isnan': 2, //Ҫ��ʹ�� isNaN() ��� NaN���� isNaN(foo),����foo == NaN
        'valid-typeof': 2, //ǿ�� typeof ���ʽ����Ч���ַ���(��: 'undefined', 'object', 'boolean', 'number', 'string', 'function','symbol')���бȽ�
        'no-case-declarations': 1, //�������� case �Ӿ���ʹ�ôʷ�����
        'no-empty-pattern': 2, //��ֹʹ�ÿս⹹ģʽ
        'no-fallthrough': 2, //��ֹ case ������
        'no-global-assign': 2, //��ֹ��ԭ�������ֻ����ȫ�ֶ�����и�ֵ
        'no-octal': 1, //���ð˽���������
        'no-redeclare': 1, //��ֹ�������ͬһ����
        'no-self-assign': 1, //��ֹ���Ҹ�ֵ
        'no-unused-labels': 1, //���ó���δʹ�ù��ı�
        'no-useless-escape': 1, //���ò���Ҫ��ת���ַ�
        'no-delete-var': 2, //��ֹɾ������
        'no-undef': 2, //����ʹ��δ�����ı��������������� /*global */ ע���б��ᵽ
        'no-unused-vars': 1, //��ֹ����δʹ�ù��ı���
        'constructor-super': 2, //Ҫ���ڹ��캯������ super() �ĵ���
        'no-class-assign': 2, //��ֹ���ำֵ
        'no-dupe-class-members': 2, //��ֹ���Ա�г����ظ�������
        'no-new-symbol': 2, //��ֹ Symbol �� new ������һ��ʹ��
        'no-this-before-super': 2, //��ֹ�ڹ��캯���У��ڵ��� super() ֮ǰʹ�� this �� super
        'require-yield': 2, //Ҫ�� generator �������� yield
        'no-mixed-spaces-and-tabs': 1, //Ҫ������space��tab����
        'react/forbid-prop-types': [1, { forbid: ['any'] }], //��ֹĳЩpropTypes
        'react/prop-types': 1, //û�ö�props���ͽ���У��
        'react/jsx-closing-bracket-location': 1, //��JSX����֤������λ��
        'react/jsx-curly-spacing': [1, { when: 'never', children: true }], //��JSX���Ժͱ��ʽ�м�ǿ���ֹ�������ڵĿո�
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
        'comma-dangle': 1, //������������β�����ж���
        'react/no-multi-comp': 0, //��ֹÿ���ļ��ж���������
        'flowtype/generic-spacing': 0, //���Ͷ���ļ�����������ǰ��Ŀո�淶
        'flowtype/space-after-type-colon': 0, //����ע��ֺź�Ŀո�淶
        // react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      }                        
}
