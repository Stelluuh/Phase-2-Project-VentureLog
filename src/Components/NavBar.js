import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/entries">Entries</NavLink>
            <NavLink to="/new_entry">New Entry</NavLink>
        </nav>
    
    )
}

export default NavBar;