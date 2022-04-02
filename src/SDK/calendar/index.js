
import Solar from './solar'

/**
 * @param {date} d 日期对象
 * @param {number} base (0 or 1) 0：周日开始；1：周一开始
 */
class Calendar extends Solar {
  constructor(d = new Date(), base = 0) {
    super()
    if (!new Date(d).getTime()) throw new Error('Invalid Date')
    if (base !== 0 && base !== 1) throw new Error('select only 0 or 1')

    this.base = base
    this.setDate(d)
  }

  /**
   * 获取一月的日历信息
   * @returns {array} 月日历信息
   */
  getMonth() {
    return this.getSolarMonth(this.base)
  }

  /**
   * 获取一周的日历信息
   * @returns {array} 周日历信息
   */
  getWeek() {
    return this.getSolarWeek(this.base)
  }

  /**
   * 获取一日的日历信息
   * @returns 当天的日历信息
   */
  getDate(){
    return this.getSolarDate()
  }

  /**
   * 是否显示阴历日期
   * @param {boolean} isl true or false
   */
  isShowLunar(isl) {
    this.setLunar(isl)
  }

}

export default Calendar