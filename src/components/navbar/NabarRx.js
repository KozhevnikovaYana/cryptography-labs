import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavbarRx = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">Криптография</span></Navbar.Brand></NavLink>
            <Nav>
                <NavDropdown title="Криптосистемы с открытым ключём" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink to="/diffiHellman" className="nav-link">
                            Алгоритм Диффи-Хеллмана
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/shamir" className="nav-link">
                            Алгоритм Шамира
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/elGamal" className="nav-link">
                            Алогритм Эль-Гамаля
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/rsa" className="nav-link">
                            Алогритм RSA
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Криптографические протоколы" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink to="/mentalPoker" className="nav-link">
                            Ментальный покер
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Электронная подпись" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/digitalSignatureRsa">
                        <NavDropdown.Item>
                            <NavLink to="/digitalSignatureRsa" className="nav-link">
                                rsa
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/digitalSignatureElGamal" className="nav-link">
                                Эль-Гамаль
                            </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};

export default NavbarRx;
