import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { addCategory, deleteCategory, loadAllCategories, updateCategory } from "../../services/category-service";
import { toast } from "react-toastify";
import IconButton from "../../Components/IconButton";
import { faPenToSquare, faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddCategory from "../../Components/AddCategory";

function ManageCategories() {
  const [categories, SetCategories] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [updatedCategory,SetUpdatedCategory] = useState({
    categoryTitle : '',
    categoryDescription : ''
  })
  
  const handleAddClick = () => {
    setShowAddDialog(true);
  };
  const handleAddCategorySubmit = (category) => {
    addCategory(category).then((data)=>{
      console.log(data);
      toast.success("New Category Added");
    }).catch((error) => {
      console.log(error);
      toast.error("Error in creating new Category");
    });

    // Update the state with the new category
  SetCategories([...categories, category]);

  // Close the dialog
  setShowAddDialog(false);
  }

  const [editModes, setEditModes] = useState(
    new Array(categories.length).fill(false)
  );

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        SetCategories([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading categories!");
      });
  }, []);

  const handleEditClick = (cid) => {
    const category = categories.find((cat) => cat.categoryId === cid);
  SetUpdatedCategory({
    categoryTitle: category.categoryTitle,
    categoryDescription: category.categoryDescription,
  });
  console.log(updatedCategory);
    const updatedEditModes = [...editModes];
    updatedEditModes[cid] = true;
    setEditModes(updatedEditModes);

    
  };


  const handleUpdateClick = (cid) => {
    const updatedEditModes = [...editModes];
    updatedEditModes[cid] = false;
    setEditModes(updatedEditModes);
    if(updatedCategory.categoryTitle.trim()===''){
      alert("Category Title is required!!")
      return; 
  }
  if(updatedCategory.categoryDescription.trim()===''){
      alert("Category Description is required!!")
      return;
  }
    console.log(updatedCategory)
    console.log(cid)
    updateCategory(updatedCategory,cid).then(data => {
      console.log(data);
      toast.success("Category Data Updated!!")
    }).catch(error=>{
      toast.error("Error in updating Category!")
   console.log(error)
   })
  };
  
  const handleInputChange = (event) => {
    SetUpdatedCategory({...updatedCategory,[event.target.name]:event.target.value});
    console.log(updatedCategory)
  };

  const handleDeleteClick = (cid) => {
    deleteCategory(cid).then(data =>{
      console.log(data);
      toast.success("Category Deleted!")
      SetCategories(categories.filter(cat => cat.categoryId !== cid));
    }).catch(error=>{
      toast.error("Error in deleting category!")
      console.log(error)
    })
  };
  return (
    <div>
      <Container>
        <CardBody>
          <CardTitle>
            <h4>
              Manage Categories Here : You can do many things like add, delete
              and update! <IconButton
                          className="mx-3"
                          icon={faPlus}
                          onClick={() => handleAddClick()}
                        />
            </h4>
            
          </CardTitle>
          <ListGroup>
            {categories &&
              categories.map((cat, index) => {
                return (
                  <Form key={cat.categoryId}>
                    <ListGroupItem action={true}>
                      <div className="d-flex justify-content-start">
                        <Label for="ctitle">Category Title : </Label>
                        <Input
                          name="categoryTitle"
                          id="categoryTitle"
                          style={{ width: "50%" }}
                          type="text"
                          defaultValue={cat.categoryTitle}
                          disabled={!editModes[cat.categoryId]}
                          onChange={(e) => handleInputChange(e)}
                        ></Input>
                      </div>

                      <div className="d-flex justify-content-start">
                        <Label for="cdescription">Category Title : </Label>
                        <Input
                          name="categoryDescription"
                          id="categoryDescription"
                          style={{ width: "50%" }}
                          type="textarea"
                          defaultValue={cat.categoryDescription}
                          disabled={!editModes[cat.categoryId]}
                          onChange={(e) => handleInputChange(e)}
                        ></Input>
                      </div>

                      {!editModes[cat.categoryId] && (
                        <IconButton
                          className="mx-3"
                          icon={faPenToSquare}
                          onClick={() => handleEditClick(cat.categoryId)}
                        />
                      )}

                      {editModes[cat.categoryId] && (
                        <>
                          <Button
                            className="mx-3"
                            color="primary"
                             onClick={() => handleUpdateClick(cat.categoryId)}
                          >
                            Update
                          </Button>
                          <Button
                            className="mx-3"
                            color="danger"
                            onClick={() => handleDeleteClick(cat.categoryId)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </ListGroupItem>
                  </Form>
                );
              })}
          </ListGroup>
        </CardBody>
      </Container>
      {showAddDialog && (
      <Modal isOpen={true} toggle={() => setShowAddDialog(false)}>
        <ModalHeader>Add Category</ModalHeader>
        <ModalBody>
          <AddCategory
            onSubmit={(category) => handleAddCategorySubmit(category)}
            onCancel={() => setShowAddDialog(false)}
          />
        </ModalBody>
      </Modal>
    )}
    </div>
  );
}

export default ManageCategories;
