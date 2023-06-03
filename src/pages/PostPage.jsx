import React from 'react'
import Base from '../Components/Base'
import { useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Input, Row } from 'reactstrap'
import { useEffect } from 'react'
import { createComment, loadPost } from '../services/post-service'
import { useState } from 'react'
import { BASE_URL } from '../services/helper'
import { toast } from 'react-toastify'
import { isLoggedIn } from '../auth'

function PostPage() {
const [comment,setComment]=useState({
  content:''
})    
const {bid}=useParams();
const [post,setPost]=useState(null)

    useEffect(()=>{
        //load the post
        loadPost(bid).then(data=>{
            console.log(data)
            setPost(data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const printDate=(numbers)=>{
        return new Date(numbers).toLocaleDateString()
    }
    const addComment=()=>{
      if(!isLoggedIn()){
        toast.error('Login to do comment!');
        return
      }
      if(comment.content.trim()===''){
        return
      }
      createComment(comment,post.bid)
      .then(data=>{
        console.log(data)
        toast.success('You commented on this blog!')
        setPost({
          ...post,
          comments:[...post.comments,data.data]
        })
        setComment({
          content:''
        })
      }).catch(error=>{
        console.log(error)
      })
    }

  return (
    <Base>
    
        <Container >
        <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 500
      }}
      top
      width="100%"
    />
    <CardBody>
      
      <CardTitle tag="h5">
        {post?.title}
      </CardTitle>
      <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {post?.category.categoryTitle}
    </CardSubtitle>
      <CardText dangerouslySetInnerHTML={{__html:post?.content}}>
      </CardText>
      <CardText>
        <small className="text-muted">
          Posted By : <b>{post?.user.name}</b> on <b>{printDate(post?.uploadDate)}</b>
        </small>
      </CardText>
    </CardBody>
    <div className='image-container'>
        <img src={BASE_URL+ '/blogs/image/' + post?.picname} alt='Not in this blog! :(' ></img>
    </div>
  </Card>

  <Row className='my-4'>
    <Col md={
      {
        size:6,
        offset: 2
      }
    }>
      <h3>Comments :{ post? post.comments.length : 0}</h3>
      {
        post?.comments && post.comments.map((c,id)=>(
          <Card className='mt-2 border-0' key={id}>
            <span className='border primary rounded-pill' >Barun:</span> 
            <CardBody className='d-flex justify-content-between'>
              <CardText>
                {c?.content} on 
              </CardText>
              <CardText>{printDate(c?.commentDate)}</CardText>
            </CardBody>
          </Card>
        ))
      }
      <Card className='my-2 border-0'>
            <CardBody>
              <CardText>
               <Input type='textarea' placeholder='Enter you comment here!' onChange={(event)=>setComment({content:event.target.value})}
               value={comment.content}>

               </Input>
              </CardText>
              <Button onClick={addComment}>Add comment</Button>
            </CardBody>
          </Card>
    </Col>
  </Row>
        </Container> 
        
    
    
    </Base>
  )
}

export default PostPage