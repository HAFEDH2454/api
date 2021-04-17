import axios from 'axios';
import React, { Component } from 'react';
import "./App.css";



class App extends Component  {
 state={todos:[] };
  async componentDidMount() {
   
    let result= await axios.get("https://jsonplaceholder.typicode.com/todos");
    await new Promise(x =>setTimeout(x,1000));
    this.setState({todos: result.data});
  }
  render() {
  return (
    <div class="container" >
      
    {this.state.todos== false ? (<div>{this.state.todo}</div>): (<span >Loading...</span>)}
    <div>
      <ul className="mist-group">
        {this.state.todos.map(todo=> (
          <li key={todo.todoId}>
            {todo.title}
            <span >
              <input type="checkbox" checked={todo.completed} />

            </span>
          </li>
         
        ))}
      </ul>
    </div>
  </div>
  );
}
}
export default App;
