import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Entry from './Components/Entry'
import Entries from './Components/Entries'
import NewEntry from './Components/NewEntry'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <hr/>
        <Header />
        <hr/>

        <Switch>

          <Route path="/entries">
            <Entries />
          </Route>

          <Route path="/entry">
            <Entry />
          </Route>

          <Route path="/entries/new">
            <NewEntry/>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
