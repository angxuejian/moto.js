# getWeek(base)
获取某周的日历信息


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
base    | number | 0    | 否  |  0：以周日开始；1：以周一开始


## 返回值
类型   |  说明
---   | ---
Array.object | 本周(周一或周日开始)日期

### Array.object属性
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
const d1 = calen.getWeek()
const d2 = calen.getWeek(1)

console.log(d1) // [{...}, {...}, ...]
console.log(d2)
```