import Solar from "./solar";
import Moate from '../moate'

class Calendar extends Solar {
  constructor(d = new Date()) {
    super()
    if (!new Date(d).getTime()) throw new Error('Invalid Date')

    this.d = new Date(d)
    this.YEAR   = this.d.getFullYear()
    this.MONTH  = this.d.getMonth()
    this.MMONTH = this.d.getMonth() + 1
    this.DAY    = this.d.getDate()
    // this.weekDay = this.d.getDay()
    this.MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 阳历月份
  }

  getMonth() {
    const list = []
    if (this.MONTH === 1) this.leapMonth(this.YEAR)

    // 上月日期
    const monday = new Date(`${this.YEAR}-${this.MMONTH}-01`).getDay()
    const SM = this.MONTH === 0 ? 11 : this.MONTH - 1
    const sLength = this.MONTHS[SM] - monday
    for (let i = sLength; i < this.MONTHS[SM]; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MONTH,
        d: i + 1,
      }))
    }

    // 当月日期
    for (let i = 0; i < this.MONTHS[this.MONTH]; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MONTH + 1,
        d: i + 1,
      }))
    }

    // 下月日期
    const elength = (list.length > 35 ? 42 : 35) - list.length
    for (let i = 0; i < elength; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MONTH + 2,
        d: i + 1,
      }))
    }
    return list
  }


  getWeek() {
    const list = []
    const now = [this.YEAR, this.MMONTH, this.DAY].join('-')
    const moate = new Moate(now)
    const frist = moate.getWeekNumberTime().startTime

    // for (let i = 0; i < (row * 7); i++) {
    //   list.push({
    //     solar: 0
    //   })
    // }

    for (let i = 0; i < 7; i++) {
      const d = new Date(frist)
      d.setDate(d.getDate() + i)
      const { yy, mm, dd } = this.getFormat(d)
      list.push(this.formatDate({ y: yy, m: mm, d: dd, }))
    }

    return list
  }

  /**
   * 获取阳历 + 合并农历 + 并渲染数据
   * @param {object} params 
   * @param {number} params.y 月
   * @param {number} params.m 月
   * @param {number} params.d 日
   */
  formatDate(params) {
    const { y, m } = this.cleanMonth(params.y, params.m)
    const { d } = params
    const info = this.solar_to_lunar(y, m, d)
    return {
      ...info,
      timestamp: new Date([y, m, d].join('-')).getTime(),
    }
  }

  /**
   * 阳历 确认二月份 是28天还是29天
   */
  leapMonth(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      this.MONTHS[1] = 29
    }
  }

  /**
   * 清洗年份 超过 12月， 年 + 1
   * @param {number} y 阳历年份 
   * @param {number} m 阳历月份(1 - 12)
   * @returns { y, m }
   */
  cleanMonth = function (y, m) {
    if (m > 12) {
      y += 1
      m = 1
    } else if (m === 0) {
      y -= 1
      m = 12
    }

    return {
      y,
      m
    }
  }

  getFormat(d) {
    const yy = d.getFullYear()
    const mm = d.getMonth() + 1
    const dd = d.getDate()
    return { yy, mm, dd }
  }
}

export default Calendar