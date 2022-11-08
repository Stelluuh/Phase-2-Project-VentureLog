import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

function NewEntry() {
    const [location, setLocation] = useState('')
    const [trail, setTrail] = useState('')
    const [distance, setDistance] = useState('')
    const [companions, setCompanions] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [memory, setMemory] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target.location.value)
        const newItem = {
            Location: location,
            Trail: trail,
            Distance: distance,
            Companions: companions,
            ImageUrl: imageUrl,
            Memory: memory
        }

        setLocation('')
        setTrail('')
        setDistance('')
        setCompanions('')
        setImageUrl('')
        setMemory('')
        
        //after form submit, re-direct page to list of entries
        history.push('/entries')

        // console.log({newItem})

        fetch('http://localhost:3001/entries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
    }

    return(
      <div className="new_entry_form">
        <div className="title">Write Your Adventure!</div>
        <form 
            className="newItem"
            onSubmit={handleSubmit}
        >
            <label>Location:</label>
            <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            
            <br/>
            <label>Trail Name:</label>
            <input
                type="text"
                value={trail}
                onChange={e => setTrail(e.target.value)}
            />
            
            <br/>
            <label>Distance:</label>
            <input
                type="text"
                value={distance}
                onChange={e => setDistance(e.target.value)}

            />
            
            <br/>
            <label>Companions:</label>
            <input
                type="text"
                value={companions}
                onChange={e => setCompanions(e.target.value)}
            />
            
            <br/>
            <label>Image:</label>
            <input
                type="text"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
            />
            
            <br/>
            <label>Memory:</label>
            <textarea
                className="memory"
                type="text"
                value={memory}
                onChange={e => setMemory(e.target.value)}
            />
            <br/>
            <button 
                type="submit"
                id="submit"
            >
                Submit
            </button>

        </form>

      </div>
    )
}

export default NewEntry;

