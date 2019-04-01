import React from 'react';

export default class extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="modalBox">
                {this.props.title}
                <hr/>
                {this.props.children}
                <hr/>
                <input type="button" value="close"/>
            </div>;
    }
}