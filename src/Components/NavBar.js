import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/entries">Entries</NavLink>
            <NavLink to="/new_entry">New Entry</NavLink>
        </div>
    )
}

export default NavBar;