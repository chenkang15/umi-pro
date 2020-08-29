module.exports = {

    parser:  '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'prettier', 
        'prettier/react',
        'plugin:@typescript-eslint/recommended'
      ],//定义文件继承的子规范
    plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
    env:{                          //指定代码的运行环境
        
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
