# getDay()
获取某日的日历信息



## 返回值
类型   |  说明
---   | ---
object | 日期

### object属性
属性 | 类型   |  说明
--- | ---   | ---
value | string | 以 "-" 拼接的日期
timestamp| number | 时间戳
solar.year | number | 阳历年
solar.month| number | 阳历月
solar.day  | number | 阳历日
solar.festival | array | 阳历节日信息
solar.value | string | 阳历日期
lunar.year | number | 阴历年
lunar.month| number | 阴历月
lunar.day  | number | 阴历日
lunar.festival | array | 阴历节日信息
lunar.value | string | 阴历日期

## 示例代码
```javascript
const calen = new Calendar()
const d = calen.getDay()

console.log(d) // {...}
```