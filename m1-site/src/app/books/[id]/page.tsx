"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function BookDetails() {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
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

  if (!book) return <p>Loading book details...</p>;

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
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