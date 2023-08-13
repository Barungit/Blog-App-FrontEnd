import React from "react";
import Base from "../Components/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import userContext from "../context/userContext";
import { useEffect } from "react";
import {
  loadPost,
  updatePostService,
  uploadPostImage,
} from "../services/post-service";
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
  const [image, setImage] = useState(null);

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
    console.log(object);
    var local = JSON.parse(localStorage.getItem("data"));
    console.log(post?.user?.uid + " " + local.user.uid);
    if (post) {
      if (post?.user?.uid != local.user.uid) {
        toast.error("This is not your post!!!");
        navigate("/");
      }
    }
  }, [post]);

  const handleChange = (event, fieldname) => {
    console.log(post);
    setPost({
      ...post,
      [fieldname]: event.target.value,
    });
  };

  const handlefilechange = (event) => {
    console.log(event.target.files[0]);

    setImage(event.target.files[0]);
  };

  const updatePost = (event) => {
    event.preventDefault();
    console.log(post);
    if (post.title.trim() === "") {
      alert("Post title is required!!");
      return;
    }
    if (post.content.trim() === "") {
      alert("post content is required!!");
      return;
    }
    if (post.categoryId === "") {
      alert("Select some category!!");
      return;
    }
    updatePostService(
      { ...post, category: { categoryId: post.categoryId } },
      post.bid
    )
      .then((res) => {
        console.log(res);
        if (image != null) {
          uploadPostImage(post.bid, image)
            .then((data) => {
              toast.success("Image Uploaded!!");
            })
            .catch((error) => {
              toast.error("Error in uploading image!");
              console.log(error);
            });
        }
        toast.success("Blog Updated");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error is updating post!");
      });
  };

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
                  onChange={(event) => handleChange(event, "title")}
                />
              </div>

              <div className="my-3">
                <Label for="content">Blog Content</Label>
                <JoditEditor
                  ref={editor}
                  value={post.content}
                  tabIndex={1}
                  onChange={(newContent) =>
                    setPost({ ...post, content: newContent })
                  } // tabIndex of textarea
                />
              </div>

              {/*image*/}
              <div className="my-3">
                <Label for="image">Select Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handlefilechange}
                />
              </div>

              <div className="my-3">
                <Label for="category">Blog Category</Label>
                <Input
                  type="select"
                  id="category"
                  placeholder="Select Blog Category"
                  name="categoryId"
                  defaultValue={post.category}
                  onChange={(event) => handleChange(event, "categoryId")}
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
