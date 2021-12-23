import Calendar from './SDK/calendar/main'
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
const calen = new Calendar('2022-8-5')
console.log('今年第' + moate.getWeekNumber() + '周')
console.log('类型是否为string: ', isTypeOf([], 'string'))
console.log('moScrollbar: ', toUpperCaseH('moScrollbar'))

console.log('本月的日历周日开始:', calen.getMonth())
console.log('本月的日历周一开始:', calen.getMonth(1))

console.log('本周的日历周日开始:', calen.getWeek())
console.log('本周的日历周一开始:', calen.getWeek(1))
console.log('本日的日历信息:', calen.getDay())