"use client"
import React from 'react'
import { BookModel } from '../models/BookModel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function BookList() {


    // https://www.youtube.com/watch?v=_UUWYs1Ra9w video to filter by table tutorial
    
    // Books repository
    const [books, setBooks] = useState<BookModel[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Populates the book variable with data
    useEffect(() => {
        loadBooks();

    }, []);

    // API call to get the books from the database
    const loadBooks = () => {
        axios.get('http://localhost:3001/api/books')
        .then((data) => {
          setBooks(data.data)
          console.log(data.data)
        })
        .catch((err) => {
          console.error(err)
        })
      }

      const handleSelect = () => {
        console.log('test');
      }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }

  return (
    <div>
        <p>List of Books</p>
        <div>
        <input type="text" placeholder='Filtrar libros...' value={searchQuery} onChange={handleSearch}></input>
        <table>
          <thead>
            <tr>
              <th>Book's Title</th>
              <th>Author's Name</th>
              <th>Published Year</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <tr key={book.id} onClick={() => handleSelect()}>
                <td>{book.title}</td>
                <td>{book.publishedYear}</td>
                <td>{book.price}</td>
                <td>
                <button onClick={() => console.log('hola!')}>
                  Accion
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
