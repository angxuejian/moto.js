# 日历方法


## Moate对象
Moate 对象用于处理日期与时间。
```javascript
const moate = new Calendar()
```


### Moate对象属性
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
d   | date | 今天     | 否  | 可以被 new Date对象解析的时间
base | number | 0 | 否 | (0 or 1) 0：周日开始；1：周一开始

### Moate对象方法
方法 | 说明
---  | ---
[getMonth](./getMonth.md) | 获取某月的日历信息
[getWeek](./getWeek.md) | 获取某周的日历信息
[getDay](./getDay.md) | 获取某日的日历信息