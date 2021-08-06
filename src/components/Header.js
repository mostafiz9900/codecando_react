import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink, NavMenu } from 'react-router-dom';
import '../App.css';

export default function Header() {
    return (
        <header>
            <nav>
                <NavMenu>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                            paddingLeft: '20px',
                        }}
                    >
                        Home
                    </NavLink>
                </NavMenu>

                <NavLink
                    exact
                    to="/about"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        textAlign: 'left',
                        paddingLeft: '20px',
                    }}
                >
                    About
                </NavLink>

                <NavLink
                    exact
                    to="/services"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        paddingLeft: '20px',
                    }}
                >
                    Services
                </NavLink>

                <NavLink
                    exact
                    to="/posts/js"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                        paddingLeft: '20px',
                    }}
                >
                    Posts
                </NavLink>
            </nav>
        </header>
    );
}
