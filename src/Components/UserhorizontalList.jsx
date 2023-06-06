import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function UserhorizontalList() {
  return (
    <div>
        <ListGroup
  horizontal
>
  <ListGroupItem action={true} tag={Link} to="/user/profile_info">
    My Profile
  </ListGroupItem>
  <ListGroupItem action={true} tag={Link} to="/user/myblogs">
    My Blogs
  </ListGroupItem>
  <ListGroupItem>
    Morbi leo risus
  </ListGroupItem>
  <ListGroupItem>
    Porta ac consectetur ac
  </ListGroupItem>
  <ListGroupItem>
    Vestibulum at eros
  </ListGroupItem>
</ListGroup>
    </div>
  )
}

export default UserhorizontalList