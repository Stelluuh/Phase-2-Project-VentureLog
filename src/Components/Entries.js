import React from 'react';
import { useState, useEffect } from 'react'



function Entries() {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/entries')
            .then(resp => resp.json())
            .then(data => setEntries(data))
    }, [])

    console.log({entries})

    return(
        <div>
            <h3>Entries Component</h3>
        </div>
    )
}

export default Entries;