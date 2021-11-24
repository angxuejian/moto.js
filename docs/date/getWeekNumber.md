# getWeekNumber
以(年or月)计算当前为第几周


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
type   | number | 0    | 否  |  0：以年计算周数；1：以月计算周数
base   | number | 0    | 否  | 当**type = 1**时有效；0：以周日计算本月周数； 1：以周一计算本月周数


## 返回值
属性   | 类型   |  说明
---    | ---   | ---
weekNumber  | number | 第几周


## 示例代码
```javascript
const moate = new Moate('2021-12-15')
const yearWeekNumber = moate.getWeekNumber()
const monthWeekNumber = moate.getWeekNumber(1)

console.log(`2021年的第${yearWeekNumber}周`) // 2021年的第50周
console.log(`2021年12月的第${yearWeekNumber}周`) // 2021年12月的第3周

```