import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EntryDetails() {
    const [entry, setEntry] = useState('')
    const params = useParams() // when called, it will return a params object. We could also destructure and write it as:
    //const { id } = useParams() and in fetch, instead of params.id, we cna just write id.
    
    
    useEffect(() => {
        fetch(`http://localhost:3001/entries/${params.id}`) // here we are fetching the entry information based on this id.
        .then(res => res.json())
        .then(data => setEntry(data))
    }, [params.id])  
    
    const {Location, Trail, Distance, Companions, ImageUrl, Memory} = entry

    return(
        <section>
            <div className="entry">
                <h1>{Location}</h1>
                <h4>{Trail}</h4>
                <p>{`Distance: ${Distance}`}</p>
                <p>{`Companions: ${Companions}`}</p>
                <img src={ImageUrl} alt={Location}/>
                <p>{Memory}</p>
            </div>
        </section>
    )
}

export default EntryDetails;