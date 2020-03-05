import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './forms.js';
import {connect} from 'react-redux';

class App extends React.Component{
  // state={age:21};
  // onAgeUp= ()=> {
  //   this.setState({...this.state,age: this.state.age+1}) ;

  //   };
  constructor(props){
    super(props);
    this.state={
        bookname:'',
        authorname:'',
        bookdescription:'',
        count:''

    }
}
changeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});
    //alert(JSON.stringify(this.state));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Online Library</h1>
          <form>
                 
          <div class="form-group"> 
                <label for='bookname'>Book Name *:</label>
                <input id='bookname'type="text" name="bookname" onChange={this.changeHandler}></input>
           </div> 
            <br></br>
            <div class="form-group"> 
                <label for='authorname'>Author Name *:</label>
                <input id='authorname'type="text" name="authorname" onChange={this.changeHandler}></input>
           </div>
            
            <br></br>
            <div class="form-group"> 
                <label for='bookdescription'>Book Description:</label>
                <input id='bookdescription'type="text" name="bookdescription" onChange={this.changeHandler}></input>
           </div>
            
            <br></br>
            <div class="form-group"> 
                <label for='count'>Book Count *:</label>
                <input id='count'type="text" name="count" onChange={this.changeHandler}></input>
           </div>
            
            </form>
          
          <button onClick={() => this.props.addBook(this.state)} >Add Book</button>
          

          <div>
          <table class="table table-striped">
            <thead>
              <tr>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Book Description</th>
              <th>Count</th>
              </tr>
            </thead>
            <tbody>
            {
                this.props.books.map(el => {
                  if(el.bookname === "" || el.authorname ==="" || el.count === ""){
                    //alert( "Missing mandatory fields")
                }
                else{
                 return (
                  <tr>
                    <td>{el.bookname} </td>
                    <td>{el.authorname} </td>
                    <td>{el.bookdescription} </td>
                    <td>{el.count} </td>

                  </tr>
                )
                }
                })
              }

            </tbody>
          </table>
            
          </div>
        </header> 
      </div>
    );
  }

  
}
const mapStateToProps= (state) => {
  //alert(JSON.stringify(state.books));
  return{
     books:state.books
  }
}
const mapDispachToProps= (dispach) =>{
  return{
    addBook: (state) => {
      if(state.bookname === "" || state.authorname ==="" || state.count === ""){
          alert( "Missing mandatory fields")
      }
      else{
        dispach({type:'ADD_BOOK', value: state})  
      }
      
    } 
  }
}
  

   



export default connect(mapStateToProps,mapDispachToProps)(App);
