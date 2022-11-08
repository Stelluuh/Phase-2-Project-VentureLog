import React from 'react';
import { useState, useEffect } from 'react'
import EntryCard from './EntryCard'


function Entries() {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/entries')
            .then(resp => resp.json())
            .then(data => setEntries(data))
    }, [])


    const entriesList = entries.map(entry => (
        <EntryCard 
            key={entry.id} 
            entry={entry} 
        />
    ))

    return(
        <div className="cards">{entriesList}</div>
    )
}

export default Entries;