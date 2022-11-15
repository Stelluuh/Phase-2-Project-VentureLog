import React from 'react';
import { NavLink } from 'react-router-dom'
import '../stylesheets/Navbar.css'

function NavBar() {
    return(
        <div className='navbar'>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/entries">Entries</NavLink>
                <NavLink to="/entries/new">New Entry</NavLink>
            </nav>
        </div>
    
    )
}

export default NavBar;