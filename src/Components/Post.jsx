import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

function Post({post={title:"Def title",content:"Def content"}}) {
  return (
    <Card className='border-0 shadow-sm mt-3'>
       
        <CardBody>
        <CardTitle>
            <h4>{post.title}</h4>
        </CardTitle>
            <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,1000)}}>
            </CardText>
            
              <Link to={'/blogs/'+post.bid} className='btn btn-warning'>Read More</Link>
              
        </CardBody>
    </Card>
  )
}

export default Post