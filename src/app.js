import React from "react";
import Books from "./books";
import Header from "./header";
import "./sass/style.css"

const App = () => {
  return (
    <div>
      <Header></Header>
      <Books></Books>
    </div>
  );
};

export default App;
