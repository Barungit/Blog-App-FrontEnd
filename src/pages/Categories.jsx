import React, { useEffect, useState } from 'react'
import Base from '../Components/Base'
import { useParams } from 'react-router-dom'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import CategorySideMenu from '../Components/CategorySideMenu'
import NewFeed from '../Components/NewFeed'
import { loadPostbyCategory } from '../services/post-service'
import { toast } from 'react-toastify'
import Post from '../Components/Post'

function Categories() {

    const [posts,SetPosts]=useState([])
    
    const {categoryId} = useParams()
    useEffect(()=>{
        console.log(categoryId);
        loadPostbyCategory(categoryId,0,10).then(data=>{
            console.log(data)
            SetPosts(data)
        }).catch(error=>{
            console.log(error);
            toast.error("Error in loading Blogs!")
        })
    },[categoryId])

    const changePage=(pageNumber=0, pageSize=10)=>{
        loadPostbyCategory(categoryId,pageNumber,pageSize).then(data=>{
            console.log(data);
            SetPosts(data);
            window.scroll(0,0);
        }).catch(error=> {
            console.log(error);
            toast.error("Error in loading Blogs by pagination!")
        })
    }
    
    return (
    

    <Base>
        <div>
            <Row>
                    <Col md={2} className="border">
                        <CategorySideMenu />
                    </Col>

                    <Col md={10} className="border">
                        <h3>Total Blogs : {posts?.totalElements}</h3>
                            {
                            
                             posts?.content?.map((post)=>(
                        
                                 <Post post={post} key={post.bid} />
                                ))
                            }
                            {posts.totalElements<=0 ? <h4>No Blogs here!</h4> : ''}

<Container className='mt-3'>
                <Pagination
                aria-label="Page navigation example"
                size="lg"
                >
                <PaginationItem disabled={posts.pageNumber==0} >
                    <PaginationLink onClick={()=>changePage(0)}
                    first
                    >
                    First
                    </PaginationLink>
                </PaginationItem>

                

                <PaginationItem disabled={posts.pageNumber==0}>
                    <PaginationLink onClick={()=>changePage(--posts.pageNumber)}
                    previous
                    >
                    Previous
                    </PaginationLink>
                </PaginationItem>

                {
                        [...Array(posts.totalPages)].map((item,index)=>(
                            <PaginationItem onClick={()=>changePage(index)} active={index==posts.pageNumber} key={index}>
                                <PaginationLink >
                                    {index+1}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }

                <PaginationItem  disabled={posts.lastPage}>
                    <PaginationLink onClick={()=>changePage(++posts.pageNumber)}
                    next
                    >
                    Next
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={posts.lastPage}  >
                    <PaginationLink onClick={()=>changePage(posts.totalPages-1)}
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
    </Base>
  )
}

export default Categories