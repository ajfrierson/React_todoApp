import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import TodoApp from './components/todo-app/TodoApp';
import Counter from './components/counter/Counter';
import './App.css';
import './bootstrap.css';
 


class App extends Component {
  render() {
    return (
       // by is a prop that is able to be retrieved later using this.prop.by (as by is the property name)
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}


class LearningExample extends Component {
  render() {
    return (
      <div className="LearningExample">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        
      </div>
    );
  }

}

export default App;


