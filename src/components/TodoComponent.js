import React from 'react'

import todosData from '../data/todosData'

import TodoItem from './TodoItem'

class TodoComponent extends React.Component {


    constructor() {
        super()
        this.state = {
            todos: todosData

        }
        this.toggleCheck = this.toggleCheck.bind(this)
    }

    toggleCheck(id) {

        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }

                }
                return todo
            })
            return {
                todos: updatedTodos
            }

        })
    }

    render() {

        const todosComponents = this.state.todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} toggleCheck={this.toggleCheck} />)

        return (
            <div>
                {todosComponents}
            </div>
        )

    }
}

export default TodoComponent