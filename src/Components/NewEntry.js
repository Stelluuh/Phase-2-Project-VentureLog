import React from 'react';
import { useState } from 'react';

function NewEntry() {
    const [location, setLocation] = useState("")
    const [trail, setTrail] = useState("")
    const [distance, setDistance] = useState("")
    const [companions, setCompanions] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [memory, setMemory] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        // console.log("location:", location)
        const newItem = {
            "Location": location,
            "Trail": trail,
            "Distance": distance,
            "Companions": companions,
            "ImageUrl": imageUrl,
            "Memory": memory
        }
        // console.log({newItem})

        fetch('http://localhost:3001/entries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
            .then(resp => resp.json())
            .then(item => console.log({item}))
    }

    function handleNewLocation(e){
        setLocation(e.target.value)
    }

    function handleNewTrail(e){
        setTrail(e.target.value)
    }

    function handleNewDistance(e) {
        setDistance(e.target.value)
    }

    function handleNewCompanions(e){
        setCompanions(e.target.value)
    }

    function handleNewImageUrl(e) {
        setImageUrl(e.target.value)
    }

    function handleNewMemory(e) {
        setMemory(e.target.value)
    }



    return(
      <div className="new_entry_form">
        <h2>New Entry</h2>
        <form 
            className="newItem"
            onSubmit={handleSubmit}
        >
            <label>Location:</label>
            <input
                type="text"
                onChange={handleNewLocation}
                value={location}
            />
            
            <br/>
            <label>Trail Name:</label>
            <input
                type="text"
                onChange={handleNewTrail}
                value={trail}
            />
            
            <br/>
            <label>Distance:</label>
            <input
                type="text"
                onChange={handleNewDistance}
                value={distance}

            />
            
            <br/>
            <label>Companions:</label>
            <input
                type="text"
                onChange={handleNewCompanions}
                value={companions}
            />
            
            <br/>
            <label>Image:</label>
            <input
                type="text"
                onChange={handleNewImageUrl}
                value={imageUrl}
            />
            
            <br/>
            <label>Memory:</label>
            <input
                type="text"
                onChange={handleNewMemory}
                value={memory}
            />

            <button type="submit">Submit</button>

        </form>

      </div>
    )
}

export default NewEntry;