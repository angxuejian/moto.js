import Moate from './SDK/moate'
import * as formatString from './SDK/formatString'
import * as types from './SDK/types'

const _FUNCTIONS = { ...formatString, ...types }

for (const key in _FUNCTIONS) window[key] = _FUNCTIONS[key]
window.Moate = Moate

// -------------------
// 测试是否已挂载到页面上
console.log(window, '--->')
const moate = new Moate()
console.log('今年第' + moate.getWeekNumber() + '周')
console.log('类型是否为string: ', isTypeOf([], 'string'))
console.log('moScrollbar: ', toUpperCaseH('moScrollbar'))