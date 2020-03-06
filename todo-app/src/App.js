import React ,{Component} from 'react';
import TodoUI from './TodoUI';
import AddTodo from './AddTodo';

class App extends Component {
  state={
    todos:[
      {id:1,content:'Study Unity'},
      {id:2,content:'Study React'},
      {id:3,content:'Study Unreal Engine'},
      {id:4,content:'Study DataScience'}
    ]
  }

  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos
    })
  }

  addNewTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <TodoUI todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addNewTodo={this.addNewTodo}/>
      </div>
    );
  }
}

export default App;
