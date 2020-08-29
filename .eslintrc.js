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
}
