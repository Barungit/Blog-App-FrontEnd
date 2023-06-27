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
  Input,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { useEffect } from "react";
import { createComment, loadPost, deleteComment as dC } from "../services/post-service";
import { useState } from "react";
import { BASE_URL } from "../services/helper";
import { toast } from "react-toastify";
import { isLoggedIn } from "../auth";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../Components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostPage() {
  const local = JSON.parse(localStorage.getItem("data"));
  const [comment, setComment] = useState({
    content: "",
  });
  const { bid } = useParams();
  const [post, setPost] = useState(null);

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

  const editComment=(event)=>{
    console.log("edit");
    console.log(event);
  }
  const deleteComment=(event)=>{
    console.log("DElete");
    dC(event).then((data)=>{
      console.log(data);
      setPost({
        ...post,
        comments: post.comments.filter(comment => comment.id !== event)
      });
      // SetCategories(categories.filter(cat => cat.categoryId !== cid));
      toast.success("Comment deleted Successfully");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Base>
      <Container>
        <Card className="my-2">
          
          <CardBody>
            <CardTitle
              tag="h1"
              style={{
                fontSize: "52px",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: 'center'
              }}
            >
              {post?.title}
            </CardTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h5"
              style={{ fontStyle: "italic"   }}
            >
              {"Category: " + post?.category.categoryTitle}
            </CardSubtitle>
            <CardText tag="h5"
              style={{ fontStyle: "italic"  }}>
              <small className="text-muted">
                Posted By : <b>{post?.user.name}</b> on{" "}
                <b>{printDate(post?.uploadDate)}</b>
              </small>
            </CardText>
            </div>
            <hr style={{ height: '2px', backgroundColor: '#e0e0e0', border: 'none', margin: '20px 0' }} />
            <CardImg
              alt="Not in this blog! :("
              src={BASE_URL + "/blogs/image/" + post?.picname}
              style={{
                height: 500,
                width: '50%',
                float: 'right'
              }}
            />
            <CardText
              dangerouslySetInnerHTML={{ __html: post?.content }}
            ></CardText>
            
          </CardBody>
          
          {/* <div className="image-container">
            <img
              src={BASE_URL + "/blogs/image/" + post?.picname}
              alt="Not in this blog! :("
            ></img>
          </div> */}
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
                <Card className="mt-2 p-2 border-2 border-dark bg-light" key={id}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', margin: '0px' }}>
                  <span >
                    {c?.commentAuthor}
                  </span><span >{printDate(c?.commentDate)}</span>
                  </div>
                  
                  <CardBody style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <p  className="overflow-auto">{c?.content} </p>
                  { isLoggedIn()  && local.user.uid==c.userId && (<UncontrolledDropdown>
      <DropdownToggle>
      <FontAwesomeIcon icon={faEllipsisVertical}/>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={(event)=>editComment(c.id)}>
          Edit
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={(event)=>deleteComment(c.id)}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown> )}
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
      </Container>
    </Base>
  );
}

export default PostPage;
