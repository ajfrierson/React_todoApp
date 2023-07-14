import React, { Component  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import withNavigation from './WithNavigation';
import withParams from './WithParams';
import AuthenticationService from './AuthenticationService.js';


class TodoApp extends Component {
    render() {
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return (
            <div className="todoApp">               
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/logout" element={<LogoutComponent />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                        
                    </Routes>
                    <FooterComponent />
                </Router>               
            </div>
        );
    }
}


class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked() {
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){   
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}     
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

    // function ShowInvalidCredentials(props) {
    //     if(props.hasLoginFailed) {
    //         return <div>Invalid Credentials</div>
    //     }
    //     return null;
    // }

    // function ShowLoginSuccessMessage(props) {
    //     if(props.showSuccessMessage) {
    //         return <div>Login Successful</div>
    //     }
    //     return null;
    // }

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
                                    <tr>
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

    class WelcomeComponent extends Component {
        render() {
            return (
                <>
                    <h1>Welcome</h1>
                    <div className="container">
                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>
                    </div>
                </>
            )
        }
    }

    function ErrorComponent() {
        return <div>An Error Occured. I don't know what to do. Contact Support at 800-555-1234</div>
    }


    class HeaderComponent extends Component {
        render() {
            return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>
                        <ul className="navbar-nav">
                            <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                            <li><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><Link className="nav-link" to="/login">Login</Link></li>
                            <li><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </header>
               
            )
        }
    }

    class FooterComponent extends Component {
        render() {
            return (
                <footer className="footer">
                   <span className="text-muted">All Rights Reserved 2023 @in28minutes</span>
                </footer>
            )
        }
    }

    class LogoutComponent extends Component {
        render() {
            return (
                <>
                  <h1>You are logged out</h1>
                  <div className="container">
                    Thank You for Using Our Application.
                  </div>
                </>
            )
        }
    }

export default TodoApp;