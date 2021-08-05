import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav className="NavbarItems">
                <ul>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
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
                        }}
                    >
                        Posts
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
