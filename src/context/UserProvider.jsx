import React from 'react'
import userContext from './userContext'
import { useState } from 'react'
import { useEffect } from 'react'
function UserProvider({children}) {

    const [user,setUser]=useState({
        id:1,
        name:'USER JI'
    })
    /*useEffect(()=>{
        setUser({
            name:"BARUN"
        })
    },[])*/

  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider