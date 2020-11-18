```
 0:0  error  Parsing error: ImportDeclaration should appear when the 
mode is ES6 and in the module context

解析错误：ImportDeclaration应该在模式是ES6，并且在模块上下文中

https://eslint.org/docs/user-guide/configuring#specifying-parser-options-1

默认情况下，ESLint需要ECMAScript 5语法。您可以使用解析器选项覆盖该设置以启用对其他ECMAScript版本以及JSX的支持。

请注意，支持JSX语法与支持React并不相同。React将特定的语义应用于ESLint无法识别的JSX语法。如果您使用React并需要React语义，我们建议使用eslint-plugin-react。同样，支持ES6语法与支持新的ES6全局变量（例如的新类型Set）并不相同。对于ES6语法，请使用{ "parserOptions": { "ecmaVersion": 6 } }; 对于新的ES6全局变量，请使用{ "env": { "es6": true } }。{ "env": { "es6": true } }自动启用ES6语法，但{ "parserOptions": { "ecmaVersion": 6 } }不自动启用ES6全局变量。.eslintrc.*使用parserOptions属性在文件中设置解析器选项。可用的选项有：

ecmaVersion-设置为3、5（默认），6、7、8、9、10或11，以指定要使用的ECMAScript语法的版本。您还可以将年份设置为2015（等于6），2016（等于7），2017（等于8），2018（等于9），2019（等于10）或2020（等于11）来使用年份基于命名。
sourceType-设置为"script"（默认），或者"module"代码在ECMAScript模块中。
ecmaFeatures -一个对象，指示您要使用哪些其他语言功能：
globalReturn-允许return在全球范围内发表声明
impliedStrict-启用全局严格模式（如果ecmaVersion大于等于5）
jsx-启用JSX
这是一个示例.eslintrc.json文件：

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