# roundRect(x, y, w, h, r, ctx)
canvas 绘制圆角矩形

[Canvas实现圆角图片 » 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/study/201406/image-border-radius-canvas.html)

## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
x | number | 无 | 是  | 画布的 x坐标
y | number | 无 | 是  | 画布的 y坐标
w | number | 无 | 是  | 矩形的 宽度
h | number | 无 | 是  | 矩形的 高度
r | number | 无 | 是  | 矩形的 圆角 - 同css border-radius, 只支持px
ctx | object | 无 | 是  | 画布对象



## 示例代码
```html
<canvas id="myCanvas"></canvas>
```
```javascript
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// 在坐标(0, 0)的位置 画120x45的矩形 矩形圆角为10
roundRect(0, 0, 120, 45, 10, ctx)
```