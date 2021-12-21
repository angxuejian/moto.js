# getWeekNumberTime(base)
获取周的开始时间和结束时间


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
base    | number | 0    | 否  |  0：以周日开始；1：以周一开始


## 返回值
属性   | 类型   |  说明
---    | ---   | ---
startTime  | string | 本周(周一或周日)日期
endTime  | string | 本周(周日或周六)日期



## 示例代码
```javascript
const moate = new Moate('2021-11-15')
const d1 = moate.getWeekNumberTime()
const d2 = moate.getWeekNumberTime(1)

console.log(d1) // {startTime: '2021-11-14', endTime: '2021-11-20'}
console.log(d2) // {startTime: '2021-11-15', endTime: '2021-11-21'}
```