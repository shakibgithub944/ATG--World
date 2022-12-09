import React, { useContext } from 'react';
import headerImg from '../../../assets/image1.png'
import headerImg2 from '../../../assets/MobleHeder.png'
import '../../../App.css'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { AuthProvider } from '../../../UserContext/UserContext';

const Header = () => {
    const { user } = useContext(AuthProvider)

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 p-0 header-title" >
                    <div className='imgOverlay d-none d-lg-block '>
                    <img src={headerImg} className='' style={{ width: '100%', }} alt="" />
                    </div>
                    <div className='imgOverlay d-sm-block d-lg-none'>
                    <img src={headerImg2} className='' style={{ width: '100%', }} alt="" />
                    </div>
                    
                    <div className="">
                        <div className='w-100 d-sm-block d-lg-none d-flex align-items-center justify-content-between headerButton '>
                            <span><ArrowLeftIcon style={{ height: '15px', marginLeft: '15px', color: 'white' }}></ArrowLeftIcon></span>
                            {
                                user?.uid ? <button class="btn btn-outline-light text-white m-3">Leave Group</button>
                                    : <button class="btn btn-outline-light text-white m-3">Join Group</button>
                            }
                        </div>
                    </div>
                    <div className='headerTitle-Position'>
                        <h2 className='text-white'>Computer Engineering</h2>
                        <p className='text-white'>142,756 Computer engineers follow this </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;