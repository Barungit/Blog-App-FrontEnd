import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'

function Post({post={title:"Def title",content:"Def content"}, deletePost}) {

  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(null)
  useEffect(() => {
    setUser(getCurrentUserDetail())
    setLogin(isLoggedIn())
  },[])

  return (
    <Card className='border-0 shadow-sm mt-3'>
       
        <CardBody>
        <CardTitle>
            <h4>{post.title}</h4>
        </CardTitle>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,1000)}}>
            </CardText>
            
              <Link to={'/blogs/'+post.bid} className='btn btn-warning'>Read More</Link>
              {isLoggedIn && (user && user.uid === post.user.uid ? <Button onClick={() => deletePost(post)} color='danger' className='ms-2'>Delete</Button> : '')}
        </CardBody>
    </Card>
  )
}

export default Post