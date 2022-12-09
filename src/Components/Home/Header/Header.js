import React, { useContext } from 'react';
import headerImg from '../../../assets/image1.png'
import '../../../App.css'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { AuthProvider } from '../../../UserContext/UserContext';

const Header = () => {
    const { user } = useContext(AuthProvider)

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 p-0 header-title" >
                    <img src={headerImg} className='opacity' style={{ width: '100%', }} alt="" />
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

                {/* <div className="card text-white my-5 p-0">
                    <img src={headerImg} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                        </div>
                </div> */}


            </div>
        </div>
    );
};

export default Header;