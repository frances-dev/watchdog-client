import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="bg-light">
            <Header></Header>
            <Services></Services> <br /> <br />
            <Feedback></Feedback> <br />
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;