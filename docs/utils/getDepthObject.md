# getDepthObject(obj, keys)
判断类型是否一致


## 参数
参数   | 类型   | 默认值 | 必填| 说明
---    | ---   | ---    | --- | ---
obj  | object | 无     | 是  | 数据对象
keys | string or array | 无     | 是  | 多层嵌套的key

## 返回值
类型   |  说明
---   | ---
value | obj对象中keys的值

## 示例代码
```javascript
const object = {
  project: { 
    title: 'yuhua' 
  },
  desc: 'yuhua project',
}

const value1 = getDepthObject(object, 'project.title')
const value2 = getDepthObject(ovject, 'desc')

console.log(value1) // yuhua
console.log(value2) // yuhua project
```