import React from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/videos/logo.gif';
import { LogoGithub, LogoLinkedin, Mail, LogoBehance, LogoInstagram } from 'react-ionicons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="flex-container">
                <Link to="/" className="to-home">
                    <img src={logo} className="logo" />
                </Link>
            </div>
            <Navbar expand="lg">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/experience">Professional Experience</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/skills">Skills</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/work">My Work</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Download Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <div className="social-icons">
                <LogoGithub
                    height="25px"
                    width="25px"
                />
                <LogoLinkedin
                    height="25px"
                    width="25px"
                />
                <Mail
                    height="25px"
                    width="25px"
                />
                <LogoInstagram
                    height="25px"
                    width="25px"
                />
                <LogoBehance
                    height="25px"
                    width="25px"
                />
            </div>

        </div>
    );
}

export default Sidebar;
