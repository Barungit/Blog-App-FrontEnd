import React from 'react'
import Base from '../Components/Base'
import userContext from '../context/userContext'

function Services() {
 // const myObjectString = localStorage.getItem();
 // Loop through all keys in the local storage
 
  return (
    
    <userContext.Consumer>
      {
        (object) => (
          <Base>
          
            <div>
              <h1>This is services page.</h1>
              <h3>Welcome : {object.user.login && object.user.data.user.name}</h3>
              <h5>ID : {object.user.data.user.uid}</h5>
              <h6>{"myObjectString"}</h6>
              
            </div>
        </Base>
        )
      }
    </userContext.Consumer>
  )
}

export default Services