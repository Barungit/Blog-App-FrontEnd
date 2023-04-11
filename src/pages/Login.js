import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

const Login=()=> {
    return (
        <div>
            <Container className="my-5">
            <Row >
                <Col sm={{size:8,offset:2}}>
                
                
            <Card style={{border: '3px solid black'}}>
            <CardHeader>
                <h3>Please, enter the following details to get started!</h3>

            </CardHeader>

            <CardBody>
                {/* creating form */}
                <Form>
                    {/* Email Field */}
                    <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input id="email" type="email" placeholder="James_maria@gmail.com" />
                    </FormGroup>

                    {/* Pasword Field */}
                    <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input id="password" type="password" placeholder="Jam&Maria3478" />
                    </FormGroup>

                    {/* Button Fields */}
                    <Container className="text-center">
                        <Button type="Login" color="success">Login</Button>
                    </Container>

                </Form>


            </CardBody>


            </Card>
            </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Login