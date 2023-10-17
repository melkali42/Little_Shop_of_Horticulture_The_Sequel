import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Auth from '../utils/clientAuth';

// this logic will create a navbar that will allow users to navigate to different pages, it will be conditional based on user authentication
// using react-bootstrap components
export default function Navigation() {
    function authNav() {
        if (Auth.loggedIn()) {
            return(
                <Navbar bg='light' expand='lg'>
                    <Container className="justify-content-center">
                        <Nav variant='tabs'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                            <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <a href='/' onClick={() => Auth.logout()} style={{right:'100px'}}>Logout</a> {/* this will take the user back to the homepage and refresh the app */}
                            </Nav.Item> 
                        </Nav>
                    </Container>
                </Navbar>
            );
        } else {
            return(
                <Navbar bg='light' expand='lg'>
                    <Container className="justify-content-center">
                        <Nav variant='tabs'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            )
        }
    }

    return(
        <Container>
            {authNav()}
        </Container>
    )
}