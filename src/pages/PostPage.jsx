import React from "react";
import Base from "../Components/Base";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { useEffect } from "react";
import {
  createComment,
  loadPost,
  deleteComment as dC,
  updateComment,
} from "../services/post-service";
import { useState } from "react";
import { BASE_URL } from "../services/helper";
import { toast } from "react-toastify";
import { checkAdmin, isLoggedIn } from "../auth";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategorySideMenu from "../Components/CategorySideMenu";
import Breadcrumbs from "../Components/BreadCrumb";

function PostPage() {
  const local = JSON.parse(localStorage.getItem("data"));
  const [comment, setComment] = useState({
    content: "",
  });
  const [updatedComment, setUpdateComment] = useState({
    content: "",
  });
  const { bid } = useParams();
  const [post, setPost] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState({
    open: false,
    id: 0,
    content: "",
  });
  const [updateButton, setUpdateButton] = useState(false);
  useEffect(() => {
    //load the post
    loadPost(bid)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString();
  };
  const addComment = () => {
    if (!isLoggedIn()) {
      toast.error("Login to do comment!");
      return;
    }
    if (comment.content.trim() === "") {
      return;
    }
    console.log("Here is " + local.user.uid);

    createComment(comment, post.bid, local.user.uid)
      .then((data) => {
        console.log(data);
        toast.success("You commented on this blog!");

        setPost({
          ...post,
          comments: [...post.comments, data],
        });
        console.log(post);
        setComment({
          content: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editComment = (event) => {
    setShowAddDialog({
      open: true,
      id: event.id,
      content: event.content,
    });
  };

  const handleEditedComment = (e) => {
    setUpdateComment({
      content: e.target.value,
    });

    setUpdateButton(true);
  };
  const handleSubmitofEditComment = (e) => {
    e.preventDefault();
    if (updatedComment.content.trim() === "") {
      toast.warning("Comment Cannot be empty!");
      return;
    }
    updateComment(showAddDialog.id, updatedComment)
      .then((data) => {
        console.log(data);
        const updatedComments = post.comments.map((c) => {
          if (c.id === showAddDialog.id) {
            return data; // Replace the comment with updated data
          }
          return c; // Keep other comments unchanged
        });

        setPost({
          ...post,
          comments: updatedComments,
        });
        setShowAddDialog(false);
        toast.success("Comment updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteComment = (event) => {
    console.log("DElete");
    dC(event)
      .then((data) => {
        console.log(data);
        setPost({
          ...post,
          comments: post.comments.filter((comment) => comment.id !== event),
        });
        // SetCategories(categories.filter(cat => cat.categoryId !== cid));
        toast.success("Comment deleted Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'New Feeds', to: '/blogs' },
  ];

  return (
    <Base>
     <div>
      
        <Row>
          <Col md={2} className="border">
            <CategorySideMenu />
          </Col>
          {/* BreadCrumb */}
         
          <Col md={10} className="border">
         {/* BreadCrumb */}
      <Breadcrumbs items={breadcrumbs} />
   
      
        <Card className="my-2">
          <CardBody>
            <CardTitle
              tag="h1"
              style={{
                fontSize: "52px",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              {post?.title}
            </CardTitle>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h5"
                style={{ fontStyle: "italic" }}
              >
                {"Category: " + post?.category.categoryTitle}
              </CardSubtitle>
              <CardText tag="h5" style={{ fontStyle: "italic" }}>
                <small className="text-muted">
                  Posted By : <b>{post?.user.name}</b> on{" "}
                  <b>{printDate(post?.uploadDate)}</b>
                </small>
              </CardText>
            </div>
            <hr
              style={{
                height: "2px",
                backgroundColor: "#e0e0e0",
                border: "none",
                margin: "20px 0",
              }}
            />
            {post?.picname && (
              <CardImg
                alt="Not in this blog! :("
                src={BASE_URL + "/blogs/image/" + post?.picname}
                style={{
                  height: 500,
                  width: "50%",
                  float: "right",
                }}
              />
            )}
            <CardText
              dangerouslySetInnerHTML={{ __html: post?.content }}
            ></CardText>
          </CardBody>
        </Card>

        <Row className="my-4">
          <Col
            md={{
              size: 6,
              offset: 2,
            }}
          >
            <h3>Comments :{post ? post.comments.length : 0}</h3>
            {post?.comments &&
              post.comments.map((c, id) => (
                <Card
                  className="mt-2 p-2 border-2 border-dark bg-light"
                  key={id}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "0px",
                    }}
                  >
                    <span>{c?.commentAuthor}</span>
                    <span>{printDate(c?.commentDate)}</span>
                  </div>

                  <CardBody
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="overflow-auto">{c?.content} </p>
                    {isLoggedIn() &&
                      (local.user.uid == c.userId || checkAdmin()) && (
                        <UncontrolledDropdown>
                          <DropdownToggle>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={(event) => editComment(c)}>
                              Edit
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                              onClick={(event) => deleteComment(c.id)}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      )}
                  </CardBody>
                </Card>
              ))}
            <Card className="my-2 border-0">
              <CardBody>
                <CardText>
                  <Input
                    type="textarea"
                    placeholder="Enter you comment here!"
                    onChange={(event) =>
                      setComment({ content: event.target.value })
                    }
                    value={comment.content}
                  ></Input>
                </CardText>
                <Button onClick={addComment}>Add comment</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {showAddDialog.open && (
          <Modal isOpen={true} toggle={() => setShowAddDialog(false)}>
            <ModalHeader>Update Comment</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmitofEditComment}>
                <Label for="new comment">
                  Edit Comment : {showAddDialog.id}
                </Label>
                <Input
                  type="textarea"
                  id="new comment"
                  defaultValue={showAddDialog.content}
                  // value={}
                  onChange={handleEditedComment}
                />
                {updateButton && (
                  <Button type="submit" color="primary">
                    Update
                  </Button>
                )}
                <Button
                  type="button"
                  className="my-2"
                  color="secondary"
                  onClick={() => setShowAddDialog(false)}
                >
                  Cancel
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        )}
      
      </Col>
    </Row>
    </div>
    </Base>
  );
}

export default PostPage;
