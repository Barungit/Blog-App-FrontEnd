import { useEffect, useState } from "react"
import { NavLink as ReactLink } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Container, Form, FormFeedback, FormGroup, Input, Label, NavLink } from "reactstrap"
import { signUp } from "../services/user-service"
import { toast } from "react-toastify"
import Base from "../Components/Base"
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

       /* if(error.isError){
            toast.error("Form data is invalid!!")
            return;
        }*/

        console.log(data);

        signUp(data)
            .then((resp)=>{
                console.log(resp);
                console.log("success log");
                toast.success("User is Registered Successfully!! User id : "+resp.uid)
                setData({
                    name:'',
                 email:'',
            password:'',
            about:'',
            phone:'',
                })
                setError({
                    isError:false,
                    errors:null
                })   
        }).catch((error)=>{
            console.log(error)
            console.log("Error log")
            //handle errors in proper way
            setError({
                errors:error,
                isError:true
            })
            toast.error("Form data is invalid!!")
        })
    }


    return (
        <Base>
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
                        value={data.name}
                        invalid={ error.errors?.response?.data?.name ? true: false}
                        />

                        <FormFeedback >
                            {error.errors?.response?.data?.name}
                        </FormFeedback>
                    </FormGroup>


                    {/* Email Field */}
                    <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input id="email" type="email" placeholder="James_maria@gmail.com"
                        onChange={(e)=> handleChange(e,'email')}
                        value={data.email}
                        invalid={ error.errors?.response?.data?.Email ? true: false}
                        />

                        <FormFeedback>
                            {!error.errors?.response?.Email?.name ? "Please Enter a valid Email ID":""}
                        </FormFeedback>
                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input id="password" type="password" placeholder="Jam&Maria3478"
                        onChange={(e)=> handleChange(e,'password')} 
                        value={data.password}
                        invalid={ error.errors?.response?.data?.password ? true: false}
                        />

                        <FormFeedback>
                            {error.errors?.response?.data?.password ? "Password must contain a lowecase and a uppercase character with some numbers and special symbols!":""}
                        </FormFeedback>
                    </FormGroup>

                    {/* About Field */}
                    <FormGroup>
                        <Label for="about">Enter about yourself :</Label>
                        <Input id="about" type="textarea" placeholder="I am an Event Manager." 
                        style={{height: '75px'}}
                        onChange={(e)=> handleChange(e,'about')}
                        value={data.about}
                        invalid={ error.errors?.response?.data?.about ? true: false}
                        />

                        <FormFeedback>
                            {error.errors?.response?.data?.about}
                        </FormFeedback>
                    </FormGroup>

                    {/* Phone Field */}
                    <FormGroup>
                        <Label for="phone">Enter Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 5556667770" 
                        onChange={(e)=> handleChange(e,'phone')}
                        value={data.phone}
                        invalid={ error.errors?.response?.data?.phone ? true: false}
                        />

                        <FormFeedback>
                            {error.errors?.response?.data?.phone}
                        </FormFeedback>
                    </FormGroup>
                    <NavLink className=' text-primary' tag={ReactLink} to="/login">Already a user? Click here to login!!</NavLink>
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
        </Base>
    )
}
export default Signup