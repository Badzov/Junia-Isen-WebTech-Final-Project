import React from "react";
import { AuthorModel } from "../models/AuthorModel";
import Link from "next/link";

interface AuthorTableProps {
  authors: AuthorModel[];
  onDelete: (id: string) => void;
}

export const AuthorTable: React.FC<AuthorTableProps> = ({
  authors,
  onDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ padding: "0 30px" }}>Author's Name</th>
          <th style={{ padding: "0 30px" }}>Number of Books</th>
          <th style={{ padding: "0 30px" }}>Picture</th>
          <th style={{ padding: "0 30px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td style={{ padding: "0 30px" }}>{author.name}</td>
            <td style={{ padding: "0 30px" }}>{author.numberOfBooksWritten}</td>
            <td style={{ padding: "0 30px" }}>
              <img
                src={author.photoURL}
                alt={"No Image"}
                width="140"
                height="100"
              />
            </td>
            <td style={{ padding: "0 30px" }}>
              <Link href={`/authors/${author.id}`}>
                <button style={{ marginRight: "10px" }}>Details</button>
              </Link>
              <button onClick={() => onDelete(author.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
