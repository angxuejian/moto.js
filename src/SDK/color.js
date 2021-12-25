import { isTypeOf } from "./types";


const init = (t) => {
  if (!isTypeOf(t, 'number')) throw new TypeError(`"${t}" type error, "${t}" should be a number type`)
}

/**
 * hsv 转 rgb
 * @param {number} h 色调 0 - 360
 * @param {number} s 饱和度 0 - 100
 * @param {number} v 明度 0 - 100
 */
export function hsvToRgb(h, s, v) {
  [h,s,v].map(init)
  
  // 将 坐标值 转换为 百分比 0% - 100%
  s = s / 100
  v = v / 100

  const i = parseInt(h / 60), // 将 坐标值 转换为 角度 0° - 360°
    f = h / 60 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);

  const list = [
    [v, t, p],
    [q, v, p],
    [p, v, t],
    [p, q, v],
    [t, p, v],
    [v, p, q]
  ]

  const rgb = list[i % 6].map(hr_round) // i mod 6: 是因为有六种可能性
  return `rgb(${rgb.join()})` 
}
/**
 * rgb 转 hsv
 * @param {number} r red 0 - 255
 * @param {number} g green 0 - 255
 * @param {number} b blue 0 - 255
 */
export function rgbToHsv(r, g, b) {
  [r, g, b].map(init)
  const [red, green, blue] = [r, g, b].map(rh_range)

  let h = 0,
    s = 0,
    v = 0;

  const max = Math.max(red, green, blue),
    min = Math.min(red, green, blue);

  const l = max - min

  v = max
  s = l / max
  const list = {
    [red]: clearNaN((green - blue), l) + (g < b ? 6 : 0),
    [green]: 2 + clearNaN((blue - red), l),
    [blue]: 4 + clearNaN((red - green), l),
  }

  h = list[max] / 6
  if (h < 0) h + 360

  const data = {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  }
  return data
}


/**
 * ----------------------------------
 * 分隔线
 * ----------------------------------
 */


/**
 * rgb 转 hex
 * @param {number} r red 0 - 255
 * @param {number} g green 0 - 255
 * @param {number} b blue 0 - 255
 */
export function rgbToHex (r, g, b) {
  [r, g, b].map(init)
  return `#${[r, g, b].map(rh_string).join(' ').replace(/\s*/g, '')}`
}
/**
 * hex 转 rgb
 * @param {string} hex #7ECF70
 */
export function hexToRgb (hex) {
  hex = hex.replace(/\s*/g, "")

  if (!/^#[0-9a-fA-F]{6}/g.test(hex)) return ''
  const h = hex.substring(1, 3),
        e = hex.substring(3, 5),
        x = hex.substring(5, 7);
  const rgb = [h, e, x].map(hr_number)
  return `rgb(${rgb.join()})`
}


/**
 * ----------------------------------
 * 分隔线
 * ----------------------------------
 */


/**
 * hsv 转 rgb | 转为rgb范围
 * @param {number} n [0-1]
 */
const hr_round = n => {
  // list[i % 6] 取出值范围均为 [0-1, 0-1, 0-1] 
  // 依次 * 255 后 转为rgb 0-255 的范围 [0-255, 0-255, 0-255]
  return Math.round(n * 255)
}


/**
 * rgb 转 hsv | 转为hsv范围
 * @param {number} n [0-1] 
 */
const rh_range = n => {
  // n 的范围为 0-1
  // 依次 / 255 后 转为hsv 的范围 [0-360, 0-100, 0-100]
  return n / 255
}


/**
 * rgb 转 hex | 转为hex范围
 * @param {number} s [0-255]
 */
const rh_string = s => {
  // 将 0-255 转为 [0-9a-fA-F]
  let str = s.toString(16)
  return str.padStart(2, '0').toUpperCase()
}


/**
 * hex 转 rgb | 转为rgb范围
 * @param {string} s [0-9a-fA-F] 
 */
const hr_number = s => {
  // 将 [0-9a-fA-F] 转为 0-255
  return parseInt(s, 16)
}

/**
 * 防止出现 0 / 0 = NaN 情况出现
 * @param {number} x 被除数 
 * @param {number} y 除数 
 */
const clearNaN = (x, y) => {
  if (x === 0 && y === 0) return 0
  else return x / y
}
