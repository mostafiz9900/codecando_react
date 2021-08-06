/* eslint-disable global-require */
import React from 'react';
import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => (
    <>
        <Nav>
            <NavLink to="/">
                <img src={require('../../images/logo.svg')} alt="logo" />
            </NavLink>

            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
);

export default Navbar;
