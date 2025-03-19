import React, { useState, useEffect } from 'react'
import { CreateBookModel } from '../models/BookModel';
import axios from 'axios';
import { Modal, Box } from '@mui/material';
import { AuthorModel } from '../models/AuthorModel';

const CreateBookModal = ({ onClose, onSave }) => {

    useEffect(() => {
        getAuthors();
    }, []);

    const [book, setBook] = useState<CreateBookModel>({
        title: "",
        publishedYear: 0,
        price: 0,
        averageRating: 0,
        authorId: ""
    });

    const [authors, setAuthors ] = useState<AuthorModel[]>([]);

    const getAuthors = () => {
        axios.get('http://localhost:3001/api/authors')
        .then((response) => {
            setAuthors(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const addBook = () => {

        if (!book.title || !book.publishedYear || !book.price || !book.averageRating || !book.authorId) {
            alert("Please fill in all fields before saving.")
            return;
        } else if (book.price < 0 || book.publishedYear > 2025 || book.averageRating < 0 || book.averageRating > 5) {
            alert("Please insert valid valus, prices above 0, published year below the actual year, and the rating in between 0 and 5")
            return;
        }

        const formattedBook = {
            ...book,
            publishedYear: parseInt(book.publishedYear, 10) || 0,
            price: parseFloat(book.price) || 0,
            averageRating: parseFloat(book.averageRating) || 0
        };

        axios.post('http://localhost:3001/api/books', formattedBook)
        .then((response) => {
            onSave(response.data);
            onClose();  // Close modal only after success
            console.log("Data:", response);
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to add book. Please try again.");
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBook({
            ...book, [event.target.name]: event.target.value,
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
            <label><b>Add a new book</b></label>
            <br/>
            <label><b>Book Title</b></label>
            <br/>
            <input type="text" placeholder='Title' name='title' required value={book.title} onChange={handleChange}></input>
            <br/>
            <label><b>Published Year</b></label>
            <br/>
            <input type="text" placeholder='Published Year' name='publishedYear' required value={book.publishedYear} onChange={handleChange}></input>
            <br/>
            <label><b>Book Price</b></label>
            <br/>
            <input type="text" placeholder='Price' name='price' required value={book.price} onChange={handleChange}></input>
            <br/>
            <label><b>Rating</b></label>
            <br/>
            <input type="text" placeholder='Rating' name='averageRating' required value={book.averageRating} onChange={handleChange}></input>
            <br/>
            <label><b>Author</b></label>
            <br/>
            <select name="authorId" value={book.authorId} onChange={handleChange}>
                <option value="">Select an author</option>
                {authors.map((author) => (
                    <option key={author.id} value={author.id}>{author.name}</option>
                ))}
            </select>
            <br/>
            <div style={{marginTop: "10px"}}>
            <button onClick={onClose} style={{marginRight: "10px"}}>Close</button>
            <button onClick={addBook}>Save</button>
            </div>
            </div>
            </div>
        </Box>
    </Modal>
    </div>
    </>
  )
}

export default CreateBookModal