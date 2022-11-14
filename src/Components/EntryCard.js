import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Card.css'

function EntryCard({ entry, onDeleteCard }) {
    // console.log({entry})

    const {Distance, ImageUrl, Location, id} = entry

    function handleDeleteButton() {
        fetch(`http://localhost:3001/entries/${entry.id}` , {
            method: "DELETE",
        })
            .then(resp => resp.json())
            .then(() => onDeleteCard(entry))
    }

    return(
        <div className='card-container'>
            <div className="card">
                <img className='cardImg' src={ImageUrl} alt={Location}/>
                <div className="card-content">
                    <Link to={`entries/${id}`}>Read Entry</Link>
                    <h4>{Location}</h4>
                    <p>{`Distance: ${Distance}`}</p>
                    <button className='delete-btn' onClick={handleDeleteButton}> delete </button>
                </div>
            </div>
        </div>
    )
}

export default EntryCard;






