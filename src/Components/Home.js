import React from 'react';
import Header from './Header'
import '../stylesheets/Home.css'

function Home() {
    return(
        <div className="home">
            <Header />
            <div className='home-container'>
                <h3>A Wonderers Footprint</h3>
                <p>This Application allows adventurers to document their hiking journey through multiple trails.</p>
            </div>
        </div>  
    )
}

export default Home;