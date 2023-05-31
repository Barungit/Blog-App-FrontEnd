import React from 'react'
import { useEffect } from 'react'
import { loadAllPost } from '../services/post-service'
import { useState } from 'react'
import { Row,Col } from 'reactstrap'
import Post from './Post'

function NewFeed() {

    const [postContent,setPostContent]=useState(null)

    useEffect(()=>{
        //load all blogs from the server
        loadAllPost().then((data)=>{
            console.log(data);
            setPostContent(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])


  return (
    <div className="container fluid">
       <Row>
            <Col md={
                {
                    size:10,
                    offset:1
                }
            }>

                <h3>Total Blogs : {postContent?.totalElements}</h3>
                
                {
                    postContent?.content?.map((post)=>(
                        
                        <Post post={post} key={post.bid} />
                    ))
                }
                
            </Col>
       </Row>
    </div>
  )
}

export default NewFeed