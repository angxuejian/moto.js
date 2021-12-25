# 图片模式
[小程序图片模式](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

## ImgMode对象
图片裁剪、缩放、样式的模式。

### 属性
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
width  | number | 无 | 是 | 图片自身宽度
height | number | 无 | 是 | 图片自身高度
styleW | number | 无 | 是 | 图片样式宽度
styleH | number | 无 | 是 | 图片样式高度

### 方法

方法 | 返回值 | 说明
---  | ---  | ---
getAspectFit | [缩放-返回值](#scale) | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
getAspectFill | [缩放-返回值](#scale) |	缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
getWidthFix | [样式-返回值](#style) | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
getHeightFix | [样式-返回值](#style) | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
getTop | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的顶部区域
getBottom | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的底部区域
getCenter | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的中间区域
getLeft | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的左边区域
getRight | [裁剪-返回值](#draw) | 	裁剪模式，不缩放图片，只显示图片的右边区域
getTopLeft | [裁剪-返回值](#draw) | 	裁剪模式，不缩放图片，只显示图片的左上边区域
getTopRight | [裁剪-返回值](#draw) | 	裁剪模式，不缩放图片，只显示图片的右上边区域
getBottomLeft | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的左下边区域
getBottomRight | [裁剪-返回值](#draw) | 裁剪模式，不缩放图片，只显示图片的右下边区域

<br>
<br>

- <span id='scale'>缩放-返回值</span>
  - [canvas.drawImage](https://www.w3school.com.cn/tags/canvas_drawimage.asp) 方法中的 **x, y, width, height 参数**

- <span id='style'>样式-返回值</span>
  - getWidthFix: 返回 **height px高度**

  - getHeightFix: 返回 **width px宽度**

- <span id='draw'>裁剪-返回值</span>
  - [canvas.drawImage](https://www.w3school.com.cn/tags/canvas_drawimage.asp) 方法中的 **sx, sy, swidth, sheight, x, y, width, height 参数**

### 示例代码
```javascript
const imode = new ImgMode(960, 600, 167, 240)

console.log(imode.getAspectFit()) // {x: 0, y: 67.8125, width: 167, height: 104.375}
console.log(imode.getWidth()) // {height: 104.375}
console.log(imode.getTop()) // {sx: 396.5, sy: 0, swidth: 167, sheight: 240, x: 0, y: 0, widht: 167, height: 240}
```