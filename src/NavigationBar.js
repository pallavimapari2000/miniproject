import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">QuickRecharge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Signin'}>
                                <Nav.Link>Create an account</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/Login'}>
                                <Nav.Link>Log-in</Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to={'/Contacthere'}>
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to={'/FAQ'}>
                                <Nav.Link>FAQ</Nav.Link>
                            </LinkContainer>  
                            {/* <LinkContainer to={'/Jio'}>
                                <Nav.Link>Jio</Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to={'/Airtel'}>
                                <Nav.Link>Airtel</Nav.Link>
                            </LinkContainer>   */}
                             {/* <LinkContainer to={'/Vi'}>
                                <Nav.Link>Vi</Nav.Link>
                            </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}