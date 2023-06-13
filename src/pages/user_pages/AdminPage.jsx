import React, { useContext } from 'react'
import Base from '../../Components/Base'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { useState } from 'react'
import { useEffect } from 'react'

import userContext from '../../context/userContext'


function AdminPage() {
  const [isAdmin,setIsAdmin]=useState(false)
  const value = useContext(userContext);
  useEffect(()=>{
    if("ROLE_ADMIN"===value?.user?.data?.user?.roles[0]?.name){
      console.log("You are admin!")
      setIsAdmin(true)
    }else{
      console.log("You are not admin!");
      
    }
  },[])
  return (
    <>
    
    {isAdmin && (<Base><h1>Hello! ADMIN!</h1>
    <Nav
  justified
  pills
>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Much Longer Nav Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
</Base>)}
</>
    
  )
}

export default AdminPage