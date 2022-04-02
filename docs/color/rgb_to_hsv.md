# rgb_to_hsv(r,g,b)
将RGB颜色 转为 HSV颜色

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
r | number | 无 | 是  | red(0 - 255)
g | number | 无 | 是  | green(0 - 255)
b | number | 无 | 是  | blue(0 - 255)


## 返回值
类型   |  说明
---    | ---
object | hsv颜色

### object属性
属性 | 类型   |  说明
--- | ---   | ---
h | number | 色调(0 - 360)
s | number | 饱和度(0 - 100)
v | number | 明度(0 - 100)


## 示例代码
```javascript
const colo = new Color()
const hsv = colo.rgb_to_hsv(127, 207, 112)

console.log(hsv) // {h: 111, s: 46, v: 81}
```