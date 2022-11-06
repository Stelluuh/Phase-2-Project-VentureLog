import React from 'react';
import { Link } from 'react-router-dom';

function EntryCard({ entry }) {
    // console.log({entry})

    const {Distance, ImageUrl, Location, id} = entry



    return(
        <div className='card-container'>
            <div className='card'>
                <img className='cardImg' src={ImageUrl} alt={Location}/>
            </div>
            <div className="card-content">
                <h4>{Location}</h4>
                <p>{`Distance: ${Distance}`}</p>
                <Link to={`entries/${id}`}>View</Link>
            </div>
        </div>
    )
}

export default EntryCard;






