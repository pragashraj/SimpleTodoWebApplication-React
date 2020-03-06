import React,{Component} from 'react';

class AddTodo extends Component{
    state={
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div className="addTodo">
                <label>Add New Todo:</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}
export default AddTodo