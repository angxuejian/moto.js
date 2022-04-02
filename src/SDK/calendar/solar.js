import Moate from '../moate'
import Lunar from "./lunar";
import { SOLAR_FESTIVAL } from './config'
class Solar extends Lunar {
  constructor() {
    super()
    this.d = null
    this.DAY = null
    this.YEAR = null
    this.MONTH = null
    this.MMONTH = null
  }


  setDate(d) {
    this.d = new Date(d)
    this.DAY = this.d.getDate()
    this.YEAR = this.d.getFullYear()
    this.MONTH = this.d.getMonth()
    this.MMONTH = this.d.getMonth() + 1
  }

  /**
   * 获取一月的日历信息
   */
  getSolarMonth(base) {
    const list = []
    if (this.MONTH === 1) this.isSolarLeapMonth(this.YEAR)

    // 上月日期
    const monday = new Date(`${this.YEAR}-${this.MMONTH}-01`).getDay() - base
    const SM = this.MONTH === 0 ? 11 : this.MONTH - 1
    const sLength = this.months[SM] - monday
    for (let i = sLength; i < this.months[SM]; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MONTH,
        d: i + 1,
        t: 'last'
      }))
    }

    // 当月日期
    for (let i = 0; i < this.months[this.MONTH]; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MMONTH,
        d: i + 1,
        t: 'current'
      }))
    }

    // 下月日期
    const elength = (list.length > 35 ? 42 : 35) - list.length
    for (let i = 0; i < elength; i++) {
      list.push(this.formatDate({
        y: this.YEAR,
        m: this.MONTH + 2,
        d: i + 1,
        t: 'next'
      }))
    }
    return list
  }


  getSolarWeek(base) {
    const list = []
    const now = [this.YEAR, this.MMONTH, this.DAY].join('-')
    const moate = new Moate(now)
    const frist = moate.getWeekNumberTime(base).startTime

    for (let i = 0; i < 7; i++) {
      const d = new Date(frist)
      d.setDate(d.getDate() + i)
      const { yy, mm, dd } = this.getFormat(d)
      list.push(this.formatDate({
        y: yy,
        m: mm,
        d: dd,
      }))
    }

    return list
  }


  getSolarDate() {
    return this.formatDate({ y: this.YEAR, m: this.MMONTH, d: this.DAY })
  }


  /**
   * 获取阳历 + 合并农历 + 并渲染数据
   * @param {object} params 
   * @param {number} params.y 月
   * @param {number} params.m 月
   * @param {number} params.d 日
   */
  formatDate(params) {
    const { y, m } = this.formatIntMonth(params.y, params.m)
    const { d } = params
    const lunar = this.isLunar ? this.solar_to_lunar(y, m, d) : {}
    const solar = this.getSolarDay(y, m, d)
    const data = {
      lunar,
      solar,
      timestamp: new Date([y, m, d].join('-')).getTime(),
      value: [y, m, d].join('-')
    }
    if (params.t) data.type = params.t
    return data
  }

  getSolarDay(sy = this.YEAR, sm = this.MMONTH, sd = this.DAY) {
    const mm = this.padStart(sm)
    const dd = this.padStart(sd)
    return {
      festival: this.isLunar ? [
        SOLAR_FESTIVAL[`${mm}${dd}`],
        this.SOLAR_TERMS[`${mm}${dd}`]
      ].filter(s => s) : [],
      year: sy,
      month: sm,
      day: sd,
      value: [sy, sm, sd].join('-')
    }
  }

  /**
   * 阳历 确认二月份 是28天还是29天
   */
  isSolarLeapMonth(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      this.months[1] = 29
    }
  }


  getFormat(d) {
    const yy = d.getFullYear()
    const mm = d.getMonth() + 1
    const dd = d.getDate()
    return {
      yy,
      mm,
      dd
    }
  }

  /**
   * 超过 12月， 年 + 1
   * @param {number} y 阳历年份 
   * @param {number} m 阳历月份（已加 1 ）
   * @returns { y, m }
   */
  formatIntMonth = function (y, m) {
    if (m > 12) {
      y += 1
      m = 1
    } else if (m === 0) {
      y -= 1
      m = 12
    }
    return { y, m }
  }
}

export default Solar