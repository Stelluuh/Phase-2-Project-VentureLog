import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Card.css'

function EntryCard({ entry }) {
    // console.log({entry})

    const {Distance, ImageUrl, Location, id} = entry



    return(
        <div className='card-container'>
            <div className="card">
                <img className='cardImg' src={ImageUrl} alt={Location}/>
                <div className="card-content">
                    <h4>{Location}</h4>
                    <p>{`Distance: ${Distance}`}</p>
                    <Link to={`entries/${id}`}>Read Entry</Link>
                </div>
            </div>
        </div>
    )
}

export default EntryCard;






