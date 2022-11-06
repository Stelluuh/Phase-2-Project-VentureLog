import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Entry() {
    const [entry, setEntry] = useState('')
    const params = useParams()
    console.log(params)
    const id = 1
    
    
    useEffect(() => {
        fetch(`http://localhost:3001/entries/${params.id}`)
        .then(res => res.json())
        .then(data => setEntry(data))
    }, [id])
    
    const {Location, Trail, Distance, Companions, ImageUrl, Memory} = entry

    return(
        <section>
            <div className="new-container">
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

export default Entry;