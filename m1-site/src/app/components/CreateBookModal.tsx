import React, { useState } from 'react'
import { CreateBookModel } from '../models/BookModel';
import axios from 'axios';

const CreateBookModal = ({ onClose, onSave }) => {

    const [book, setBook] = useState<CreateBookModel>({
        title: "",
        publishedYear: 0,
        price: 0,
        averageRating: 0,
    });


    const addBook = () => {

        if (!book.title || !book.publishedYear || !book.price || !book.averageRating) {
            alert("Please fill in all fields before saving.")
            return;
        } else if (book.price < 0 || book.publishedYear > 2025 || book.averageRating < 0 || book.averageRating > 10) {
            alert("Please insert valid valus, prices above 0, published year below the actual year, and the rating in between 0 and 10")
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
            onClose();
            console.log("Data:", response)
        })
        .catch((error) => {
            console.error(error);
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBook({
            ...book, [event.target.name]: event.target.value,
        })
    }

  return (
    <>
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
    <button onClick={onClose}>Close</button>
    <button onClick={addBook}>Save</button>
    </div>
    </>
  )
}

export default CreateBookModal