"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function BookDetails() {
  const { id } = useParams(); 
  const [author, setAuthor] = useState("Unknown");

  useEffect(() => {
    console.log("#########", id)
    if (id) {
      axios.get(`http://localhost:3001/api/authors/${id}`)
        .then(response => {
          setAuthor(response.data);
          console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    } 
  }, [id]);


  if (!author) return <p>Loading author details...</p>;

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>{author.name}</h1>
      <p><strong>Biography:</strong> {author.biography}</p>
      <p><strong>Books Written:</strong> {author.numberOfBooksWritten}</p>
      <p><strong>Rating:</strong> {author.averageRating}/5</p>
      <img src={author.photoURL} alt={author.name}/>
    </div>
    <div>
        <Link href="/books">
        <button>Go back</button>
        </Link>
    </div>
    </>
  );
}