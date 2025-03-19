import React from "react"
import { useState } from "react";
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import axios from 'axios';

const CreateAuthorModal = ({ onClose, onSave }) => {

    // Create author model and variable
    const [author, setAuthor] = useState({
        name: "",
        biography: "",
        numberOfBooksWritten: 0,
        averageRating: 0,
        photoURL: "",
    });


    // Function to add an author with data integrity validation
    const addAuthor = () => {   

        if (!author.name || !author.biography || !author.averageRating || !author.numberOfBooksWritten || !author.photoURL) {
            alert("Please fill in all fields before saving.")
            return;
        } else if (author.name.length < 1 || author.biography.length < 0 || author.averageRating > 5 || author.averageRating < 0 ||author.photoURL.length < 0) {
            alert("Please insert valid values.")
            return;
        }

        axios.post('http://localhost:3001/api/authors', author)
        .then((response) => {
            onSave(response.data);
            onClose();  // Close modal only after success
            console.log("Data:", response);
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to add author. Please try again.");
        })
    }

    // Recieves the data from the input fields
    const handleChange = (event) => {
        setAuthor({
            ...author, [event.target.name]: event.target.value,
        })
    }

  return (
    <>
    <div>
    <Modal open={true} onClose={onClose}>
        <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
            }}>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
            <div className="fixed inset-0 items-center">
            <label><b>Add a new author</b></label>
            <br/>
            <label><b>Name</b></label>
            <br/>
            <input type="text" placeholder='Name' name='name' required value={author.name} onChange={handleChange}></input>
            <br/>
            <label><b>Biography</b></label>
            <br/>
            <textarea type="text" placeholder='Biography' name='biography' required value={author.biography} onChange={handleChange}></textarea>
            <br/>
            <label><b>Books Written</b></label>
            <br/>
            <input type="text" placeholder='Number of books written' name='numberOfBooksWritten' required value={author.numberOfBooksWritten} onChange={handleChange}></input>
            <br/>
            <label><b>Rating</b></label>
            <br/>
            <input type="text" placeholder='Rating' name='averageRating' required value={author.averageRating} onChange={handleChange}></input>
            <br/>
            <label><b>Photo URL</b></label>
            <br/>
            <input type="text" placeholder='photoURL' name='photoURL' required value={author.photoURL} onChange={handleChange}></input>
            <br/>
            <div style={{marginTop: "10px"}}>
            <button onClick={onClose} style={{marginRight: "10px"}}>Close</button>
            <button onClick={addAuthor}>Save</button>
            </div>
            </div>
            </div>
        </Box>
    </Modal>
    </div>
    </>
  )
}

export default CreateAuthorModal