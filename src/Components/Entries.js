import React from 'react';
import { useState, useEffect } from 'react'



function Entries() {
    const [hikeLogs, setHikeLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/hikeLogs')
            .then(resp => resp.json())
            .then(data => setHikeLogs(data))
    }, [])

    console.log({hikeLogs})


    return(
        <div>
            <h3>Entries Component</h3>
        </div>
    )
}

export default Entries;