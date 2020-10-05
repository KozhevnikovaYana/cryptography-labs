import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavbarRx = () => {
    return (
        <Navbar className="navbar" responisve="true" variant="dark" expand="lg">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">Криптография</span></Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink to="/diffiHellman" className="nav-link ">
                        Диффи-Хеллман
                    </NavLink>
                    <NavLink to="/shamir" className="nav-link ">
                        Алгоритм Шамира
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;
