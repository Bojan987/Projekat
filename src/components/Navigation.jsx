import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link } from 'react-router-dom';


export const Navigation = ({loggedPlayer})=>{
    return (
        <Navbar bg="dark" variant="dark" className='navigation ' sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="linkovi" to="/user">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link
                to="/"
                className="LogOut"
                onClick={() => localStorage.clear()}
              >
                Log out
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              Signed in as:{"  "}
              <Link to={`/user/${loggedPlayer.username}`} className="PRofile">
                {`${loggedPlayer.username}`}
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}