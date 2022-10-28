import React from 'react';
import { Link } from 'react-router-dom';

function EntryCard({ entry }) {
    // console.log({entry})

    const {Distance, ImageUrl, Location, id} = entry



    return(
        <li className='card'>
            <img src={ImageUrl} alt={Location}/>
            <h4>{`Location: ${Location}`}</h4>
            <p>{`Distance: ${Distance}`}</p>
            <Link to={`entries/${id}`}>View</Link>
        </li>
    )
}

export default EntryCard;






