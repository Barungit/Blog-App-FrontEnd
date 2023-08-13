import React, { useEffect, useState } from "react";
import Base from "../Components/Base";
import { useParams } from "react-router-dom";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import CategorySideMenu from "../Components/CategorySideMenu";
import {
  deletePostService,
  loadPostbyCategory,
} from "../services/post-service";
import { toast } from "react-toastify";
import Post from "../Components/Post";
import Breadcrumbs from "../Components/BreadCrumb";
import { getCategory } from "../services/category-service";

function Categories() {
  const [categoryName, setCategoryName] = useState(""); // New state to hold the category name
  const [posts, SetPosts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    console.log(categoryId);
    getCategory(categoryId).then((data) => {
      console.log(data);
      setCategoryName(data?.categoryTitle);
    })
     // Replace "categoryName" with the actual property name
    loadPostbyCategory(categoryId, 0, 10)
      .then((data) => {
        console.log(data);
        SetPosts(data);
        
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading Blogs!");
      });
  }, [categoryId]);

  const changePage = (pageNumber = 0, pageSize = 10) => {
    loadPostbyCategory(categoryId, pageNumber, pageSize)
      .then((data) => {
        console.log(data);
        SetPosts(data);
        window.scroll(0, 0);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading Blogs by pagination!");
      });
  };

  
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: categoryName , to: `/categories/${categoryId}`, dynamic: true, }, // Use the dynamically generated name
  ];

  function deletePost(post) {
    // deleteing a post
    console.log(post);

    deletePostService(post.bid)
      .then((res) => {
        console.log(res);
        toast.success("Blog is deleted!");

        let newBlogs = posts?.content.filter((b) => b.bid != post.bid);
        SetPosts({ ...posts, content: newBlogs });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in deleting this blog!");
      });
  }

  return (
    <Base>
      <div>
        <Row>
          <Col md={2} className="border">
            <CategorySideMenu />
          </Col>
          {/* BreadCrumb */}
         
          <Col md={10} className="border">
          <Breadcrumbs items={breadcrumbs} />
            <h3>Total Blogs : {posts?.totalElements}</h3>
            {posts?.content?.map((post) => (
              <Post post={post} key={post.bid} deletePost={deletePost} />
            ))}
            {posts.totalElements <= 0 ? <h4>No Blogs here!</h4> : ""}

            <Container className="mt-3">
              <Pagination aria-label="Page navigation example" size="lg">
                <PaginationItem disabled={posts.pageNumber == 0}>
                  <PaginationLink onClick={() => changePage(0)} first>
                    First
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem disabled={posts.pageNumber == 0}>
                  <PaginationLink
                    onClick={() => changePage(--posts.pageNumber)}
                    previous
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>

                {[...Array(posts.totalPages)].map((item, index) => (
                  <PaginationItem
                    onClick={() => changePage(index)}
                    active={index == posts.pageNumber}
                    key={index}
                  >
                    <PaginationLink>{index + 1}</PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem disabled={posts.lastPage}>
                  <PaginationLink
                    onClick={() => changePage(++posts.pageNumber)}
                    next
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={posts.lastPage}>
                  <PaginationLink
                    onClick={() => changePage(posts.totalPages - 1)}
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
  );
}

export default Categories;
