# Columns

> Columns是VDatatables里对每个字段的具体定义

## props

| 参数 | 说明 | 类型 | 是否必须 | 默认值 | 可选项 |
|---|---|---|---|---|---|
| name | 字段名，和key一样，用来匹配data | String | 是 | - | - |
| label | 字段标签，用来显示 | String | 是 | - | - |
| width | 字段宽度，如表格字段少，每个字段会更长 | Number | 否 | 120 | - |
| style | css样式 | Object | 否 | - | - |
| sort | 是否可排序 | Boolean | 否 | false | - |
| tooltip | 是否有提示 | Boolean | 否 | false | - |
| [options](/columns#options)  | 关联选项，用于value和label的关联 | Array | 否 | - | - |
| [render](/columns#options)  | 表格内容渲染 | Object/Function | 否 | - | - |
| [form](/#)  | 表单内字段渲染 | Object | 否 | - | - |
| [filter](/#)  | 表格过滤器渲染 | Object | 否 | - | - |
| [filter](/#)  | 表格过滤器渲染 | Object | 否 | - | - |

### options

> 关联选项，用于value和label的关联

| 参数 | 说明 | 类型 | 是否必须 | 默认值 | 可选项 |
|---|---|---|---|---|---|
| value | 字段值，用来匹配label | All | 是 | - | - |
| label | 字段标签，用来显示 | String | 是 | - | - |

### render

> render可以是Object也可以是Function
