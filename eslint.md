```
 0:0  error  Parsing error: ImportDeclaration should appear when the 
mode is ES6 and in the module context

��������ImportDeclarationӦ����ģʽ��ES6��������ģ����������

https://eslint.org/docs/user-guide/configuring#specifying-parser-options-1

Ĭ������£�ESLint��ҪECMAScript 5�﷨��������ʹ�ý�����ѡ��Ǹ����������ö�����ECMAScript�汾�Լ�JSX��֧�֡�

��ע�⣬֧��JSX�﷨��֧��React������ͬ��React���ض�������Ӧ����ESLint�޷�ʶ���JSX�﷨�������ʹ��React����ҪReact���壬���ǽ���ʹ��eslint-plugin-react��ͬ����֧��ES6�﷨��֧���µ�ES6ȫ�ֱ����������������Set��������ͬ������ES6�﷨����ʹ��{ "parserOptions": { "ecmaVersion": 6 } }; �����µ�ES6ȫ�ֱ�������ʹ��{ "env": { "es6": true } }��{ "env": { "es6": true } }�Զ�����ES6�﷨����{ "parserOptions": { "ecmaVersion": 6 } }���Զ�����ES6ȫ�ֱ�����.eslintrc.*ʹ��parserOptions�������ļ������ý�����ѡ����õ�ѡ���У�

ecmaVersion-����Ϊ3��5��Ĭ�ϣ���6��7��8��9��10��11����ָ��Ҫʹ�õ�ECMAScript�﷨�İ汾���������Խ��������Ϊ2015������6����2016������7����2017������8����2018������9����2019������10����2020������11����ʹ����ݻ���������
sourceType-����Ϊ"script"��Ĭ�ϣ�������"module"������ECMAScriptģ���С�
ecmaFeatures -һ������ָʾ��Ҫʹ����Щ�������Թ��ܣ�
globalReturn-����return��ȫ��Χ�ڷ�������
impliedStrict-����ȫ���ϸ�ģʽ�����ecmaVersion���ڵ���5��
jsx-����JSX
����һ��ʾ��.eslintrc.json�ļ���

{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
    }
}
```