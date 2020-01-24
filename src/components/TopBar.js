import React from 'react';
import {Container, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import profilePic from '../IMG_20191207_192646.jpg';
import profile from '../profile.json'

class TopBar extends React.Component {
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
      <Navbar dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={profilePic} className="profile-pic" alt="Lucas Díaz"/>
            <span>{profile.name}</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;