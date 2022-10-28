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


    return(
        <ul className="cards">{entries.map(entry => {
            return <EntryCard key={entry.id} entry={entry}/>
        })}</ul>
    )
}

export default Entries;