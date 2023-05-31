import React from 'react'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

function Post({post={title:"Def title",content:"Def content"}}) {
  return (
    <Card className='border-0 shadow-sm mt-3'>
       
        <CardBody>
        <CardTitle>
            <h4>{post.title}</h4>
        </CardTitle>
            <CardText>
                
                    {post.content.substring(0,400)}...
                
            </CardText>
            <Button color='warning'>Read More</Button>
        </CardBody>
    </Card>
  )
}

export default Post