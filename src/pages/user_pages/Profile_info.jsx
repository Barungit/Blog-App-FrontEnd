import React, { useEffect, useState } from "react";
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
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../Components/IconButton";
import {
  deleteUser,
  updateUserDetails,
  uploadProPic,
} from "../../services/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../../auth";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { BASE_URL } from "../../services/helper";

const Profile_info = () => {
  const userContextData = useContext(userContext);
  const [disabled, setDisabled] = useState(true);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phone: "",
  });

  useEffect(() => {
    // Function to load the userContextData from local storage
    const loadUserContextFromStorage = () => {
      const storedUserContextData = localStorage.getItem("userContextData");

      if (storedUserContextData) {
        // If stored data exists, parse and update the userContextData
        userContextData.setUser({
          data: JSON.parse(storedUserContextData),
          login: true,
        });
      }
    };

    // Load the userContextData from local storage on component mount
    loadUserContextFromStorage();

    // Save the userContextData to local storage whenever it changes

    // Clean up function to remove the event listener
  }, []);

  const handleClick = (event) => {
    setDisabled(false);
  };

  const handleEnableClick = (event) => {
    event.preventDefault();

    handleClick();
    const defaultData = {
      name: document.getElementById("nameField").defaultValue,
      about: document.getElementById("aboutField").defaultValue,
      phone: document.getElementById("phoneField").defaultValue,
      // Add more fields here
    };

    setFormData(defaultData);
    console.log(formData);
  };

  const fieldChanged = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  //take data of form
  const handleSumbit = (event) => {
    event.preventDefault();

    if (formData.name.trim() === "") {
      toast.error("Name is required!!");
      return;
    }
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long!!");
      return;
    } 
    if (formData.about.trim() === "") {
      alert("about is required!!");
      return;
    }
    if (formData.about.trim().length < 10) {
      toast.error("About must be at least 10 characters long!!");
      return;
    } 
    // if (formData.phone === "") {
    //   alert("Enter phone number!");
    //   return;
    // }
    console.log(formData);
    updateUserDetails(formData, local.user.uid)
      .then((data) => {
        console.log(data);
        toast.success("User Data Updated!!");
        console.log(image);
        localStorage.setItem("userContextData", JSON.stringify(data));
        userContextData.setUser({
          data: data,
          login: true,
        });
        console.log(userContextData);
        if (image != null) {
          uploadProPic(data.uid, image)
            .then((resp) => {
              console.log(resp);
              toast.success("Propic Updated!!");

              localStorage.setItem("userContextData", JSON.stringify(resp));
              userContextData.setUser({
                data: resp,
                login: true,
              });
              console.log(userContextData);
            })
            .catch((error) => {
              toast.error("Error in updating propic!");
              console.log(error);
            });
        }
      })
      .catch((error) => {
        toast.error("Error in updating post!");
        console.log(error);
      });
  };
  const handleDelete = () => {
    console.log("DElete : " + local.user.uid);
    deleteUser(local.user.uid)
      .then((data) => {
        navigate("/");
        console.log(data);
        toast.success("Your Account is Deleted Successfullly!");
        logout();
      })
      .catch((error) => {
        toast.error("Error in deleteing!");
        console.log(error);
      });
  };

  const logout = () => {
    doLogout(() => {
      //logged out
      userContextData.setUser({
        data: null,
        login: false,
      });
    });
  };

  const [image, setImage] = useState(null);
  const handlefilechange = (event) => {
    console.log(event.target.files[0]);

    setImage(event.target.files[0]);
  };
  const local = JSON.parse(localStorage.getItem("data"));
  return (
    <Base>
      <div>
        <Container>
          <Card>
            <center>
              <img
                src={
                  BASE_URL + "/users/pfp/" + userContextData?.user?.data?.propic
                }
                height={100}
                width={100}
              />
            </center>
            <CardTitle className="my-2">
              <h3>
                <center>{userContextData?.user?.data?.name}</center>
                {console.log(userContextData)}
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
                        defaultValue={userContextData?.user?.data?.name}
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
                        defaultValue={userContextData?.user?.data?.about}
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
                        defaultValue={userContextData?.user?.data?.phone}
                        disabled={disabled}
                        onChange={fieldChanged}
                      />
                    </Col>
                  </Row>

                  <Row className="my-3">
                    <Col>
                      <Label for="image">Select New Profile Picture</Label>
                      <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handlefilechange}
                        disabled={disabled}
                      />
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    className="my-3 mx-3"
                    color="info"
                    onClick={handleSumbit}
                  >
                    Update Profile
                  </Button>
                  <Button
                    className="my-3 mx-3"
                    color="danger"
                    onClick={handleDelete}
                  >
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
