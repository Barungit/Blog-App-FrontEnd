import React from "react";
import Base from "../Components/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import userContext from "../context/userContext";
import { useEffect } from "react";
import { loadPost, updatePostService } from "../services/post-service";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  Container,
  Input,
  Label,
} from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import JoditEditor from "jodit-react";
import { useRef } from "react";

function UpdateBlog() {
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const { bid } = useParams();
  const object = useContext(userContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });

    loadPost(bid)
      .then((data) => {
        setPost({ ...data, category: data.category.categoryId });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading the post!");
      });
  }, []);

  useEffect(() => {
    console.log("First");
    console.log(object)
    var local = JSON.parse(localStorage.getItem('data'));
    console.log(post?.user?.uid + " " + local.user.uid)
    if (post) {
      if (post?.user?.uid != local.user.uid) {
        toast.error("This is not your post!!!");
        navigate("/");
      }
    }
  }, [post]);

  const handleChange = (event, fieldname) => {
    console.log(post)
    setPost({
      ...post,
      [fieldname]: event.target.value,
    });
  };

  const updatePost=(event)=>{
    event.preventDefault()
    console.log(post)
    updatePostService({...post,category: { categoryId:post.categoryId}}, post.bid)
    .then(res => {
      console.log(res)
      toast.success("Blog Updated")
    })
    .catch(error => {
      console.log(error);
      toast.error("Error is updating post!")
    })
  }

  const updateHTML = () => {
    return (
      <div className="wrapper">
        <Card className="shadow">
          <CardBody>
            <h3>Fill below to update the blog</h3>
            {/*JSON.stringify(post)*/}
            <Form onSubmit={updatePost}>
              <div className="my-3">
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter Blog Title here"
                  name="title"
                  value={post.title}
                  onChange={(event)=>handleChange(event,'title')}
                  />
              </div>

              <div className="my-3">
                <Label for="content">Blog Content</Label>
                {/* <Input type='textarea' id='content' placeholder='Enter Blog content here'
                                style={{height:'300px'}}></Input> */}
                <JoditEditor
                  ref={editor}
                  value={post.content}
                  tabIndex={1}
                  onChange={newContent => setPost({...post, content: newContent})} // tabIndex of textarea
                />
              </div>

              {/*image*/}
              <div className="my-3">
                <Label for="image">Select Image</Label>
                <Input id="image" name="image" type="file" accept="image/*" />
              </div>


              <div className="my-3">
                <Label for="category">Blog Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Select Blog Category"
                  name="categoryId"
                  value={post.category}
                  onChange={(event)=> handleChange(event,'categoryId')}
                >
                  <option disabled value={0}>
                    --Select some category!--
                  </option>
                  {categories.map((category) => (
                    <option
                      value={category.categoryId}
                      key={category.categoryId}
                    >
                      {category.categoryTitle}
                    </option>
                  ))}
                </Input>
              </div>
              <Container className="text-center">
                <div>
                  <Button color="warning" type="submit">
                    Update Blog
                  </Button>
                  <Button color="danger" type="reset" className="ms-2">
                    Reset
                  </Button>
                </div>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <Base>
      <Container>{post && updateHTML()}</Container>
    </Base>
  );
}

export default UpdateBlog;
