import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { loadAllCategories } from '../services/category-service'
import JoditEditor from 'jodit-react'
import { useRef } from 'react'
import { createPost as doCreatePost } from '../services/post-service'
import { getCurrentUserDetail } from '../auth'

function Addpost() {
    const editor = useRef(null);
	//const [content, setContent] = useState('');

    const [categories,setCategories]=useState([])
    const [user,setUser]=useState(undefined)

    const [post, setPost]=useState({
        title:'',
        content:'',
       // image:'',
        categoryId:''
    })

    useEffect(
        ()=>{
            setUser(getCurrentUserDetail())

            loadAllCategories().then((data)=>{
                //console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]
    )

    //fiel changed function
    const fieldChanged=(event)=>{
        // console.log(event.target.name)
        // console.log(event.target.value)
        setPost({...post,[event.target.name]:event.target.value})
    }

    const contentFieldChanged=(data)=>{
        setPost({...post,'content':data})
    }
    //create post function
    const createPost=(event)=>{
        event.preventDefault();
        //console.log(post)
        //console.log("Form submitted")
        if(post.title.trim()===''){
            alert("Post title is required!!")
            return; 
        }
        if(post.content.trim()===''){
            alert("post content is required!!")
            return;
        }
        if(post.categoryId===''){
            alert("Select some category!!")
            return;
        }

        //submit the form on server
        post['userId'] = user.uid
        doCreatePost(post).then(data => {
            alert("Post Created")
            console.log(post)
        }).catch((error)=>{
            alert("error")
            console.log(error)
        })
    }
  return (
    <div className='wrapper'>
        <Card className='shadow'>
            <CardBody>
                <h3>Fill below to add blog</h3>
                {/*JSON.stringify(post)*/}
                <Form onSubmit={createPost}>
                    <div className='my-3'>
                        <Label for='title'>Title</Label>
                        <Input type='text' id='title' placeholder='Enter Blog Title here'
                                name='title'
                                onChange={fieldChanged}></Input>
                    </div>
                    

                    <div className='my-3'>
                        <Label for='content'>Blog Content</Label>
                        {/* <Input type='textarea' id='content' placeholder='Enter Blog content here'
                                style={{height:'300px'}}></Input> */}
                        <JoditEditor
			                ref={editor}
			                value={post.content}
			                tabIndex={1} // tabIndex of textarea
			                onChange={contentFieldChanged}  
                        />      
                    </div>

                  { /* <div className='my-3'>
                    <Label for="image">Select Image</Label>
                    <Input id="image" name="image" type="file"/>
                            </div>*/}
                

                    <div className='my-3'>
                        <Label for='category'>Blog Category</Label>
                        <Input type='select' id='category' placeholder='Select Blog Category' name='categoryId'
                                onChange={fieldChanged}
                                defaultValue={0}>
                                    <option disabled value={0}>--Select some category!--</option>
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