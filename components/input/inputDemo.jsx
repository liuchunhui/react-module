import React from 'react';

let marked = require('./marked');
let Input = require('./input');

let InputDemo = React.createClass({

    getInitialState () {
        return ({
            value1: '',
            value2: ''
        })
    },

    onChange1: function (ev) {
        this.setState({value1: ev.target.value});
    },

    onChange2: function (ev) {
        this.setState({value2: ev.target.value});
    },

    render: function() {
        let me = this;
        return (
            <div>
                <h1>示例：</h1>
                <div className="ui form" style={{width: '50%', margin: 'auto'}}>
                    <div className="inline fields">
                        <Input
                            title='age'
                            rootClass="sixteen wide field"
                            placeholder="请输入..."
                            readOnly={false}
                            type='email'
                            dataType=""
                            value={this.state.value1}
                            isMust={false}
                            remark="请输入0-9"
                            onChange={me.onChange1}
                            rootStyle={null}
                            labelStyle={{width: '50px'}}
                            labelClass={null}
                            inputStyle={null}
                            inputClass={null}
                        />
                    </div>
                    <div>
                        输入信息为： {this.state.value1}
                    </div>
                    <br />
                    <br />
                    <div className="fields">
                        <Input
                            title='Name'
                            rootClass="sixteen wide field"
                            placeholder="请输入..."
                            readOnly={false}
                            type='text'
                            dataType=""
                            value={this.state.value2}
                            isMust={false}
                            remark={null}
                            onChange={this.onChange2}
                            rootStyle={null}
                            labelStyle={{width: '50px'}}
                            labelClass={null}
                            inputStyle={null}
                            inputClass={null}
                        />
                    </div>
                    <div>
                        输入信息为： {this.state.value2}
                    </div>
                </div>
            </div>
        );
    }
});

export default InputDemo;