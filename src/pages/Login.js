import { useState } from "react"
import { toast } from "react-toastify"
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { loginUser } from "../services/user-service"
import { doLogin } from "../auth"
import { useNavigate } from "react-router-dom"
import Base from "../Components/Base"
const Login=()=> {

    const navigate=useNavigate()

    const[loginDetail,setLoginDetail]=useState({
        email:'',
        password:''
    })

    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
    }
    const resetData=()=>{
        setLoginDetail({
            email:'',
            password:''
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        //console.log(loginDetail);
        //validation
        if(loginDetail.email.trim()=='' || loginDetail.password.trim()==''){
            toast.error("Username and Password is required !!")
            return;
        }

        //submit the data to the server to generate the token
        loginUser(loginDetail).then((data)=>{
            console.log(data)

            //save the data to localstorage
            doLogin(data,()=>{
                console.log("login detail is saved to localstorage")
                //redirect to user dashboard page
                navigate("/user/dashboard")
            })
            toast.success("Login Success!")
        }).catch(error=>{
            console.log(error)
            if(error.response.status==400 || error.response.status==404){
                toast.error(error.response.data.message)
            }else{
                toast.error("Something went wrong on the Server!")
            }
            
        })
    }

    return (
        <Base>
        <div>
            <Container className="my-5">
            <Row >
                <Col sm={{size:8,offset:2}}>
                
                
            <Card style={{border: '3px solid black'}}>
            <CardHeader>
                <h3>LOGIN HERE!! </h3>

            </CardHeader>

            <CardBody>
                {/* creating form */}
                <Form onSubmit={handleFormSubmit}>
                    {/* Email Field */}
                    <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input id="email" type="email" placeholder="James_maria@gmail.com"
                            value={loginDetail.email} 
                            onChange={(e)=> handleChange(e,'email')} 
                        />

                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input id="password" type="password" placeholder="Jam&Maria3478"
                            value={loginDetail.password} 
                            onChange={(e)=> handleChange(e,'password')}
                        />
                    </FormGroup>

                    {/* Button Fields */}
                    <Container className="text-center">
                        <Button type="Login" color="success">Login</Button>
                        <Button type="reset" onClick={resetData} color="danger" className="ms-3">Reset</Button>
                    </Container>

                </Form>


            </CardBody>


            </Card>
            </Col>
            </Row>
            </Container>
        </div>
        </Base>
    )
}
export default Login