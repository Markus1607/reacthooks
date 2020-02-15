import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = props => {
  const { data, dispatch } = props;

  function sortByStrength() {
    const sortedData = data.sort((a, b) => (a.abv > b.abv ? 1 : -1));
    dispatch({ type: "sortByStrength", payload: sortedData });
  }

  function sortByName() {
    const sortedData = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    dispatch({ type: "sortByName", payload: sortedData });
  }

  return (
    <div style={navContainer}>
      <Navbar expand="lg">
        <Navbar.Brand href="#">Punk Beer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ml-auto">
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={sortByName}>Name</NavDropdown.Item>
              <NavDropdown.Item onClick={sortByStrength}>
                Strength
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const navContainer = {
  margin: "40px auto",
  backgroundColor: "#e3f2fd"
};

export default Header;
