import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.addOne = this.addOne.bind(this);
    this.SubOne = this.SubOne.bind(this);
  }

  addOne = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  SubOne = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render = () => {
    return (
      <div>
        <button onClick={this.addOne} class="button">
          Increment
        </button>

        <button onClick={this.SubOne} class="button button3">
          Decrement
        </button>
        <h1> {this.state.counter}</h1>
      </div>
    );
  };
}

export default App;
