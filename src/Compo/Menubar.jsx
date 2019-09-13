import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Menubar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="p-none sticky-top">
      <MDBNavbar dark expand="md" className="container innernav">
        <MDBNavbarBrand>
            <div className="logo">
                <img src='/images/logo/logo.png' width="150" height="50" alt="navgurukul-logo" />
            </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#Home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#About">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Blog">Blog</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Saral">Saral</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Alumini">Alumini</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Hire">Hire</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#Donate">Donate</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Menubar;