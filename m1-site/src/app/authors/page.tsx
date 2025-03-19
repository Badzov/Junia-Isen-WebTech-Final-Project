"use client"
import React from 'react';
import axios from 'axios';
import { AuthorModel } from '../models/AuthorModel';
import { useState, useEffect } from 'react';

export default function ListAuthos() {
    // Repositories for the models utilized for the author
    const [authors, setAuthors] = useState<AuthorModel[]>([])

    // Populates the authors with its corresponding data
    useEffect(() => {
        getAuthors();
    }, [])

    // API call to optain the authors 
    const getAuthors = () => {
        axios.get('http://localhost:3001/api/authors')
        .then((data) => {
            setAuthors(data.data)
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div>
            <p>{authors?.map((author) => 
            <div>
                <p>{author.name}</p>
                <p>{author.biography}</p>
                <p>{author.numberOfBooksWritten}</p>
                <img src={author.photoURL} alt={author.name}/>
            </div>
            )}
            </p>
        </div>
    );
}