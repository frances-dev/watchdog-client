import React, { useContext } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import 'firebase/auth';
import { handleSignOut, isLoggedIn, loggedInInfo } from '../../../Login/loginManager';



const Navbars = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // is logged in
    const isLogged = isLoggedIn();

    // Handle sign out button
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()

    return (
        <div>
            {/* Navbar Section */}
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container className="nav-img nav-container d-flex">
                <Navbar.Brand>
                    <Link style={{ textDecoration: 'none' }} to="/home"><img src="https://i.ibb.co/W23xybj/98px-Watch-OS-Logo-svg.png" className="nav-img mt-0 align-items-center" /></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav align-items-center" />
                <Navbar.Collapse id="responsive-navbar-nav align-items-center">
                    <Nav className="m-auto">

                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Home <span className="sr-only">(current)</span></p>
                        </li></Link>

                        <Link style={{ textDecoration: 'none' }} to="/explore-services"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Explore</p>
                        </li></Link>

                        <Link style={{ textDecoration: 'none' }} to="/reviews"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Reviews</p>
                        </li></Link>

                        <Link style={{ textDecoration: 'none' }} to="/contact-us"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark">Contact Us</p>
                        </li></Link>
                    </Nav>
                    <Nav>
                                                {/* Dashboard Button */}
                                                <Link to="/admin_user"> <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="btn btn-warning margin nav-item px-4 text-dark bg-light">
                            Dashboard
                        </button></Link>

                        {
                            loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="text nav-item px-4 bg-light text-dark" onClick={signOut}>Sign Out <br/>{loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name 
                                : loggedInUser.displayName || loggedUser.displayName} </button> :
                                <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item px-4 bg-light text-dark btn btn-warning">Sign In</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Navbars;