import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'

function Addpost() {

    const [categories,setCategories]=useState([])

    useEffect(
        ()=>{
            loadAllCategories().then((data)=>{
                console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]
    )

  return (
    <div className='wrapper'>
        <Card className='shadow'>
            <CardBody>
                <h3>Fill below to add blog</h3>
                <Form>
                    <div className='my-3'>
                        <Label for='title'>Title</Label>
                        <Input type='text' id='title' placeholder='Enter Blog Title here'></Input>
                    </div>
                    

                    <div className='my-3'>
                        <Label for='content'>Blog Content</Label>
                        <Input type='textarea' id='content' placeholder='Enter Blog content here'
                                style={{height:'300px'}}></Input>
                    </div>

                    <div className='my-3'>
                        <Label for='category'>Blog Category</Label>
                        <Input type='select' id='category' placeholder='Select Blog Category'>
                            {
                                categories.map((category)=>(
                                    <option value={category.categoryId} key={category.categoryId}>
                                        {category.categoryTitle}
                                    </option>
                                ))
                            }
                        </Input>
                    </div>
                    <Container className='text-center'>
                        <div>
                            <Button color='warning' type='submit' >Post Blog</Button>
                            <Button color='danger' type='reset' className='ms-2' >Reset</Button>
                        </div>
                    </Container>
                </Form>
            </CardBody>
        </Card>
    </div>
  )
}

export default Addpost