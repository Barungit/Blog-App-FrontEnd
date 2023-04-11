import React from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
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

export default class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
       
        <Navbar color="dark" dark expand={"sm"} >
          <NavbarBrand tag={ReactLink} to="/">
            <img alt="logos"src={img1} style={{height: 40, width: 40}} />
            FunLearn</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='mx-3'>
                <NavLink tag={ReactLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem className='mx-3'>
                <NavLink tag={ReactLink} to="/signup">SignUp</NavLink>
              </NavItem >
              <NavItem className='mx-3'>
                <NavLink tag={ReactLink} to="/login">Login</NavLink>
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
          </Collapse>
          {/*<NavbarText style={{float: "right"}}>SuperBlogs</NavbarText>*/}
        </Navbar>
      </div>
    );
  }
}