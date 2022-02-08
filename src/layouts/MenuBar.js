import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="container" style={{ padding: "25px" }}>
      <Nav className="nav-items">
        <Nav.Item>
          <NavLink className="nav-link" exact to="/general">
            General
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/business">
            Business
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/health">
            Health
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/sports">
            Sports
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/entertainment">
            Entertainment
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/science">
            Science
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to="/technology">
            Technology
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MenuBar;
