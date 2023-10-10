import React, { useContext } from "react";
import "./Navbars.css";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shoppingCart.png";
import { CartContext } from "../context/CartContext";

// import onlineShopping from "../images/onlineShopping.png";

const Navbars = () => {

 
  const { cartItems } = useContext(CartContext);
  // Calculate the total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce((total, amount) => total + amount, 0);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-detail">
          <Link to="/">
            <span className="brand-name">ROOTS</span>
            {/* <img src={onlineShopping} alt="Home-page-logo" /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav.Link href="#action1">
            <Link to="/store" className="nav-link-text">
              Store
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="nav-link-text">
            <Link to="/infosection" className="nav-link-text">
              Info-Section
            </Link>
          </Nav.Link>
          <NavDropdown
            title="User-activities"
            id="basic-nav-dropdown"
            className="nav-link-text"
          >
            <NavDropdown.Item href="#action/3.1">
              <Link to="/post" className="nav-link-text">
                Post
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/put" className="nav-link-text">
                Put
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Link to="description" className="nav-link-text">
                See your products
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Link to="/delete" className="nav-link-text">
                Delete
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2" className="nav-link-text">
            <Link to="/cartpage" className="nav-link-text">
              <img src={shoppingCart} alt="cart pic" />
              <Badge variant="secondary">{totalCartItems}</Badge>
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
