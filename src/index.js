import React from "react";
import ReactDOM from "react-dom";
import Hello from "./new.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Lets create some miracle!</h2>
      <Hello data="hello" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
