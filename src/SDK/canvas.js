


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
