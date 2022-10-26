import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Home from './Components/Home'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    // </Router>
  );
}

export default App;
