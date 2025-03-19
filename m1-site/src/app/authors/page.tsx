"use client"
import React from 'react';
import axios from 'axios';
import { AuthorModel } from '../models/AuthorModel';
import { useState, useEffect } from 'react';
import CreateAuthorModal from '../components/CreateAuthorModal';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function ListAuthors() {
    // Authors repository
    const [authors, setAuthors] = useState<AuthorModel[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isSortedAsc, setIsSortedAsc] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);

    // Populates the author variable with data
    useEffect(() => {
        loadAuthors();
    }, []);

    // Loads the authors from the API call
    const loadAuthors = () => {
      axios.get('http://localhost:3001/api/authors')
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
    }

    // Use to open and close the modal
    const createNewAuthor = () => {
        setIsOpen(true);
    }

    // Recieves the search query from the filtering bar
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }

    // Filters the authors by name
    const filteredAuthors = authors.filter(author => 
      author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Adds new author to the model
    const handleSaveAuthor = (newAuthor) => {
      setAuthors([...authors, newAuthor]);
    }

    // Function to sort the authors using comparisons, and depending of the state of sorted it will change between ascending and descending
    const sortAuthors = () => {
      const sortedAuthors = [...authors].sort((a,b) => {
        return isSortedAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      })
      setAuthors(sortedAuthors);
      setIsSortedAsc(!isSortedAsc);
    }

    // API call to delete the book
    const deleteBook = (id: string) => {
      axios.delete(`http://localhost:3001/api/authors/${id}`)
      .then(() => {
        setAuthors((prev) => (prev ?? []).filter((author) => author.id !== id))
      })
    }

    return (
    <div>
        <p>List of Authors</p>
        <div>
        <input type="text" placeholder='Filter authors...' value={searchQuery} onChange={handleSearch}></input>
        <button onClick={createNewAuthor} style={{marginLeft: "20px"}}>Create Author</button>
        <button onClick={sortAuthors} style={{marginLeft: "20px"}}>Sort</button>
        { isOpen &&  <CreateAuthorModal onClose={() => setIsOpen(false)} onSave={handleSaveAuthor}/> }
        <table>
          <thead >
            <tr>
              <th style={{ padding: "0 30px" }}>Author's Name</th>
              <th style={{ padding: "0 30px" }}>Number of Books</th>
              <th style={{ padding: "0 30px" }}>Picture</th>
            </tr>
          </thead>
          <tbody>
            {filteredAuthors?.map((author) => (
              <tr key={author.id}>
                <td style={{ padding: "0 30px" }}>{author.name}</td>
                <td style={{ padding: "0 30px" }}>{author.numberOfBooksWritten}</td>
                <td style={{ padding: "0 30px" }}><img src={author.photoURL} alt={"No Image"} width="140" height="100"></img></td>
                <td>
                  <Link href={`/authors/${author.id}`}>
                    <button style={{marginRight: "10px"}}>
                      Details
                    </button>
                </Link>
                <button onClick={() => { setSelectedAuthorId(author.id); setDeleteModal(true); }}>Delete</button>
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
                <p>Are you sure you want to delete the author?</p>
                <button style={{marginRight: "10px", backgroundColor: "red" }}onClick={() => {deleteBook(selectedAuthorId); setDeleteModal(false)}}>Delete</button>
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