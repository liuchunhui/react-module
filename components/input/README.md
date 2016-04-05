# input组件


### props

| 名称 | 默认值 | 类型 | 说明 |
| --- | ---: | ---: | :---:| 
| title| '' | str | input组件的label名称 |
| placeholder | '' | str | input的placeholder |
| readOnly | false | bool | input输入框是否可读 |
| type | 'text' | str | input的类型 |
| dataType | '' | str | input代表的数据类型 |
| value | '' | str | 初始化的值，对应input的value值 |
| isMust | false | bool | "必须输入" 给出红色 \* 提示 |
| remark | null | str | 输入提示，在输入框下面给出斜体的提示信息 |
| ref | inputModule | '' | input组件的ref名称(暂时去掉) |
| rootStyle | null | {width: '100%'} |组件根元素的style | 
| rootClass | null | 'className1 className2' |组件根元素的class | 
| labelStyle | null | {width: '100%'} |label标签的style | 
| labelClass | null | 'className1 className2' |label标签的class | 
| inputStyle | null | {width: '100%'} |input标签的style | 
| inputClass | null | {width: '100%'} |input标签的class | 
| onChange | null | function|input的onChange的回调函数 | 

  
---