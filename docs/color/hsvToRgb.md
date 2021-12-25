# hsvToRgb(h,s,v)
将HSV颜色 转为 RGB颜色

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
h | number | 无 | 是  | 色调(0 - 360)
s | number | 无 | 是  | 饱和度(0 - 100)
v | number | 无 | 是  | 明度(0 - 100)


## 返回值
类型   |  说明
---    | ---
string | rgb颜色


## 示例代码
```javascript
const rgb = hsvToRgb(111, 46, 81)

console.log(rgb) // rgb(126,207,112)
```