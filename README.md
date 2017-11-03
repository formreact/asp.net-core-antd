# asp.net core antd

0. 在VS2017中创建ASP.NET Core Web项目，带React.js。

1. 删除npm-shrinkwrap.json

2. package.json中加入：<br>
"antd": "2.13.8"

3. 参考：https://ant.design/components/layout-cn/<br>
在ClientApp目录中加入Ant Design Layout布局代码。<br>
主要是修改Layout.tsx，并改名为MainLayout.tsx，删除NavMenu.txs。<br>
site.css中加入：<br>
@import '~antd/dist/antd.css';<br>

4. TS2605: JSX element type 'Button' is not a constructor function for JSX elements.<br>
  Property 'setState' is missing in type 'Button'.<br>
这类错误的解决方式是：<br>
tsconfig.json中加入:<br>
"allowSyntheticDefaultImports": true<br>
https://github.com/ant-design/ant-design/issues/4892<br>

5. TS2694: Namespace 'React' has no exported member 'TextareaHTMLAttributes'.<br>
ERROR in [at-loader] <br>
这个错误的解决方式是：<br>
package.json中改为15.0.38：<br>
"@types/react": "15.0.38"<br>
https://github.com/OfficeDev/office-ui-fabric-react/issues/2393

6. TS2304: Cannot find name 'PropertyKey'.<br>
ERROR in [at-loader] <br>
这类错误的解决方式是：<br>
tsconfig.json中加入：<br>
"lib": [ "dom", "es2015" ]<br>
https://github.com/ant-design/ant-design/issues/6874

感谢：Ant Design，如有更好的实现方式，请告诉我。

后面会加入Ant Design的组件Demo代码，移植为TypeScript兼容：<br>
https://ant.design/docs/react/introduce-cn