# asp.net core antd

1. 删除npm-shrinkwrap.json

2. package.json中加入：
"antd": "2.13.8"

3. 参考：https://ant.design/components/layout-cn/
在ClientApp目录中加入Ant Design Layout布局代码。
主要是修改Layout.tsx，并改名为MainLayout.tsx，删除NavMenu.txs。
site.css中加入：
@import '~antd/dist/antd.css';

4. TS2605: JSX element type 'Button' is not a constructor function for JSX elements.
  Property 'setState' is missing in type 'Button'.
这类错误的解决方式是：
tsconfig.json中加入:
"allowSyntheticDefaultImports": true
https://github.com/ant-design/ant-design/issues/4892

5. TS2694: Namespace 'React' has no exported member 'TextareaHTMLAttributes'.
ERROR in [at-loader] 
这个错误的解决方式是：
package.json中改为15.0.38：
"@types/react": "15.0.38"

6. TS2304: Cannot find name 'PropertyKey'.
ERROR in [at-loader] 
这类错误的解决方式是：
tsconfig.json中加入：
"lib": [ "dom", "es2015" ]
https://github.com/ant-design/ant-design/issues/6874

感谢：Ant Design，如有更好的实现方式，请告诉我。