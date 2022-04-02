# getMonth(base)
获取某月的日历信息


## 返回值
类型   |  说明
---   | ---
Array.object | 本月(周一或周日开始)日期

### Array.object属性
属性 | 类型   |  说明
--- | ---   | ---
value | string | 以 "-" 拼接的日期
timestamp| number | 时间戳
solar.year | number | 阳历年
solar.month| number | 阳历月
solar.day  | number | 阳历日
solar.festival | array | 阳历节日信息
solar.value | string | 阳历日期
solar.type | string | last: 上月，current: 本月，next: 下月
lunar.year | number | 阴历年
lunar.month| number | 阴历月
lunar.day  | number | 阴历日
lunar.festival | array | 阴历节日信息
lunar.value | string | 阴历日期

## 示例代码
```javascript
const calen = new Calendar()
const d1 = calen.getMonth()

console.log(d1) // [{...}, {...}, ...]
```