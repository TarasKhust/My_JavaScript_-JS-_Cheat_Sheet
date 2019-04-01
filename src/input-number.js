import React from 'react';

export default class extends React.Component{
    constructor(props){
        super(props);

        this.onChange = ('change' in props) ? props.change : function(){};
    }

    _normalizeValue(val){
        let newVal = parseInt(val);

        if(isNaN(newVal) || newVal < this.props.min){
            newVal = this.props.min;
        }
        else if(newVal > this.props.max){
            newVal = this.props.max;
        }
        
        this.onChange(newVal);
    }

    render(){
        return <div className="inputNumber">
                <input type="button" value="-" className="inputNumber__min"
                       onClick={() => this._normalizeValue(this.props.value - 1)} 
                />
                <input type="text" value={this.props.value} className="inputNumber__value"
                       onChange={(e) => this._normalizeValue(e.target.value)} />
                 <input type="button" value="+" className="inputNumber__plus"
                        onClick={() => this._normalizeValue(this.props.value + 1)} 
                 />
            </div>;
    }
}