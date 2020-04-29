import React from "react";
import DogPic from "./components/DogPic";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
        <DogPic />
      </div>
    </div>
  );
}

export default App;
