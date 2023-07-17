import React, { Component  } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from './WithNavigation';
import withParams from './WithParams';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListOfTodosComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ErrorComponent from './ErrorComponent.js';


class TodoApp extends Component {
    render() {
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="todoApp">               
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/logout" element={
                        <AuthenticatedRoute>
                            <LogoutComponent />
                        </AuthenticatedRoute>
                        } />
                        <Route path="/welcome/:name" element={
                        <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                        </AuthenticatedRoute>
                        } /> 
                        <Route path="/todos" element={
                        <AuthenticatedRoute>
                             <ListTodosComponent />
                        </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent />} />
                        
                    </Routes>
                    <FooterComponent />
                </Router>               
            </div>
        );
    }
}



export default TodoApp;