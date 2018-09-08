import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Saludo from "./saludo";

function App() {
  return (
    <div className="App">
      <Saludo nombre="Carlos" />
      <Saludo nombre="Chino" />
      <Saludo nombre="Charly" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
