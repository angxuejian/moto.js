import { isTypeOf } from "./types";


const init = (t) => {
  if (!isTypeOf(t, 'number')) throw new TypeError(`"${t}" type error, "${t}" should be a number type`)
}


class ImgMode {
  constructor(width, height, styleW, styleH) {
    [width, height, styleW, styleH].map(init)

    this.width  = width  // 图片自身宽度
    this.height = height // 图片自身高度

    this.styleW = styleW // 图片样式宽度
    this.styleH = styleH // 图片样式高度
  }

  /**
   * aspectFit
   * @returns canvas.drawImage()所需的 { x, y, width, height }
   */
  getAspectFit() {
    const { width, height, styleH, styleW  } = this
    const scale = width / height // 宽高比例
    let [x, y, w, h] = []

    if (width < height) {
      h = styleH
      w = h * scale
    } else {
      w = styleW
      h = w / scale
    }
    x = (styleW - w) / 2
    y = (styleH - h) / 2
  
    return { x, y, width: w, height: h }
  }

  /**
   * aspectFill
   * @returns 
   */
  getAspectFill() {
    const { width, height, styleH, styleW  } = this
    const scale = width / height // 宽高比例
    let [x, y, w, h] = []
    
    if (width < height) {
      w = styleW 
      h = styleW / scale
      x = 0
      y = (styleH - h) / 2
      
    } else {
      w = styleH * scale
      h = styleH
      x = (styleW - w) / 2
      y = 0
    }

    return { x, y, width: w, height: h }
  }

  /**
   * widthFix
   * @returns {object} 标签内联样式高度
   */
  getWidthFix() {
    const { width, height, styleW } = this
    let scale = styleW / width
    let h = height * scale

    return { height: h }
  }

  /**
   * heightFix
   * @returns {object} 标签内联样式宽度
   */
  getHeightFix() {
    const { width, height, styleH } = this
    let scale = styleH / height
    let w = width * scale

    return { width: w }
  }

  /**
   * top
   * @returns canvas.drawImage()所需的 {sx, sy, sw, sh, x, y, width, height }
   */
  getTop() {
    const { width, height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw) / 2
    sy = 0
    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // bottom
  getBottom() {

    const { width, height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw) / 2
    sy = height - sh

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // center
  getCenter() {
    const { width, height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw) / 2
    sy = (height - sh) / 2

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // left
  getLeft() {
    const { height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = (height - sh) / 2

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // right
  getRight() {
    const { width, height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = (width - sw)
    sy = (height - sh) / 2

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // top left 
  getTopLeft() {
    const { styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = 0

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // top right
  getTopRight() {
    const { width, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = width - styleW
    sy = 0

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // bottom left 
  getBottomLeft() {
    const { height, styleH, styleW  } = this

    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = 0
    sy = height - styleH

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH}
  }

  // bottom right
  getBottomRight() {
    const { width, height, styleH, styleW  } = this
    let [sx, sy, sw, sh] = []

    sw = styleW
    sh = styleH
    sx = width - styleW
    sy = height - styleH

    return { sx, sy, swidth:sw, sheight:sh, x: 0, y: 0, width:styleW, height:styleH }
  }
}

export default ImgMode