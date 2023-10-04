import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";
import {
  BsFillCartCheckFill,
  BsHouseDoorFill,
  BsPersonPlusFill,
  BsPersonFillLock,
} from "react-icons/bs";

function MyNavbar() {
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <Navbar
        className={`nabvar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
        style={{
          backgroundColor: isDarkMode ? "#05131f" : "#ffffff",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          top: 0,
        }}
        expand="lg">
        <Navbar.Brand as={Link} to="/">
          blueHike
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto always-visible">
            <Nav.Link as={Link} to="/">
              <BsHouseDoorFill className="icon" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <BsFillCartCheckFill className="icon" />
              Cart
            </Nav.Link>
            <NavDropdown title=" Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                <BsPersonFillLock className="icon" />
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                <BsPersonPlusFill className="icon" />
                Signup
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="toggle-icon">
            <DarkModeToggle />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
