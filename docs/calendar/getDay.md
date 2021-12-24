# getDay()
获取某日的日历信息



## 返回值
类型   |  说明
---   | ---
object | 日期

### object属性
属性 | 类型   |  说明
--- | ---   | ---
date | string | 以 "-" 拼接的日期
year | number | 年
month| number | 月
day  | number | 日
date_lunar | string | 阴历日期
year_lunar | string | 阴历年
month_lunar | string | 阴历月
day_lunar | string | 阴历日
timestamp| number | 时间戳
festival | array | 节日信息

## 示例代码
```javascript
const calen = new Calendar()
const d = calen.getDay()

console.log(d) // {...}
```