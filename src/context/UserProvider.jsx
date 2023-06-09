import React from 'react'
import userContext from './userContext'
import { useState } from 'react'
import { useEffect } from 'react'
function UserProvider({children}) {

    const [user,setUser]=useState({
        data:{},
        login:false
    })
    /*useEffect(()=>{
        setUser({
            name:"BARUN"
        })
    },[])*/

  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider