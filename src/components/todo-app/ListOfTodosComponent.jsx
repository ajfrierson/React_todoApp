import React, { Component } from "react"

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: 
            [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn Java', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn Spring Boot', done: false, targetDate: new Date()},
                {id: 4, description: 'Learn Spring MVC', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>

                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {
                        // this code loops through our todos and generate an id and description for each todo
                            this.state.todos.map ( 
                                todo => 
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent