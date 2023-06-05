import React from 'react'
import Base from '../Components/Base'
import userContext from '../context/userContext'

function Services() {
  return (
    <userContext.Consumer>
      {
        (user) => (
          <Base>
            <div>
              <h1>This is services page.</h1>
              <h3>Welcome : {user.name}</h3>
            </div>
        </Base>
        )
      }
    </userContext.Consumer>
  )
}

export default Services