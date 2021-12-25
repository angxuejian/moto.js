# hexToRgb(hex)
将HEX颜色 转为 RGB颜色

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
hex | string | 无 | 是  | hex颜色, 必须加#号


## 返回值
类型   |  说明
---    | ---
string | rgb颜色


## 示例代码
```javascript
const rgb = hexToRgb('#7ECF70')

console.log(rgb) // rgb(126,207,112)
```