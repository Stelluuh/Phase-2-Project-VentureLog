import React from 'react';
// import { useState } from 'react';

function NewEntry() {


    return(
      <div className="new_entry_form">
        <h2>New Entry</h2>
        <form>
            <label>Location:</label>
            <input
                type="text"
                placeholder='Location'
            />
            <label>Trail Name:</label>
            <input
                type="text"
            />

            <label>Distance:</label>
            <input
                type="text"
            />

            <label>Companions:</label>
            <input
                type="text"
            />

            <label>Image:</label>
            <input
                type="text"
            />
            
            <label>Memory:</label>
            <input
                type="text"
            />

        </form>

      </div>
    )
}

export default NewEntry;