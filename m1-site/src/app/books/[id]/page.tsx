"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function BookDetails() {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [author, setAuthor] = useState("Unknown");

  useEffect(() => {
    loadAuthors();
    if (id) {
      axios.get(`http://localhost:3001/api/books/${id}`)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    } 
  }, [id]);

  useEffect(() => {
    if (book && authors.length > 0) {
      const foundAuthor = authors.find(author => author.id === book.authorId)?.name || "Unknown";
      setAuthor(foundAuthor);
    }
  }, [book, authors]);

  const loadAuthors = () => {
    axios.get('http://localhost:3001/api/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  if (!book) return <p>Loading book details...</p>;

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Published Year:</strong> {book.publishedYear}</p>
      <p><strong>Price:</strong> ${book.price}</p>
    </div>
    <div>
        <Link href="/books">
        <button>Go back</button>
        </Link>
    </div>
    </>
  );
}