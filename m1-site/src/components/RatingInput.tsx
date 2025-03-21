// components/RatingInput.tsx
import React, { useState } from "react";
import { Rating as RatingIcon, TextField, Button, Box } from "@mui/material";

interface RatingInputProps {
  onSubmit: (rating: number, comment?: string) => void;
}

export const RatingInput: React.FC<RatingInputProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    if (rating !== null) {
      onSubmit(rating, comment);
      setRating(null);
      setComment("");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <RatingIcon
        value={rating}
        onChange={(_, newValue) => setRating(newValue)}
        precision={1}
        max={5}
      />
      <TextField
        label="Comment (optional)"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-white"
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={rating === null}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Submit Rating
      </Button>
    </Box>
  );
};
