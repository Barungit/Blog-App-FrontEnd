import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import img1 from '../images/pi.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  NavbarText} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';

 const CustomNavBar2 = () => {
  let navigate=useNavigate()
  const [isOpen,setIsOpen] = useState(false)
  const [login,setLogin]=useState(false)
  const [user,setUser]=useState(undefined)

  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())
  },[login])

  const logout=()=>{
    doLogout(()=>{
      //logged out
      setLogin(false)
      navigate("/")
    })
  }

    return (
      <div>
       
        <Navbar 
          color="dark" 
          dark expand={"sm"} 
          fixed=""
          className='px-3'>

          <NavbarBrand tag={ReactLink} to="/">
            <img alt="logos"src={img1} style={{height: 40, width: 40}} />
            FunLearn
          </NavbarBrand>

          <NavbarToggler onClick={()=> setIsOpen(!isOpen)} />
          
          <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem className='mx-3'>
          <NavLink tag={ReactLink} to="/">New Feeds</NavLink>
            </NavItem>
            <NavItem className='mx-3'>
                <NavLink tag={ReactLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem className='mx-3'>
                <NavLink tag={ReactLink} to="/services">Services</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav navbar>
            
              {
                login && (
                  <>
                 
                  <NavItem className='mx-3'>
                  <NavLink onClick={logout}>Logout</NavLink>
                  </NavItem >
                  <NavItem className='mx-3'>
                  <NavLink tag={ReactLink} to="/user/profile_info">{user.name}</NavLink>
                  </NavItem >
                  <NavItem className='mx-3'>
                  <NavLink tag={ReactLink} to="/user/dashboard">{user.email}</NavLink>
                  </NavItem >
                  </>
                )
              }

              {
                !login && (
                  <>
                  <NavItem className='mx-3'>
                  <NavLink tag={ReactLink} to="/signup">SignUp</NavLink>
              </NavItem >
              <NavItem >
                  <NavLink tag={ReactLink} to="/login">Login</NavLink>
              </NavItem>
                  </>
                )
              }
            </Nav>
          </Collapse>
          {/*<NavbarText style={{float: "right"}}>SuperBlogs</NavbarText>*/}
        </Navbar>
      </div>
    );
  
}
export default CustomNavBar2;