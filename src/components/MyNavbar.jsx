import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";
import Sidebar from "../assets/Sidebar";

function MyNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
        <button className="btn toggle-btn" onClick={toggleSidebar}>
          <span
            className={`navbar-toggle-icon ${isSidebarOpen ? "open" : ""}`}
          />
        </button>
        <Navbar.Brand as={Link} to="/">
          blueHike
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto always-visible">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                Signup
              </NavDropdown.Item>
            </NavDropdown>
            <div className="toggle-icon">
              <DarkModeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}

export default MyNavbar;
