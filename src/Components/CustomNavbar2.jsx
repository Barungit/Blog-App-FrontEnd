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
  NavbarText,
  Form,
  Input,
  Button,
  Row,
  Col} from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import userContext from '../context/userContext';
import { useContext } from 'react';
import CheckTokenExpiration from './CheckTokenExpiration';

 const CustomNavBar2 = () => {
  const userContextData = useContext(userContext);
  let navigate=useNavigate()
  const [isOpen,setIsOpen] = useState(false)
  const [login,setLogin]=useState(false)
  const [user,setUser]=useState(undefined)
  const [isAdmin,setIsAdmin]=useState(false)
  const [keywords, setKeywords]=useState("")

  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())
    if("ROLE_ADMIN"===user?.roles[0]?.name){
      console.log("You are admin!")
      setIsAdmin(true)
    }else{
      console.log("You are not admin!")
    }
  },[login])

  const logout=()=>{
    doLogout(()=>{
      //logged out
      setLogin(false)
      setIsAdmin(false)
      userContextData.setUser({
        data: null,
        login: false
      })
      navigate("/")
    })
  }

  const handleSearch=(event)=>{
    event.preventDefault();
    console.log(keywords)
    navigate("/blogs/search/"+keywords)
    setKeywords("");
  }

    return (
      <div>
       <CheckTokenExpiration />
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
          <NavLink tag={ReactLink} to="/blogs">New Feeds</NavLink>
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

              {/* seach bar in nav bar */}
              <Nav>
                <Form onSubmit={handleSearch}>
                  <Row>
                    <Col><Input style={{width:"350px"}} type='text' placeholder='Search here...' onChange={(event)=> {setKeywords(event.target.value)}} value={keywords}></Input></Col>
                    <Col><Button type='submit' >Search</Button></Col>
                  </Row>
                  
                  
                </Form>
              </Nav>
            
              {
                login && (
                  <>
                  {isAdmin && (<NavItem className='mx-3'>
                  <NavLink tag={ReactLink} to="/user/admin/home">Admin</NavLink>
                  </NavItem >)}
                  
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