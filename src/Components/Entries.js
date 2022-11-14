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


    function handleDeleteCard(deletedCard) {
        const updatedEntries = entries.filter(entry => entry.id !== deletedCard.id);
        setEntries(updatedEntries)
    }

    const entriesList = entries.map(entry => (
        <EntryCard 
            key={entry.id} 
            entry={entry}
            onDeleteCard={handleDeleteCard} 
        />
    ))


    return(
        <div className="cards">{entriesList}</div>
    )
}

export default Entries;