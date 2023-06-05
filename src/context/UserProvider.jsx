import React from 'react'
import userContext from './userContext'
import { useState } from 'react'
import { useEffect } from 'react'
function UserProvider({children}) {

    const [user,setUser]=useState({
        name:'Barun'
    })
    useEffect(()=>{
        setUser({
            name:"RadhaKrishna"
        })
    },[])

  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider