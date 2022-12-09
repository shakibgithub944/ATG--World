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
            <div className='position-absolute text-center bottom-0 end-0 d-lg-none d-sm-block m-4' style={{width:'60px', height:'60px',color:'white',backgroundColor:'#FF6B6B',borderRadius:'50%'}}>
                <PencilIcon className='' style={{ height: '25px',marginTop:'15px'}}>
                </PencilIcon>
            </div>
        </div>
    );
};

export default Home;