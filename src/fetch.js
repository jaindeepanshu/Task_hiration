import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    let { isLoaded, items } = this.state;
    return (
      <div className="App">
        <h1 className="title">Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ul className="list-group">
          {items.map(item => (
            <li className="list-group-item" key="{item.id}">
              Name: {item.name} && Email: {item.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
