# throttle(func, wait)
节流 - 在 n 秒内只执行一次，会稀释函数执行频率

例：在 1 秒内触发 10 次事件，但事件回调函数只会执行一次

常用：resize事件，mousemove事件

解释：技能释放后，需要等待冷却时间，之后才可以释放

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
func  | function | 无     | 是  | 执行方法
wait | number | 500ms     | 否  | 等待时间 - 单位ms

## 示例代码
```html
<div id='myDiv'></div>
```
```javascript
const div = document.getElementById('myDiv')
div.addEventListener('mousemove', throttle(function(event) {
  console.log('1秒内无论触发多少次，我只打印这一次')
}), 1000)
```