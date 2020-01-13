import React, {Component} from 'react'
import AddTodoItem from './AddTodoItem'
import AllTodos from './AllTodos'

class Todos extends Component{
    state = {
        todos : [],
        count : 0
    }
    addTodoItem = (todo) =>{
        todo.id = this.state.count
        console.log(todo)
        var todos = [...this.state.todos,todo]
        this.setState(
            {
                todos : todos,
                count : todo.id+1
            }
        )
    }
    deleteTodoItem = (id) =>{
        console.log(id)
        var todos = this.state.todos.filter(todo => {
            return todo.id!==id
        })
        this.setState({
            todos : todos
        })
    }
    render()
    {
        return(
            <div>
                <AddTodoItem addTodoItem={this.addTodoItem} />
                <AllTodos todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} />
            </div>
        )
    }
}
export default Todos