import React from 'react'
import Base from '../../Components/Base'
import UserhorizontalList from '../../Components/UserhorizontalList'
import CategorySideMenu from '../../Components/CategorySideMenu'
import NewFeed from '../../Components/NewFeed'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import { loadPostbyUser } from '../../services/post-service'
import { useState } from 'react'
import { useEffect } from 'react'
import Post from '../../Components/Post'
import { getCurrentUserDetail } from '../../auth'

function MyBlogs() {

    const [postContent,setPostContent]=useState({
        content:[],
        totalElements:'',
        totalPages:'',
        pageSize: '',
        lastPage:false,
        pageNumber:''
    })

    useEffect(()=>{
      loadPostbyUser(getCurrentUserDetail().uid,0,10).then((data)=>{
            console.log(data);
            setPostContent(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const changePage=(pageNumber=0, pageSize=10)=>{
      loadPostbyUser(getCurrentUserDetail().uid,pageNumber,pageSize).then(data=>{
          console.log(data);
          setPostContent(data);
          window.scroll(0,0);
      }).catch(error=> {
          console.log(error);
      })
  }

  return (
    <Base>
        <UserhorizontalList />
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
    
    
    </Base>

    
  )
}

export default MyBlogs