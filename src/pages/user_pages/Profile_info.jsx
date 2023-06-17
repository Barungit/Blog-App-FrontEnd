import React, { useState } from "react";
import Base from "../../Components/Base";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import UserhorizontalList from "../../Components/UserhorizontalList";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../Components/IconButton";
import { deleteUser, updateUserDetails } from "../../services/user-service";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { doLogout } from "../../auth";
import { useContext } from "react";
import userContext from "../../context/userContext";

const Profile_info = () => {
  const userContextData = useContext(userContext);
  const [disabled, setDisabled] = useState(true);
  let navigate = useNavigate()
  const [formData,setFormData] = useState({
    name:'',
    about:'',
    phone:''
  });

  const handleClick = (event) => {
  
    setDisabled(false);
  };

  const handleEnableClick = (event) => {
   
    event.preventDefault();
   
    handleClick();
    const defaultData = {
      name: document.getElementById('nameField').defaultValue,
      about: document.getElementById('aboutField').defaultValue,
      phone: document.getElementById('phoneField').defaultValue,
      // Add more fields here
    };

    setFormData(defaultData);
    console.log(formData);
  };

  const fieldChanged=(event)=>{
    
    setFormData({...formData,[event.target.name]:event.target.value});
    console.log(formData)
};

  //take data of form 
  const handleSumbit = (event)=>{
    event.preventDefault();
   
    if(formData.name.trim()===''){
      alert("Name is required!!")
      return; 
  }
  if(formData.about.trim()===''){
      alert("about is required!!")
      return;
  }
  if(formData.phone===''){
      alert("Enter phone number!")
      return;
  }
    console.log(formData)
    updateUserDetails(formData,local.user.uid).then(data => {
      console.log(data);
      toast.success("User Data Updated!!")
    }).catch(error=>{
      toast.error("Error in updating post!")
   console.log(error)
   })
  }
const handleDelete = () =>{
  console.log("DElete : " + local.user.uid);
  deleteUser(local.user.uid).then((data)=>{
    navigate("/")
    console.log(data);
    toast.success("Your Account is Deleted Successfullly!")
    logout();
    }
  ).catch(error=>{
    toast.error("Error in deleteing!")
 console.log(error)
}
  )
}

const logout=()=>{
  doLogout(()=>{
    //logged out
    userContextData.setUser({
      data: null,
      login: false
    })
    
  })
}

  const local = JSON.parse(localStorage.getItem("data"));
  return (
    <Base>
      <UserhorizontalList />
      <div>
        <Container>
          <Card>
            <CardTitle className="my-2">
              <h3>
                <center>{local?.user?.name}</center>
              </h3>
            </CardTitle>
            <hr />
            <CardBody>
              <CardSubtitle>
                You can also update your profile here!
                <IconButton icon={faPenToSquare} onClick={handleEnableClick} />
              </CardSubtitle>
              <div className="container">
                <Form>
                  <Row className="my-3">
                    <Col>
                      <Label for="name">Name : </Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        name="name"
                        id="nameField"
                        defaultValue={local?.user?.name}
                        disabled={disabled}
                        onChange={fieldChanged}
    
                      />
                    </Col>
                    
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Label for="about">About : </Label>
                    </Col>
                    <Col>
                      <Input
                        type="textarea"
                        name="about"
                        id="aboutField"
                        defaultValue={local?.user?.about}
                        disabled={disabled}
                        onChange={fieldChanged}
                      />
                    </Col>
                    
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Label for="phone">Phone : </Label>
                    </Col>
                    <Col>
                      <Input
                        type="number"
                        name="phone"
                        id="phoneField"
                        defaultValue={local?.user?.phone}
                        disabled={disabled}
                        onChange={fieldChanged}
                      />
                    </Col>
                    
                  </Row>
                  <Button type="submit" className="my-3 mx-3" color="info" onClick={handleSumbit}>
                    Update Profile
                  </Button>
                  <Button className="my-3 mx-3" color="danger" onClick={handleDelete}>
                    Delete Profile
                  </Button>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </Base>
  );
};

export default Profile_info;
