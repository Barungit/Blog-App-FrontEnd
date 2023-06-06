import React from 'react'
import { useEffect } from 'react'
import { loadAllPost } from '../services/post-service'
import { useState } from 'react'
import { Row,Col, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import Post from './Post'

function NewFeed() {

    const [postContent,setPostContent]=useState({
        content:[],
        totalElements:'',
        totalPages:'',
        pageSize: '',
        lastPage:false,
        pageNumber:''
    })

    useEffect(()=>{
        //load all blogs from the server
        loadAllPost(0,10).then((data)=>{
            console.log(data);
            setPostContent(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const changePage=(pageNumber=0, pageSize=10)=>{
        loadAllPost(pageNumber,pageSize).then(data=>{
            console.log(data);
            setPostContent(data);
            window.scroll(0,0);
        }).catch(error=> {
            console.log(error);
        })
    }


  return (
    <div className="container fluid">
       <Row>
            <Col md={
                {
                    size:12,
                    offset:0
                }
            }>
            
                <h3>Total Blogs : {postContent?.totalElements}</h3>
                
                {
                    postContent?.content?.map((post)=>(
                        
                        <Post post={post} key={post.bid} />
                    ))
                }

                    

                <Container className='mt-3'>
                <Pagination
                aria-label="Page navigation example"
                size="lg"
                >
                <PaginationItem disabled={postContent.pageNumber==0} >
                    <PaginationLink onClick={()=>changePage(0)}
                    first
                    >
                    First
                    </PaginationLink>
                </PaginationItem>

                

                <PaginationItem disabled={postContent.pageNumber==0}>
                    <PaginationLink onClick={()=>changePage(--postContent.pageNumber)}
                    previous
                    >
                    Previous
                    </PaginationLink>
                </PaginationItem>

                {
                        [...Array(postContent.totalPages)].map((item,index)=>(
                            <PaginationItem onClick={()=>changePage(index)} active={index==postContent.pageNumber} key={index}>
                                <PaginationLink >
                                    {index+1}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }

                <PaginationItem  disabled={postContent.lastPage}>
                    <PaginationLink onClick={()=>changePage(++postContent.pageNumber)}
                    next
                    >
                    Next
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={postContent.lastPage}  >
                    <PaginationLink onClick={()=>changePage(postContent.totalPages-1)}
                    last
                    >
                    Last
                    </PaginationLink>
                </PaginationItem>
                </Pagination>
                </Container>                
            </Col>
       </Row>
    </div>
  )
}

export default NewFeed