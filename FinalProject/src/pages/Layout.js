import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Layout = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="http://www.fathippie.net" target="_blank">Fat Hippie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./">Home</Nav.Link>

                            <NavDropdown.Divider />
                            <Nav.Link href="./productslist">Product List</Nav.Link>

                            <Nav.Link href="./createproducts">Create Products</Nav.Link>

                            <Nav.Link href="./createuser">Create User</Nav.Link>
                            <NavDropdown.Divider />
                            <NavDropdown bg="dark" title="Dropdown" id="basic-nav-dropdown">

                                <NavDropdown.Item href="./">Home</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="./createuser">Create User</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="./productslist">Product List </NavDropdown.Item>

                                <NavDropdown.Item href="./createproducts">Create Products</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
};

export default Layout;