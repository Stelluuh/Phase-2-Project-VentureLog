import React from 'react'
import { useState, useEffect} from 'react';

function ShowContainer() {
    const {entries, setEntries} = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/hikeLogs')
        .then(res => res.json())
        .then(data => setEntries(data))
    }, [])

    console.log({entries})


    return(
        <div>
            <h1>ShowContainer Component</h1>
        </div>
    )
}

export default ShowContainer;