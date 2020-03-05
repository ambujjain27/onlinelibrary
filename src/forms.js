import React from 'react';
import InputField from './inputfield';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookname:'',
            authorname:''
        }
    }
    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
      }
    render(){
        return(
            <form>
                 <h1>Hello {this.state.bookname} {this.state.authorname}</h1>
                <p>Ambuj Form</p>
                <label>
                Book Name:
                <input type="text" name="bookname" onChange={this.changeHandler}></input>
            </label>
            <label>
                Author Name:
                <input type="text" name="authorname" onChange={this.changeHandler}></input>
            </label>
                {/* <InputField type="text" label="Book Name" name="bookname" onChange={this.changeHandler}></InputField><br></br> */}
                {/* <InputField type="text" label="Author Name" name="authorname" onChange={this.changeHandler}></InputField> */}
            </form>

        )
    }
}

export default Form;