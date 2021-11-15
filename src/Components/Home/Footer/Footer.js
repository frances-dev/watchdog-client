import React from 'react';
import facebook from '../../../logos/Vector.png';
import instagram from '../../../logos/Vector-1.png';
import linkedIn from '../../../logos/Vector-2.png';
import youTube from '../../../logos/Vector-3.png';

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <p>H#340 (4th Floor), Road #24, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                            Phone: 018XXXXXXXX <br />
                            E-mail: info@company.com</p>
                    </div>

                    <div className="col-md-2 col-6 mt-5">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>About</li>
                            <li>Site Map</li>
                            <li>Support Center</li>
                            <li>Terms Conditions</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-6 mt-5">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Terms Conditions</li>
                            <li>Our Blog</li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4 mt-5">
                        <h5>About Us</h5>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <div className="mt-4 d-flex">
                            <img width="25px" className="mr-4" src={facebook} alt="facebook" />
                            <img width="25px" className="mr-4" src={instagram} alt="facebook" />
                            <img width="25px" className="mr-4" src={linkedIn} alt="facebook" />
                            <img width="25px" className="mr-4" src={youTube} alt="facebook" />
                        </div>
                    </div>

                </div>
            </div>
            <small className="d-flex justify-content-center mt-5 p-5">Copyright Md Shahriar</small>
        </div>
    );
};

export default Footer;