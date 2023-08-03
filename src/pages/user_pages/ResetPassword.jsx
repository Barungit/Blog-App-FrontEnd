import React from 'react'

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { forgotAndChangePassword} from '../../services/user-service';
import { toast } from 'react-toastify';
import Base from '../../Components/Base';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useNavigate } from "react-router-dom"

function ResetPassword  ()  {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams(); 
  const navigate=useNavigate()

  function handleResetPassword(event)  {
    event.preventDefault();
    // Get the token from the URL params
        console.log(token);
    if (!password || !confirmPassword) {
      toast.warning('Please enter a new password and confirm it.');
    } else if (password !== confirmPassword) {
      toast.warning('Passwords do not match.');
    } else {
      
    forgotAndChangePassword(token,password).then((data)=>{
      console.log(data)

      //save the data to localstorage
      console.log(data);
            toast.success("Password Changed Successfully!!");
            navigate("/login")
      
  }).catch(error=>{
      console.log(error)
      if(error.response.status==400 || error.response.status==404){
          toast.error(error.response.data.message)
          alert("Password should be in between 8 to 20 characters & must contain atleast one small alphabet,one capital aplhabet and a number.")
      }else{
          toast.error("Something went wrong on the Server!")
      }
      
  })
  }}

  return (
    <Base>
        
            <Container className="my-5">
            <Row >
                <Col sm={{size:8,offset:2}}>
                
                
            <Card className=" shadow border border-dark">
            <CardHeader className="bg-primary">
                <h3 className="text-white">Login Here </h3>
                <p>NOTE: New password should be in between 8 to 20 characters & must contain atleast one small alphabet,one capital aplhabet and a number. </p>
            </CardHeader>

            <CardBody>
                {/* creating form */}
                <Form onSubmit={handleResetPassword}>
                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter New Password</Label>
                        <Input id="password" type="password" placeholder="Jam&Maria3478"
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter New Password Again</Label>
                        <Input id="password" type="password" placeholder="Confirm new Password"
                            value={confirmPassword} 
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                        />
                    </FormGroup>
                  

                    {/* Button Fields */}
                    <Container className="text-center">
                        <Button className="shadow" type="Submit" color="success">Reset Password</Button>
                    </Container>

                </Form>


            </CardBody>


            </Card>
            </Col>
            </Row>
            </Container>
         
    </Base>
  );
};

export default ResetPassword;
