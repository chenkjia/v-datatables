# VDatatables

> VDatatables是一个可灵活配置的表格

## props

| 参数 | 说明 | 类型 | 是否必须 | 默认值 | 可选项 |
|---|---|---|---|---|---|
| [ajax](/deploy)  | 数据源 | String | 是 | - | - |
| [serverSide](/deploy)  | 是否服务端分页、查询、排序 | Bealoon | 否 | false | - |
| hasMultiSelect  | 是否有多选 | Bealoon | 否 | false | - |
| hasSort  | 是否有序号 | Bealoon | 否 | false | - |
| tableWidth | 表格宽度 | Number | 否 | 默认100% | - |
| tableHeight  | 表格高度 | Number | 否 | 默认100% | - |
| tableFullList  | 全部字段列表 | Array | 是 | - | - |
| [columns](/columns)  | 表格高度 | Object | 是 | - | - |
| [viewerList](/viewer)  | 表格当前显示列 | Object | 是 | - | - |
| [toolbarList](/toolbar)  | 工具栏按钮组信息 | Array | 否 | [] | - |
| [operationList](/operation)  | 操作栏按钮组信息 | Array | 否 | [] | - |
| [filterByDefault](/filterBy)  | 默认过滤信息 | Array | 否 | [] | - |
| [orderByDefault](/orderBy)  | 默认排序信息 | Array | 否 | [] | - |
| [pageSizeDefault](/page)  | 默认每页记录数 | Number | 否 | 10 | - |
| [pageIndexDefault](/page)  | 默认当前页码 | Number | 否 | 1 | - |

## events

| 方法 | 说明 |
|---|---|
| changeFilterBy | 修改过滤信息 |
| changeOrderBy | 修改排序信息 |
| changePageSize | 修改每页记录数 |
| changePageIndex | 修改当前页码 |

## slots

| 插槽 | 说明 |
| --- | --- |
| prepend | 表格前插入 |
| header | 表头（包括工具栏和搜索栏） |
| toolbar | 工具栏 |
| filter | 搜索栏 |
| footer | 表脚（包括工具栏和搜索栏） |
| viewer | 显示组件 |
| page | 页码 |
| prepend | 表格后插入 |