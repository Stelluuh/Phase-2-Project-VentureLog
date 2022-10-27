import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import './App.css';
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Entry from './Entry'
import Entries from './Entries'
import NewEntry from './NewEntry'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <hr/>
        <Header />
        <hr/>

        <Switch>

          <Route path="/entries/new">
            <NewEntry/>
          </Route>
          
          <Route path="/entries">
            <Entries />
          </Route>

          <Route path="/entry/:id">
            <Entry />
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
