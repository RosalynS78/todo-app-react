import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }
  }

  // handleClick = () => {
  //   this.state.isClicked ? 
  //     this.setState({isClicked : false}) : 
  //       this.setState({isClicked : true})
  // }

  handleChange =(event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit =(event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  handleRemove = (index) => {
    let list = this.state.listOfTodos
    list.splice(index, 1)
    this.setState({listOfTodos:[...list]})
  }



  render () {

    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* button */}
        {/* <button onClick={this.handleClick}>ClickMe</button> */}

        <form onSubmit={this.handleSubmit}>
          
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>

        </form>

        {/* <p>
          {this.state.isClicked ? "true" : "false"}
        </p> */}

        <ol>{this.state.listOfTodos.map((todo, index) => {
          return <li key={index}>{todo}
          <button index={index} onClick={(index)=>{this.handleRemove(index)}}> Remove </button>
          </li>
        })}</ol>
        

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

  
  export default App;