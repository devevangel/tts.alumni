import React, { useState, Fragment } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
} from "mdbreact";

const Menu = ({ history }) => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <MDBNavbar color='light green' dark expand='md'>
      <MDBNavbarBrand>
        <strong className='white-text'>TTS</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id='navbarCollapse3' isOpen={open} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to='/'>Alumni</MDBNavLink>
          </MDBNavItem>
          <Fragment>
            {/* <MDBNavItem>
              <MDBNavLink to='/addname'>AddName</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to='/join'>Join</MDBNavLink>
            </MDBNavItem>
          </Fragment>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className='md-form my-0'>
                <input
                  className='form-control mr-sm-2'
                  type='text'
                  placeholder='Search by name'
                  aria-label='Search'
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Menu;
