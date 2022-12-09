import { PencilIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Cards from '../Cards/Cards';
import LoginModal from '../LoginModal/LoginModal';
import Header from './Header/Header';
import Menu from './MenuList/Menu';
import Navber from './Navber/Navber';
import '../../App.css'

const Home = () => {
    return (
        <div className='position-relative'>
            <Navber></Navber>
            <Header></Header>
            <Menu></Menu>
            <Cards></Cards>
            <LoginModal></LoginModal>
            <div className=' text-end fixed-bottom m-5 d-lg-none d-sm-block'>
                <PencilIcon className='' style={{ height: '25px'}}>
                </PencilIcon>
            </div>
        </div>
    );
};

export default Home;