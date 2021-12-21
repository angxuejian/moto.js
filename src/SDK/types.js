/**
 * 判断类型是否一致
 * @param {any} value 需要判断的类型的 值
 * @param {string} type 期望类型
 * @returns {boolean} true / false
 * @example
 * 
 * const value = 'yuhua'
 * isTypeOf(value, 'string')
 * // => true
 */
export function isTypeOf(value, type) {
  if (!value) throw new TypeError(`"value" cannot be empty`)
  if (!type) throw new TypeError(`"type" cannot be empty`)
  if (typeof type !== 'string') throw new TypeError(`${type} is not a string`)
  
  const arr = type.split('')
  arr.splice(0, 1, arr[0].toUpperCase())

  const vv = Object.prototype.toString.call(value)
  const tt = `[object ${arr.join('')}]`

  if (vv === tt) return true
  else return false
  // [object Null]
  // [object Array]
  // [object String]
  // [object Number]
  // [object Object]
  // [object Boolean]
  // [object Function]
  // [object Undefined]
}
