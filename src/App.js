import React, { Component } from "react";
import TodoCard from './TodoCard';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // *pass props
 constructor(props) {
    super(props);

    this.state = {
      // isClicked: true,
      inputValue: "",
      //* listOfTodos is an array
      listOfTodos: [],
      isOn: false
    }
  }

  // handleClick = () => {
  //   this.state.isClicked ?
  //     this.setState({isClicked : false}) :
  //       this.setState({isClicked : true})
  // }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
   
  };
  
  // handleRemove = (index) => {
  //   let list = this.state.listOfTodos;
  //   list.splice(index, 1);
  //   this.setState({ listOfTodos: [...list] });
  // };
  

  // !logic - array is now being indexed (zero-based index)
  // * (index) now passing the index back
  // * rule - can't change state directly 
  // * solution create copy - create a variable let copyOfList = back to state listOfTodos
  // * remove specific item use method of pop, unshift, index of, splice
  // * splice removes 1 item from index
  // * use .setState to set the list of todos to copy then invoke and pass in new object ({[...array obj]}) ...spread operator
  //! ask what are the arguements that go in splice  1.what does the method do 2.what does the method return 3. what are its arguemnts 4.does it change the data directly

  deleteItem = (index) => {
    // console.log("was clicked", index)
    let copyOfList = this.state.listOfTodos
    copyOfList.splice(index, 1)
    this.setState({listOfTodos: [...copyOfList]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          To Do List
        </p>
      
          {/* button */}
          {/* <button onClick={this.handleClick}>ClickMe</button> */}

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Submit</button> 
          
          </form>

          {/* <p>
          {this.state.isClicked ? "true" : "false"}
        </p> */}

        {/* <ol>{this.state.listOfTodos.map((todo, index) => {
          return <li key={index}>{todo}
          <button index={index} onClick={(index)=>{this.handleRemove(index)}}> Remove </button>
          </li>
        })}</ol> */}

          <ol>
            {/** keyboard shortcut hold ctrl click component/takes you straight to file**/}
            {/** passing a prop(title) value(todo) **/}
            {/** key is only used in react cannot be used**/}
            {/** soloution -create another prop index={index}**/}

            {this.state.listOfTodos.map((todo, index) => {
              return <TodoCard key={index}  index={index} title={todo} clickToRemove={this.deleteItem}/>
          })}</ol>

          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;




