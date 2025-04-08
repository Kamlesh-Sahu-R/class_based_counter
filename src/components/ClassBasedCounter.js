import './Counter.css';
import { Component } from 'react';


class ClassBasedCounter extends Component {

    constructor (props){
      super(props);
      this.state = {
        countValue: 0
      }
    }

    increment = () => {
      this.setState((prevState) =>({
        countValue: prevState.countValue + 1
      }));
    };

    decrement = () => {
      this.setState((prevState) =>({
        countValue: prevState.countValue - 1
      }));
    };

    render(){
      return (
        <div className="counter">
          <h1>Counter App</h1>
          <h4>Count: {this.state.countValue}</h4>
          <div>
            <button onClick={this.increment}> Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
        </div>
      );
    };
  
}

export default ClassBasedCounter;