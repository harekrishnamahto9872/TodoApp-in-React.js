import React, {Component} from "react";

class AddTodoItem extends Component{
    state = {
        content : null,
        id : null
    }
    addTodoItem = this.props.addTodoItem
    handleSubmit = (e) =>{
        e.preventDefault()
        document.getElementById('item').value = ""
        this.addTodoItem(this.state)
    }
    handleChange = (e) =>{
        this.setState({
            content : e.target.value
        })
    }
    render()
    {
        return(
            <div>
                <form action="/" onSubmit={this.handleSubmit}>
                    <h1>Add Item: </h1><br/>
                    <input type="text" id="item" onChange={this.handleChange} />
                    <button onClick= {this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }
}
export default AddTodoItem