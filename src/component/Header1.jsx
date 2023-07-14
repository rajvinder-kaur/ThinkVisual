import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="black" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">THINK VISUAL</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#courses">Courses</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;