import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function UserhorizontalList() {
  return (
    <div>
        <ListGroup
  horizontal
> <ListGroupItem action={true} tag={Link} to="/user/dashboard">
   Add Blog
  </ListGroupItem>
  
  <ListGroupItem action={true} tag={Link} to="/user/myblogs">
    My Blogs
  </ListGroupItem>
  <ListGroupItem action={true} tag={Link} to="/user/profile_info">
    My Profile
  </ListGroupItem>
  <ListGroupItem action={true} tag={Link} to="/user/password">
    Change Password
  </ListGroupItem>
  
</ListGroup>
    </div>
  )
}

export default UserhorizontalList