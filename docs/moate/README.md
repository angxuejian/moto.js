# 日期方法


## Moate对象
Moate 对象用于处理日期与时间。
```javascript
const moate = new Moate('2021-11-15')
```


### Moate对象属性
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
d   | date | 今天     | 否  | 可以被 new Date对象解析的时间

### Moate对象方法
方法 | 说明
---  | ---
[getWeekNumber](./getWeekNumber.md) | 以(年or月)计算当前为第几周
[getWeekNumberTime](./getWeekNumberTime.md) | 获取周的开始时间和结束时间
[getAdjacentMonths](./getAdjacentMonths.md) | 获取相邻月份
