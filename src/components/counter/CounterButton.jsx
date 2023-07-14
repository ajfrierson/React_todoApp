import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {
    // define the intial state in a constructor
    // state => counter 0
    constructor() {
        super();

        this.state = {
            counter : 0
        };

        //(this.increment is not necessary with the use of arrow functions on the render and increment mehtods)
         this.increment = this.increment.bind(this);  
         this.decrement = this.decrement.bind(this);
    }
    
    render () {
    // render = () => {};  
        return (
        <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
            {/* <span className="count" >{this.state.counter}</span> */}
        </div>
        );
    }
    // increment = () => {}; 
     increment () { // update state - counter++
        //console.log("increment");
        // this.state.counter++; bad practie to update state directluy
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by);
      }

      decrement () {
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by);
      }

}

// defaultProps is used to set a default prop value
CounterButton.defaultProps = {
    by: 1
  }

  // propTypes is used to define a property's type
  CounterButton.propTypes = {
    by : PropTypes.number
  }

  export default CounterButton;