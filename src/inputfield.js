import React from 'react';

class InputField extends React.Component{

    render(){
        return(
            <label>
                {this.props.label}
                <input type={this.props.type}></input>
            </label>
            
        )
    }
}

export default InputField;