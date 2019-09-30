import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import MainContainer from "./containers/MainContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
        <Navigation/>
        <MainContainer/>
    </div>
  );
}

export default App;
