"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function BookDetails() {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState({ id: "unknown", name: "Unknown" });

  // Loads the authors and books when the page is instanciated
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

  // Loads the authors from the API
  const loadAuthors = () => {
    axios.get('http://localhost:3001/api/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Looks for the author that have a matching id in the books authorID attribute
  useEffect(() => {
    if (book && authors.length > 0) {
      const foundAuthor = authors.find(author => author.id === book.authorId) || { id: "unknown", name: "Unknown" };
      setAuthor(foundAuthor);
    }
  }, [book, authors]);


  if (!book) return <p>Loading book details...</p>;

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <Link href={`/authors/${author.id}`}>
        <p><strong>Author:</strong> {author.name}</p>
      </Link>
      <p><strong>Published Year:</strong> {book.publishedYear}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>Rating:</strong> {book.averageRating}/5</p>
    </div>
    <div>
        <Link href="/books">
        <button>Go back</button>
        </Link>
    </div>
    </>
  );
}