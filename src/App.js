import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
        <Navigation/>

        <h1>Welcome to the Brain!</h1>
        <MainContainer/>
    </div>
  );
}

export default App;
