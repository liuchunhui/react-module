import React from 'react';
import ReactDOM from 'react-dom';

import InputDemo from 'input/inputDemo';

let Example = React.createClass({
    getInitialState () {
        // 初始化state
        return ({
            name: ''
        })
    },

    componentDidMount() {
        // 组件被加载完
        $('select.dropdown').dropdown();
    },

    handlerChange (ev) {
        this.setState({name: ev.target.value});
    },

    render () {
        let me = this;
        return (
            <div className="_container">
                <div className="ui form" style={{maxWidth: '400px', margin: '20px 10px'}}>
                    <div className="field" >
                        <select className="ui dropdown" value={this.state.name} onChange={this.handlerChange}>
                            <option value="">请选择组件</option>
                            <option value="input">input 组件</option>
                            <option value="table">table 组件</option>
                        </select>
                    </div>
                </div>
                {
                    me.state.name == '' ? null :
                    me.state.name == 'input' ? (<InputDemo/>) :
                    me.state.name == 'table' ? (<span>table</span>) : null
                }

            </div>
        );
    }
});

export default {
    init () {
        ReactDOM.render(
            <Example />,
            document.querySelector('#Main')
        );
    }
}