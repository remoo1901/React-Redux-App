import React from 'react';
import DogPic from "./components/DogPic"
import Title from "./components/Title"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>  
      <Title />
      <DogPic />

      </div>
      </header>
    </div>
  );
}

export default App;
