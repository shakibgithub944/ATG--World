import React from 'react';
import Header from './Header/Header';
import Menu from './MenuList/Menu';
import Navber from './Navber/Navber';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Header></Header>
            <Menu></Menu>
        </div>
    );
};

export default Home;