# rgb_to_hex(r, g, b)
将RGB颜色 转为 HEX颜色

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
r | number | 无 | 是  | red(0 - 255)
g | number | 无 | 是  | green(0 - 255)
b | number | 无 | 是  | blue(0 - 255)


## 返回值
类型   |  说明
---    | ---
string | hex颜色


## 示例代码
```javascript
const colo = new Color()
const hex = colo.rgb_to_hex(126,207,112)

console.log(hex) // #7ECF70
```