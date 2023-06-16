import React from 'react'
import { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';

function AddCategory({ onSubmit, onCancel }) {
        const [categoryTitle, setCategoryTitle] = useState("");
        const [categoryDescription, setCategoryDescription] = useState("");
      
        const handleTitleChange = (e) => {
          setCategoryTitle(e.target.value);
        };
      
        const handleDescriptionChange = (e) => {
          setCategoryDescription(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Call the onSubmit function with the new category details
          onSubmit({ categoryTitle, categoryDescription });
      
          // Reset the form
          setCategoryTitle("");
          setCategoryDescription("");
        };
      
  return (
    <Form onSubmit={handleSubmit}>
        <Label for="categoryTitle">Category Title:</Label>
        <Input
          type="text"
          id="categoryTitle"
          value={categoryTitle}
          onChange={handleTitleChange}
        />
  
        <Label for="categoryDescription">Category Description:</Label>
        <Input
          type="textarea"
          id="categoryDescription"
          value={categoryDescription}
          onChange={handleDescriptionChange}
        />
  
        <Button type="submit" color="primary">Add</Button>
        <Button type="button" color="secondary" onClick={onCancel}>Cancel</Button>
      </Form>
  )
}


export default AddCategory;