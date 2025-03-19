"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function BookDetails() {
    // Recieve the id parameters from the link
  const { id } = useParams(); 
  // Save author information, if none are presented it defaults to Unknown
  const [author, setAuthor] = useState("Unknown");

  // If an ID is recieved it will fetch the author and save it
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

  // While no authors are loaded it will display the message
  if (!author) return <p>Loading author details...</p>;


  // Display the essential information about the selected author
  return (
    <>
    <div style={{ padding: "20px" }}>
      <h1>{author.name}</h1>
      <p><strong>Biography:</strong> {author.biography}</p>
      <p><strong>Books Written:</strong> {author.numberOfBooksWritten}</p>
      <p><strong>Rating:</strong> {author.averageRating}/5</p>
      <img src={author.photoURL} alt={author.name} width="250" height="200"/>
    </div>
    <div>
        <Link href="/authors">
        <button>Go back</button>
        </Link>
    </div>
    </>
  );
}