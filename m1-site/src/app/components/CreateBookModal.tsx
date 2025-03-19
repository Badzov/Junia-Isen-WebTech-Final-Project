import React, { useState } from 'react'
import { CreateBookModel } from '../models/BookModel';

const CreateBookModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;



    const [book, setBook] = useState<CreateBookModel>({
        title: "",
        publishedYear: 0,
        price: 0,
        averageRating: 0,
        authorId: ""
    });

    const handleChange = (e) => {
        setBook
    }
  return (
    <>
    <div className="modal">TEXT</div>
    </>
  )
}

export default CreateBookModal