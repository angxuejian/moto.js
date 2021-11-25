# getAdjacentMonths(base)
获取相邻月份


## 返回值
属性   | 类型   |  说明
---    | ---   | ---
lastMonth  | string | 上个月
nextMonth  | string | 下个月



## 示例代码
```javascript
const moate = new Moate('2021-11-15')
const d1 = moate.getAdjacentMonths()

console.log(d1) // {lastMonth: '2021-10-01', nextMonth: '2021-12-01'}
```