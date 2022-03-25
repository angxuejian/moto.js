# debounce(func, wait, immediate)
防抖 - 先等待 n 秒后执行一次方法 或 先执行方法 n 秒后才可以再次执行

例：等待 1 秒后执行方法 或 执行方法1秒后才可以再次执行

常用：input自动搜索，频繁点击


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
func  | function | 无     | 是  | 执行方法
wait | number | 500ms     | 否  | 等待时间 - 单位ms
immediate| boolean | false | 否 | 是否立即执行防抖 - true是,，false否 

## 示例代码
```html
<input oninput="onSearch" placeholder="输入用户名称搜索" type="text">
```
```javascript

const onSearch = debounce(function(event) {
  console.log('用户停止输入后，等待1秒，才会打印')
}, 1000)
```