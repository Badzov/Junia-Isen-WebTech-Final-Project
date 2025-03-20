import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { CreateBookModel } from "../../models/BookModel";
import { AuthorModel } from "../../models/AuthorModel";

interface CreateBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: CreateBookModel) => void;
  authors: AuthorModel[];
}

const CreateBookModal: React.FC<CreateBookModalProps> = ({
  isOpen,
  onClose,
  onSave,
  authors,
}) => {
  const [book, setBook] = useState<CreateBookModel>({
    title: "",
    publishedYear: 0,
    price: 0,
    authorId: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Allow empty strings temporarily
    let parsedValue: number | string = value;

    if (name === "publishedYear" || name === "price") {
      // If the value is an empty string, keep it as an empty string
      parsedValue = value === "" ? "" : Number(value);
    }

    console.log(
      `Field: ${name}, Value: ${value}, Parsed Value: ${parsedValue}`
    ); // Debugging

    setBook((prevBook) => ({
      ...prevBook,
      [name]: parsedValue,
    }));
  };

  // Handle saving the book
  const handleSave = () => {
    console.log("Book data:", book);
    console.log("Type of publishedYear:", typeof book.publishedYear);
    console.log("Type of price:", typeof book.price);
    // Validate required fields
    if (!book.title || !book.publishedYear || !book.price || !book.authorId) {
      setError("Please fill in all required fields.");
      return;
    }

    // Validate published year and price
    if (book.publishedYear > new Date().getFullYear() || book.price < 0) {
      setError("Please enter a valid published year and price.");
      return;
    }

    // Clear any previous errors
    setError("");

    // Pass the book data to the parent component
    console.log("Saving book:", book);
    onSave(book);

    // Close the modal
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "400px",
          }}
        >
          <h2>Add a New Book</h2>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Book Title</b>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              required
              value={book.title}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Published Year</b>
            </label>
            <input
              type="number"
              placeholder="Published Year"
              name="publishedYear"
              required
              value={book.publishedYear}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Price</b>
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              required
              value={book.price}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Author</b>
            </label>
            <select
              name="authorId"
              value={book.authorId}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            >
              <option value="">Select an author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={onClose}
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                backgroundColor: "#f0f0f0",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Close
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateBookModal;
