import React from "react";


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickTitle = () => {
        if (!this.state.title) {
            alert('miss')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="test" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={(event) => this.handleOnClickTitle(event)}
                >add</button>
            </div>
        )
    }

}





export default AddTodo;