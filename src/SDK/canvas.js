


/**
 * canvas 绘制圆角矩形
 * @param {*} x 画布中的 x坐标
 * @param {*} y 画布中的 y坐标
 * @param {*} w width矩形宽度
 * @param {*} h height矩形高度
 * @param {*} r 圆角 - 同css border-radius, 只支持px
 * @param {*} ctx 画布对象
 */
export function roundRect(x, y, w, h, r, ctx) {
  const minSize = Math.min(w, h)
  if (r > minSize / 2) r = minSize / 2

  const a = x + r // 起点
  const b = x + w // x坐标 + 宽度
  const c = y + h // y坐标 + 高度
  
  ctx.beginPath()
  ctx.moveTo(a, y)
  ctx.arcTo(b, y, b, c, r)
  ctx.arcTo(b, c, x, c, r)
  ctx.arcTo(x, c, x, y, r)
  ctx.arcTo(x, y, a, y, r)
  ctx.closePath()
} 
