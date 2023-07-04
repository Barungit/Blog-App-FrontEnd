import React from 'react'
import Base from '../../Components/Base'
import CategorySideMenu from '../../Components/CategorySideMenu'
import NewFeed from '../../Components/NewFeed'
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import { deletePostService, loadPostbyUser } from '../../services/post-service'
import { useState } from 'react'
import { useEffect } from 'react'
import Post from '../../Components/Post'
import { getCurrentUserDetail } from '../../auth'
import { toast } from 'react-toastify'

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
      loadBlogData()
    },[])

    function loadBlogData(){
        loadPostbyUser(getCurrentUserDetail().uid,0,10).then((data)=>{
            console.log(data);
            setPostContent(data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const changePage=(pageNumber=0, pageSize=10)=>{
      loadPostbyUser(getCurrentUserDetail().uid,pageNumber,pageSize).then(data=>{
          console.log(data);
          setPostContent(data);
          window.scroll(0,0);
      }).catch(error=> {
          console.log(error);
      })
  }

  function deletePost(post){
    // deleteing a post
    console.log(post)

    deletePostService(post.bid).then(res => {
        console.log(res)
        toast.success("Blog is deleted!")
        //let newBlogs = postContent.content.filter(b => b.bid!=post.bid)
           // setPostContent({newBlogs})
        loadBlogData()
    }).catch(error => {
        console.log(error)
        toast.error("Error in deleting this blog!")
    })

  }

  return (
    <Base>
        
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
                        
                        <Post post={post} key={post.bid} deletePost={deletePost} />
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