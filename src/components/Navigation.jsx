import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { Link } from "react-router-dom";

export const Navigation = ({ loggedPlayer }) => {
  return (
    <Navbar
      animation='false'
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigation "
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Link className="linkovi" to="/user">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse animation='false' className="justify-content-end ">
          <NavDropdown title="games" id="collasible-nav-dropdown" className='linkovi'>
            
              <Link to='/JuggernautHunt' className='collapseNav'>
              Jugernaut Hunt
              </Link>
              
            
            <Link to='/HeroHunt' className='collapseNav'>
              Hero Hunt
              </Link>
            
          </NavDropdown>

          <Navbar.Text>
            Signed in as:{"  "}
            <Link to={`/user/${loggedPlayer.username}`} className="Profile">
              {`${loggedPlayer.username}`}
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link
              to="/"
              className="LogOut"
              onClick={() => localStorage.clear()}
            >
              Log out
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
