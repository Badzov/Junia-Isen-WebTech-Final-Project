"use client"
import React from 'react'
import { BookModel } from '../models/BookModel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBookModal from '../components/CreateBookModal';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function BookList() {
    
    // Books repository
    const [books, setBooks] = useState<BookModel[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isSortedAsc, setIsSortedAsc] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

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

    const deleteBook = (id: string) => {
      axios.delete(`http://localhost:3001/api/books/${id}`)
      .then(() => {
        setBooks((prev) => (prev ?? []).filter((book) => book.id !== id))
      })
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
                <td>{book.price}</td>
                <td>{book.publishedYear}</td>
                <td>
                  <Link href={`/books/${book.id}`}>
                    <button>
                      Details
                    </button>
                </Link>
                <button onClick={() => { setSelectedBookId(book.id); setDeleteModal(true); }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteModal && 
        <div>
          <Modal open={deleteModal} onClose={() => setDeleteModal(false)}>
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
                <p>Are you sure you want to delete the book?</p>
                <button onClick={() => {deleteBook(selectedBookId); setDeleteModal(false)}}>Delete</button>
                <button onClick={() => setDeleteModal(false)}>Cancel</button>
              </div>
            </Box>
          </Modal>
        </div>
        }
        </div>
    </div>
  )
}
