import React from 'react';

/*
 * input 组件
 *
 * input组件，用来输入数据
 *
 * @param title input组件的label名称
 * @param placeholder input的placeholder
 * @param readOnly input输入框是否可读
 * @param type input的类型
 * @param dataType input代表的数据类型
 * @param value 初始化的值，对应input的value值
 * @param isMust “必须输入”给出红色*提示
 * @parma remark 输入提示，在输入框下面给出斜体的提示信息
 * @parma ref input组件的ref名称
 * @param rootStyle 组件根元素的style
 * @param rootClass 组件根元素的class
 * @param labelStyle label标签的style
 * @param labelClass label标签的class
 * @param inputStyle input标签的style
 * @param inputClass input标签的class
 *
 * @param onChange input的回调函数
 */
let InputTemp = React.createClass({
    getDefaultProps () {
        return {
            title: '',
            placeholder: '',
            readOnly: false,
            type: 'text',
            dataType: '',
            value: '',
            isMust: false,
            remark: null,
            //ref: null,
            onChange: null,
            rootStyle: null,
            rootClass: null,
            labelStyle: null,
            labelClass: null,
            inputStyle: null,
            inputClass: null
        };
    },

    getInitialState () {
        return this.props;
    },

    componentWillReceiveProps (nextProp) {
        this.props = nextProp;
        this.setState(nextProp);
    },

    handlerChange (ev) {
        if (this.props.onChange != null) {
            this.props.onChange(ev);
        }
        this.setState({value: ev.target.value});
    },

    render () {
        let me = this;
        return (
            <div style={me.state.rootStyle} className={me.state.rootClass}>
                <label style={me.state.labelStyle} class={me.state.labelClass}>
                    <span>{me.state.title}</span>
                    {
                        me.state.isMust ? (<span style={{color: "red"}}>*</span>):null
                    }
                </label>
                <input
                    style={me.state.inputStyle}
                    className={me.state.inputClass}
                    type={me.state.type}
                    data-type={me.state.dataType}
                    placeholder={me.state.placeholder}
                    value={me.state.value}
                    readOnly={me.state.readOnly}
                    onChange={me.handlerChange}
                />
                {
                    me.state.remark == null ? (<span style={{marginLeft: '25px'}}/>):(
                        <i style={{marginLeft: '5px'}} className="help circle icon" title={me.state.remark}/>
                    )
                }
            </div>

        )
    }
});

export default InputTemp;