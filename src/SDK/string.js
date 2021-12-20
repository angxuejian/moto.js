import { isTypeOf } from '../util/index'

/**
 * 将字符串大写转换为 -
 * @param {string} str 需要转换的字符
 * @returns 转换完成的字符
 *
 * 示例: toUpperCaseH(moScrollbar) => mo-scrollbar
 */
export const toUpperCaseH = (str) => {

  if (!str) {
    throw new TypeError(`"str" cannot be empty`)
  }

  if (!isTypeOf(str, 'string')) {
    throw new TypeError(`${str} is not a string`)
  }

  const list = str.split('')

  str = list.map(item => {
    if (item.toUpperCase() === item) {
      return '-' + item.toLowerCase()
    } else return item
  })
  return str.join('')
}
