import React from "react";
import ReactDOM from "react-dom";
import Apps from "./index";
import "./styles.css";
import List from "./list.js";

/*function App() {
  return (
    <div className="App">
      <h1>Hello Hiration Interns</h1>
      <h2>Lets create some miracle!</h2>
      <Apps />
    </div>
  );
}*/

class Parents extends React.Component {
  render = () => {
    return (
      <div>
        <List />
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parents />, rootElement);
