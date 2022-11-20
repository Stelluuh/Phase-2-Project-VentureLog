import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/EntryDetails.css'

function EntryDetails() {
    const [entry, setEntry] = useState('')
    const params = useParams() 
    
    
    useEffect(() => {
        fetch(`http://localhost:3001/entries/${params.id}`) 
        .then(res => res.json())
        .then(data => setEntry(data))
    }, [params.id])  
    
    const {Location, Trail, Distance, Companions, ImageUrl, Memory} = entry

    return(
        <section>
            <div className="entry">
                <div className='top'>
                    <p className='location'>{`Location: ${Location}`}</p>
                    <p className='trail'>{`Trail: ${Trail}`}</p>
                </div>
                <div className='middle'>
                    <p className='distance'>{`Distance: ${Distance}`}</p>
                    <p className='companions'>{`Companions: ${Companions}`}</p>
                </div>
                <div className="photo-memory">Photo Memory:</div>
                <div className='bottom'>
                    <img className='image'src={ImageUrl} alt={Location}/>
                    <p className='memory'>{Memory}</p>
                </div>
            </div>
        </section>
    )
}

export default EntryDetails;