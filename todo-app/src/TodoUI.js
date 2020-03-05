import React from 'react';
import './TodoUi.css';

const TodoUI=({todos,deleteTodo})=>{

    const todoList=todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
    })
    ): (
        <p className="center">There are No Todos!!</p>
    )
    return(
        <div className="todos Collection">
            {todoList}
        </div>
    )
}
export default TodoUI