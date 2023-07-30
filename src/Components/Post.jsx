import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { checkAdmin, getCurrentUserDetail, isLoggedIn } from '../auth'
import { useContext } from 'react';
import userContext from '../context/userContext';

function Post({post={title:"Def title",content:"Def content"}, deletePost}) {
  const userContextData = useContext(userContext);
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(null)
  useEffect(() => {
    setUser(getCurrentUserDetail())
    setLogin(isLoggedIn())
  },[])

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString();
  };

  return (
    
    <Card className='border-0 shadow-sm mt-3'>
       
        <CardBody>
        <CardTitle>
            <h4>{post.title}</h4>
        </CardTitle>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,1000)}}>
            </CardText>
            <CardText
              style={{ fontStyle: "italic"  }}>
              <small className="text-muted">
                Posted By : <b>{post?.user.name}</b> on{" "}
                <b>{printDate(post?.uploadDate)}</b>
              </small>
            </CardText>
            <CardSubtitle
              className="mb-2 text-muted"
              
              style={{ fontStyle: "italic"   }}
            >
              {"Category : " + post?.category.categoryTitle + " | Views : " + (post?.view)/2}
            </CardSubtitle>
      
              <Link to={'/blogs/'+post.bid} className='btn btn-warning'>Read More</Link>
              {isLoggedIn()  && ((user && user.uid === post.user.uid) || checkAdmin()) && ( <Button onClick={() => deletePost(post)} color='danger' className='ms-2'>Delete</Button> )}
              {userContextData.user.login && (user && user.uid === post.user.uid ? <Button tag={Link} to={`/user/update_blog/${post.bid}`} color='warning' className='ms-2'>Update</Button> : '')}
        </CardBody>
    </Card>
    )
  
  
}

export default Post