# isTypeOf(value, type)
判断类型是否一致


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
value  | any | 无     | 是  | 需要判断的类型的 值
type   | string | 无     | 是  | 期望类型


## 返回值
属性   | 类型   |  说明
---    | ---   | ---
true/false  | boolean | 类型是否一致

## 示例代码
```javascript
const value = 'yuhua'
const type = isTypeOf(value, 'string')

console.log(type) // true
```