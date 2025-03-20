import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

interface CreateAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (author: {
    name: string;
    biography: string;
    photoURL: string;
  }) => void;
}

const CreateAuthorModal: React.FC<CreateAuthorModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [author, setAuthor] = useState({
    name: "",
    biography: "",
    photoURL: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!author.name || !author.biography || !author.photoURL) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    onSave(author); // Pass the author data to the parent component
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
          <h2>Add a New Author</h2>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={author.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Biography</b>
            </label>
            <textarea
              placeholder="Biography"
              name="biography"
              required
              value={author.biography}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                height: "100px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              <b>Photo URL</b>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoURL"
              required
              value={author.photoURL}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
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

export default CreateAuthorModal;
