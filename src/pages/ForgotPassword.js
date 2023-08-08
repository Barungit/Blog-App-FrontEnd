import React from "react";
import { toast } from "react-toastify";
import { sendtoMail } from "../services/user-service";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavLink,
  Row,
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
import Base from "../Components/Base";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //console.log(loginDetail);
    //validation
    if (email.trim() == "") {
      toast.error("Email Field is blank!");
      return;
    }
    alert("Please wait for some seconds!");
    //submit the data
    sendtoMail(email)
      .then((data) => {
        console.log(data);

        toast.success(
          "An Email has been sent to your Email to change password! "
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on the Server!");
        }
      });
  };
  return (
    <Base>
      <div>
        <Container className="my-5">
          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              <Card className=" shadow border border-dark">
                <CardHeader className="bg-primary">
                  <h3 className="text-white">Enter Your EmailId : </h3>
                </CardHeader>

                <CardBody>
                  {/* creating form */}
                  <Form onSubmit={handleFormSubmit}>
                    {/* Email Field */}
                    <FormGroup>
                      <Label for="email">Enter Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="James_maria@gmail.com"
                        value={email}
                        onChange={(e) => handleChange(e)}
                      />
                    </FormGroup>
                    <NavLink
                      className=" text-primary"
                      tag={ReactLink}
                      to="/login"
                    >
                      Click Here to go back to login page.
                    </NavLink>
                    <NavLink
                      className=" text-primary"
                      tag={ReactLink}
                      to="/signup"
                    >
                      New user? Click here to signup!
                    </NavLink>

                    {/* Button Fields */}
                    <Container className="text-center">
                      <Button className="shadow" type="submit" color="success">
                        Login
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  );
}

export default ForgotPassword;
