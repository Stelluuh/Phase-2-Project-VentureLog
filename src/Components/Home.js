import React from 'react';
import Header from './Header'
import '../stylesheets/Home.css'

function Home() {
    return(
        <div className="home">
            <Header />
            <div className='home-container'>
                <h3>A Wonderers Footprint</h3>
                <p>A vast, still wilderness of forest, mountains, and prairie, sprinkled with lakes and ponds, and threaded by streams and deer trails, awaits you.</p>
                <p>Join us as we share in a collective celebration of nature and its wonders documented in our online Venture Log. We look forward to hearing about your journeys and discoveries!</p>
            </div>
        </div>  
    )
}

export default Home;