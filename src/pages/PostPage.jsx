import React from 'react'
import Base from '../Components/Base'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
import { useEffect } from 'react'
import { loadPost } from '../services/post-service'
import { useState } from 'react'
import { BASE_URL } from '../services/helper'

function PostPage() {
    
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
        return new Date(numbers).toString()
    }

  return (
    <Base>
    <div class="container-fluid">
        <div class="row">
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
        </Container> 
        </div>
    </div>
    <div>
        
    </div>
    </Base>
  )
}

export default PostPage