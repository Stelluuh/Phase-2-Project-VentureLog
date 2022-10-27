import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import './App.css';
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import Entry from './Entry'
import Entries from './Entries'
import NewEntry from './NewEntry'


function App() {
  return (
    <div className="App">
      <NavBar />
      <hr/>
      <Header />
      <hr/>

      <Switch>
        <Route path="/new_entry">
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

        <Route exact path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
