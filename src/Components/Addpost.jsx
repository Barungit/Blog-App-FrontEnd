import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { loadAllCategories } from "../services/category-service";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import {
  createPost as doCreatePost,
  uploadPostImage,
} from "../services/post-service";
import { getCurrentUserDetail } from "../auth";
import { toast } from "react-toastify";

function Addpost() {
  const editor = useRef(null);
  const [image, setImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    setUser(getCurrentUserDetail());

    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //fiel changed function
  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, content: data });
  };
  //create post function
  const createPost = (event) => {
    event.preventDefault();
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

    //submit the form on server
    post["userId"] = user.uid;
    doCreatePost(post)
      .then((data) => {
        console.log(data);
        if (image != null) {
          uploadPostImage(data.bid, image)
            .then((data) => {
              toast.success("Image Uploaded!!");
            })
            .catch((error) => {
              toast.error("Error in uploading image!");
              console.log(error);
            });
        }
        toast.warning("Blog sent for approval!");
        console.log(post);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  const handlefilechange = (event) => {
    console.log(event.target.files[0]);

    setImage(event.target.files[0]);
  };
  return (
    <div className="wrapper">
      <Card className="shadow">
        <CardBody>
          <CardHeader className="bg-primary">
            <h3 className="text-white">Fill below to add blog</h3>
          </CardHeader>

          {/*JSON.stringify(post)*/}
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter Blog Title here"
                name="title"
                onChange={fieldChanged}
              ></Input>
            </div>

            <div className="my-3">
              <Label for="content">Blog Content</Label>
              <JoditEditor
                ref={editor}
                value={post.content}
                tabIndex={1} // tabIndex of textarea
                onChange={contentFieldChanged}
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
                onChange={fieldChanged}
                defaultValue={0}
              >
                <option disabled value={0}>
                  --Select some category!--
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>
            <Container className="text-center">
              <div>
                <Button color="warning" type="submit">
                  Post Blog
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
}

export default Addpost;
