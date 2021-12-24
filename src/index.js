import Calendar from './SDK/calendar/main'
import Moate from './SDK/moate'
import ImgMode from './SDK/imgMode'
import * as formatString from './SDK/formatString'
import * as types from './SDK/types'
import * as color from './SDK/color'

const _FUNCTIONS = { ...formatString, ...types, ...color }

for (const key in _FUNCTIONS) window[key] = _FUNCTIONS[key]
window.Moate = Moate
window.Calendar = Calendar
window.ImgMode = ImgMode

// -------------------
// 测试是否已挂载到页面上
console.log(window, '--->')
const moate = new Moate()
const calen = new Calendar('2022-8-5')
const imode = new ImgMode(960, 600, 167, 240)
console.log('今年第' + moate.getWeekNumber() + '周')
console.log('类型是否为string: ', isTypeOf([], 'string'))
console.log('moScrollbar: ', toUpperCaseH('moScrollbar'))

console.log('本月的日历周日开始:', calen.getMonth())
console.log('本月的日历周一开始:', calen.getMonth(1))

console.log('本周的日历周日开始:', calen.getWeek())
console.log('本周的日历周一开始:', calen.getWeek(1))
console.log('本日的日历信息:', calen.getDay())

console.log('rgb转hsv:', rgbToHsv(127, 207, 112))
console.log('hsv转rgb:', hsvToRgb(111, 46, 81))
console.log('rgb转hex:', rgbToHsv(127, 207, 112))
console.log('hex转rgb:', hexToRgb('#7ECF70'))

console.log('图片模式：', imode.getAspectFill())