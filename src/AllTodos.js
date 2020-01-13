import React from 'react'

function AllTodos({todos, deleteTodoItem}){
    const todosList = todos.map(todo =>{
        return(
            <div className="todo" key={todo.id}>
                <h2>{todo.content} <button onClick={() =>{deleteTodoItem(todo.id)}}>Delete</button></h2>
            </div>
        )
    })

    return(
        <div>
            {todosList}
        </div>
    )

}
export default AllTodos