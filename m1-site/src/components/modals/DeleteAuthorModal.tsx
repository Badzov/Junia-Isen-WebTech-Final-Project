import React from "react";
import { Modal, Box } from "@mui/material";

interface DeleteAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteAuthorModal: React.FC<DeleteAuthorModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
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
          }}
        >
          <p>Are you sure you want to delete the author?</p>
          <button
            style={{
              marginRight: "10px",
              backgroundColor: "red",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#f0f0f0",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteAuthorModal;
