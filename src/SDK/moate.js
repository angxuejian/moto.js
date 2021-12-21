class Moate {
  constructor(d = new Date()) {
    if (!new Date(d).getTime()) throw new Error('Invalid Date')
    
    this.d   = new Date(d)
    this.year    = this.d.getFullYear()
    this.month   = this.d.getMonth()
    this.mmonth  = this.d.getMonth() + 1
    this.date    = this.d.getDate()
    this.weekDay = this.d.getDay()
  }

  /**
   * 当前日期是 今(年 or 月)的第几周
   * @param {number} type (0 or 1) 0：年； 1：月
   * @param {number} base (0 or 1) 0：以周日计算本月周数；1：以周一计算本月周数
   * @returns weekNumber (年 or 月) 周数
   */
  getWeekNumber(type = 0, base = 0) {
    if (type !== 0 && type !== 1) throw new Error('select only 0 or 1')
    
    const start = new Date(this.d)
    const end   = new Date(this.d)
    let baseNum = 0

    if (!type) {
      start.setMonth(0)
      start.setDate(1)
    } else {
      start.setDate(1)
      baseNum = base ? 1 : 2
    }

    const days = ((end - start) || 1) / (24 * 60 * 60 * 1000) + baseNum
    const weekNumber = Math.ceil(days / 7)
    return weekNumber
  }

  /**
   * 获取一周的开始时间和结束时间
   * @param {number} base (0 or 1) 0：周日开始；1：周一开始
   * @returns { startTime, endTime } 开始时间 和 结束时间
   */
  getWeekNumberTime(base = 0) {
    if (base !== 0 && base !== 1) throw new Error('select only 0 or 1')
    
    const min = base ? 1 : 0
    const max = base ? 7 : 6

    const start = new Date(this.d)
    const end   = new Date(this.d)
    start.setDate(this.date + min - this.weekDay)
    end.setDate(this.date + max - this.weekDay)

    const startTime = this.getFormat(start)
    const endTime   = this.getFormat(end)

    return { startTime, endTime }
  }

  /**
   * 获取相邻月份
   * @returns { lastMonth, nextMonth } 上月月份 和 下月月份
   */
  getAdjacentMonths() {
    const last = new Date(this.d)
    const next = new Date(this.d)

    last.setMonth(last.getMonth() - 1)
    last.setDate(1)

    next.setMonth(next.getMonth() + 1)
    next.setDate(1)

    return {
      lastMonth: this.getFormat(last),
      nextMonth: this.getFormat(next)
    }
  }

  getFormat(d) {
    const yy = d.getFullYear()
    const mm = d.getMonth() + 1
    const dd = d.getDate()
    return [yy, mm, dd].map(this.padStart).join('-')
  }

  padStart(n) {
    n = n.toString()
    return n.padStart(2, '0')
  }
}

export default Moate