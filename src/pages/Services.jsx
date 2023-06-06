import React from 'react'
import Base from '../Components/Base'
import userContext from '../context/userContext'

function Services() {
 // const myObjectString = localStorage.getItem();
 // Loop through all keys in the local storage
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const valueString = localStorage.getItem(key.user);
  const value = JSON.parse(valueString);
  console.log(`${key}:`, value ,i);
}
  return (
    
    <userContext.Consumer>
      {
        (user) => (
          <Base>
          
            <div>
              <h1>This is services page.</h1>
              <h3>Welcome : {user.name}</h3>
              <h6>{"myObjectString"}</h6>
              
            </div>
        </Base>
        )
      }
    </userContext.Consumer>
  )
}

export default Services