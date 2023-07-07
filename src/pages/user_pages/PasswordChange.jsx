import React from "react";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Base from "../../Components/Base";
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
  Row,
} from "reactstrap";
import { toast } from "react-toastify";
import { changePassword } from "../../services/user-service";

function PasswordChange() {
  const userContextData = useContext(userContext);

  const [passwordDetail, setPasswordDetail] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setPasswordDetail({
      ...passwordDetail,
      [field]: actualValue,
    });
  };
  const resetData = () => {
    setPasswordDetail({
      email: "",
      password: "",
      newPassword: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userContextData.user.data.uid);
    console.log(passwordDetail);
    //validation
    if (
      passwordDetail.email.trim() == "" ||
      passwordDetail.password.trim() == "" ||
      passwordDetail.newPassword.trim() == ""
    ) {
      toast.error("Empty Fields!");
      return;
    }

    changePassword(passwordDetail,userContextData.user.data.uid)
      .then((data) => {
        console.log(data);
        toast.success("Password Changed!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.!");
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
                  <h3 className="text-white">Change Password Here {} </h3>
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
                        value={passwordDetail.email}
                        onChange={(e) => handleChange(e, "email")}
                      />
                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                      <Label for="password">Enter Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Jam&Maria3478"
                        value={passwordDetail.password}
                        onChange={(e) => handleChange(e, "password")}
                      />
                    </FormGroup>

                    {/* New Pasword Field */}
                    <FormGroup>
                      <Label for="newPassword">Enter New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="NewJam&Maria3478"
                        value={passwordDetail.newPassword}
                        onChange={(e) => handleChange(e, "newPassword")}
                      />
                    </FormGroup>

                    {/* Button Fields */}
                    <Container className="text-center">
                      <Button className="shadow" type="submit" color="success">
                        Update
                      </Button>
                      <Button
                        className="shadow ms-3"
                        type="reset"
                        onClick={resetData}
                        color="danger"
                      >
                        Reset
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

export default PasswordChange;
