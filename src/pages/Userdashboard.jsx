import React from 'react'
import Base from '../Components/Base'
import Addpost from '../Components/Addpost'
import { Container } from 'reactstrap'
import userContext from '../context/userContext'
import { useContext } from 'react'
const Userdashboard = () => {
  const value = useContext(userContext);
  return (
    
    <Base>
    
    <Container className='my-3'>
      {/* {value.user.data.user.name}{value.user.data.user.roles[0].name} */}
    <Addpost />
    </Container>
    </Base>
  )
}

export default Userdashboard