import React from 'react';
import MainSec from './MainSec/MainSec';
import Navbars from './Navbar/Navbars';

const Header = () => {
    return (
        <section style={{marginBottom: "20px"}}>
            <Navbars></Navbars>
            <MainSec></MainSec>
        </section>
    );
};

export default Header;