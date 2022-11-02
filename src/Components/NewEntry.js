import React from 'react';
import { useState, useEffect } from 'react';

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
            />
            
            <br/>
            <label>Trail Name:</label>
            <input
                type="text"
            />
            
            <br/>
            <label>Distance:</label>
            <input
                type="text"
            />
            
            <br/>
            <label>Companions:</label>
            <input
                type="text"
            />
            
            <br/>
            <label>Image:</label>
            <input
                type="text"
            />
            
            <br/>
            <label>Memory:</label>
            <input
                type="text"
            />

            <button type="submit">Submit</button>

        </form>

      </div>
    )
}

export default NewEntry;