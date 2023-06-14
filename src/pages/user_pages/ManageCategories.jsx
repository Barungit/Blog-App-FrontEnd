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
} from "reactstrap";
import { loadAllCategories } from "../../services/category-service";
import { toast } from "react-toastify";
import IconButton from "../../Components/IconButton";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function ManageCategories() {
  const [categories, SetCategories] = useState([]);
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
  return (
    <div>
      <Container>
        <CardBody>
          <CardTitle>
            <h4>
              Manage Categories Here : You can do many things like add, delete
              and update!
            </h4>
          </CardTitle>
            <ListGroup>
              {categories &&
                categories.map((cat, index) => {
                  return (
                    <Form>
                    <ListGroupItem key={index}
                    action={true}>
                    <div className="d-flex justify-content-start">
                      <Label for="ctitle">Category Title : </Label>
                      <Input name="ctitle" style={{ width: '50%' }} type="text" defaultValue={cat.categoryTitle} disabled></Input>
                      </div>
                    
                    <div className="d-flex justify-content-start">
                    <Label for="cdescription">Category Title : </Label>
                      <Input name="cdescription" style={{ width: '50%' }} type="textarea" defaultValue={cat.categoryDescription} disabled></Input>
                      </div>   
                        
                        <IconButton className="mx-3" icon={faPenToSquare}  />
                            <Button className="mx-3" color="primary">Update</Button>
                            <Button className="mx-3" color="danger">Delete</Button>
                        
                            
                        
                        
                    
                    </ListGroupItem>
                    </Form>
                  );
                })}
            </ListGroup>
        </CardBody>
      </Container>
    </div>
  );
}

export default ManageCategories;
