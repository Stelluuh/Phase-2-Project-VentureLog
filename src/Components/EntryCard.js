import React from 'react';

function EntryCard({ entry }) {
    console.log({entry})

    const {Distance, ImageUrl, Location} = entry


    return(
        <li className='card'>
            <img src={ImageUrl} alt={Location}/>
            <h4>{`Location: ${Location}`}</h4>
            <p>{`Distance: ${Distance}`}</p>
        </li>
    )
}

export default EntryCard;






