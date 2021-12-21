import { isTypeOf } from './types'

/**
 * 将字符串大写转换为 -
 * @param {string} str 需要转换的字符
 * @returns {string} 转换完成的字符
 * @example 
 * 
 * toUpperCaseH('moScrollbar') 
 * // => 'mo-scrollbar'
 */
export function toUpperCaseH(str) {
  if (!str) return ''
  if (!isTypeOf(str, 'string')) throw new TypeError(`${str} is not a string`)
  
  const list = str.split('')
  str = list.map(item => {
    if (item.toUpperCase() === item) {
      return '-' + item.toLowerCase()
    } else return item
  })

  return str.join('')
}

