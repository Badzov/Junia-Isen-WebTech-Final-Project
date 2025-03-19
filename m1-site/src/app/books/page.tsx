"use client"
import React from 'react'
import { BookModel } from '../models/BookModel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CreateBookModel } from '../models/BookModel';
import CreateBookModal from '../components/CreateBookModal';

export default function BookList() {
    
    // Books repository
    const [books, setBooks] = useState<BookModel[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isSortedAsc, setIsSortedAsc] = useState(true);


    // Populates the book variable with data
    useEffect(() => {
        loadBooks();
    }, []);

    // API call to get the books from the database
    const loadBooks = () => {
        axios.get('http://localhost:3001/api/books')
        .then((data) => {
          setBooks(data.data)
        })
        .catch((err) => {
          console.error(err)
        })
      }

      const createNewBook = () => {
        setIsOpen(true);
      }

      const handleSelect = () => {
        console.log('test');
      }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }

    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.publishedYear.toString().includes(searchQuery)
    );

    const handleSaveBook = (newBook) => {
      setBooks([...books, newBook]);
      loadBooks();
    }

    const sortBooks = () => {
      const sortedBooks = [...books].sort((a,b) => {
        return isSortedAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      })
      setBooks(sortedBooks);
      setIsSortedAsc(!isSortedAsc);
    }

  return (
    <div>
        <p>List of Books</p>
        <div>
        <input type="text" placeholder='Filter books...' value={searchQuery} onChange={handleSearch}></input>
        <button onClick={createNewBook}>Create Book</button>
        <button onClick={sortBooks}>Sort</button>
        { isOpen &&  <CreateBookModal onClose={() => setIsOpen(false)} onSave={handleSaveBook}/> }
        <table>
          <thead>
            <tr>
              <th>Book's Title</th>
              <th>Author's Name</th>
              <th>Published Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks?.map((book) => (
              <tr key={book.id} onClick={() => handleSelect()}>
                <td>{book.title}</td>
                <td>{book.publishedYear}</td>
                <td>{book.price}</td>
                <td>
                <button onClick={() => console.log('hola!')}>
                  Action
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
