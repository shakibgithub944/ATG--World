import React from 'react';
import Cards from '../Cards/Cards';
import Header from './Header/Header';
import Menu from './MenuList/Menu';
import Navber from './Navber/Navber';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Header></Header>
            <Menu></Menu>
            <Cards></Cards>
        </div>
    );
};

export default Home;