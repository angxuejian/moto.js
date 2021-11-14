class Moate {
  constructor(d) {
    if (!new Date(d).getTime()) {
      throw new Error('Invalid Date')
    }
    this.d   = new Date(d)
    this.year    = this.d.getFullYear()
    this.month   = this.d.getMonth()
    this.mmonth  = this.d.getMonth() + 1
    this.date    = this.d.getDate()
    this.weekDay = this.d.getDay()
  }

  /**
   * 当前日期是 今年的第几周
   * @returns weekNumber 年 周数
   */
  getWeekNumber() {
    const start = new Date(this.d)
    const end   = new Date(this.d)

    start.setMonth(0)
    start.setDate(1)

    const days = (end - start) / (24 * 60 * 60 * 1000)
    const weekNumber = Math.ceil(days / 7)

    return weekNumber
  }

  /**
   * 获取一周的开始时间和结束时间
   * @param {number} base (0 or 1) 0：周日开始；1：周一开始
   * @returns
   */
  getWeekNumberTime(base = 0) {
    if (base !== 0 && base !== 1) {
      throw new Error('select only 0 or 1')
    }

    const min = base ? 1 : 0
    const max = base ? 7 : 6

    const startTime = `${this.year}-${this.mmonth}-${this.date + min - this.weekDay}`
    const endTime   = `${this.year}-${this.mmonth}-${this.date + max - this.weekDay}`

    return { startTime, endTime }
  }
}

module.exports = Moate