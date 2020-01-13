import React from 'react'
import DeleteButton from "./deleteButton.jpg"


function AllTodos({todos, deleteTodoItem}){
    const todosList = todos.map(todo =>{
        return(
           
               <li  key={todo.id} > <h3>{todo.content} <button onClick={() =>{deleteTodoItem(todo.id)}}><img src={DeleteButton} style={{"height":"15px","width":"15px"}}></img></button></h3></li>
           
        )
    })

    return(
        <div>
            <ul style={{"display":"table", "margin":"0 auto"}}>
            {todosList}
            </ul>
        </div>
    )

}
export default AllTodos