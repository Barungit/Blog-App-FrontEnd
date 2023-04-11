import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { signUp } from "../services/user-service"
//import (signUp)
const Signup=()=> {
    // data is the object where the data from the form is hold before sending to the backend
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:'',
        phone:'',
    })
    //error object to handle and show error
    const [error,setError]=useState({
       errors:{},
       isError:false

    })
    /*
    useEffect(()=>{
        console.log(data)
    },[data])*/

    //to add the data from form to the object data
    const handleChange=(event,property)=>{
       setData({...data,[property]:event.target.value})
    }


    // to reset our form
    const resetData=()=>{
        setData({
            name:'',
            email:'',
            password:'',
            about:'',
            phone:'',
        })
    }

    //submitting form
    const submitForm=(event)=>{
        event.preventDefault();

        signUp(data).then((resp)=>{
            console.log(resp)
            console.log("success log")
        }).catch((error)=>{
            console.log(error)
            console.log("Error log")
        })
    }


    return (
        <div>
            {/* for blog lovers!. Read , write, explore!*/}
            {/* container to make the form have ggaps from both ends and margin y axis to gap from top and bottom.*/}
            <Container className="my-3">
            
            <Card style={{border: '3px solid black'}}>
            <CardHeader>
                <h3>Fill this form to be a part of us!</h3>

            </CardHeader>

            <CardBody>
                {/* creating form */}
                <Form onSubmit={submitForm}>
                    {/* Name Field, for and id are connected by same string */}
                    <FormGroup>
                        <Label for="name">Enter Name</Label>
                        <Input id="name" type="text" placeholder="James"  onChange={(e)=> handleChange(e,'name')}
                        value={data.name}/>
                    </FormGroup>


                    {/* Email Field */}
                    <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input id="email" type="email" placeholder="James_maria@gmail.com"
                        onChange={(e)=> handleChange(e,'email')}
                        value={data.email} />
                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input id="password" type="password" placeholder="Jam&Maria3478"
                        onChange={(e)=> handleChange(e,'password')} 
                        value={data.password}/>
                    </FormGroup>

                    {/* About Field */}
                    <FormGroup>
                        <Label for="about">Enter about yourself :</Label>
                        <Input id="about" type="textarea" placeholder="I am an Event Manager." 
                        style={{height: '75px'}}
                        onChange={(e)=> handleChange(e,'about')}
                        value={data.about}/>
                    </FormGroup>

                    {/* Phone Field */}
                    <FormGroup>
                        <Label for="phone">Enter Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 5556667770" 
                        onChange={(e)=> handleChange(e,'phone')}
                        value={data.phone}/>
                    </FormGroup>

                    {/* Button Fields */}
                    <Container className="text-center">
                    
                        <Button type="submit" color="success">Submit</Button>
                        <Button type="reset" onClick={resetData} color="danger" className="ms-3">Reset</Button>
                    </Container>

                </Form>


            </CardBody>


            </Card>

            </Container>
        </div>
    )
}
export default Signup