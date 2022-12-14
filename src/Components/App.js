import React from 'react'
import {Route, Switch} from 'react-router-dom'
import '../stylesheets/App.css';
import NavBar from './NavBar'
import Home from './Home'
import EntryDetails from './EntryDetails'
import Entries from './Entries'
import NewEntry from './NewEntry'


function App() {
  return (
    <div className="app">
      <NavBar />

      <Switch>
        <Route path="/entries/new">
          <NewEntry/>
        </Route>
        
        <Route exact path="/entries">
          <Entries />
        </Route>

        <Route path="/entries/:id">
          <EntryDetails />
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
