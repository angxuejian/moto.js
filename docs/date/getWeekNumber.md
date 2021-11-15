# getWeekNumber
以年计算当前为第几周


## 返回值
属性   | 类型   |  说明
---    | ---   | ---
weekNumber  | number | 第几周


## 示例代码
```javascript
const moate = new Moate('2021-11-15')
const weekNumber = moate.getWeekNumber()

console.log(weekNumber) // 46
```