import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App1 = ({things, addTodo, done}) => {
  const todos = things.filter(thing => !thing.done);
   return (
     <div>
       <input type="input" placeholder="input a todo" />
       <button onClick={addTodo}>Add Todo</button>
       <ul>
         {things.map(thing => {
           return (
             <li key={thing.task}>
               <input 
                 type="checkbox"
                 onClick={() => done(thing.task)}
                 checked={thing.done}
               />
               <span>{thing.task}</span>
             </li>
           );
         })}
       </ul>
       {todos.length} tasks remain.
     </div>
   );
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      things: [
        {
          task: "one",
          done: false
        },
        {
          task: "two",
          done: false
        },
        {
          task: "three",
          done: false
        }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.done = this.done.bind(this);
  }
  addTodo(){
    console.log("add todo.");
    const todo = document.querySelector("input").value;
    document.querySelector("input").value = "";
    this.setState({
      things: this.state.things.concat({
        task: todo,
        done: false
      })
    });
  }
  done(todoTask) {
    for (let thing of this.state.things) {
      if (thing.task === todoTask) {
        thing.done = !thing.done;
        break;
      }
    }
    this.setState({
      things: this.state.things
    });
  }
  render() {
    return (
      <div className="App">
        <App1 things={this.state.things} addTodo={this.addTodo} done={this.done} />
      </div>
    );
  }
}

export default App;
