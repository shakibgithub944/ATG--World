import React from 'react';
import headerImg from '../../../assets/image1.png'
import '../../../App.css'

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 p-0 header-title" >
                    <img src={headerImg} className='opacity' style={{ width: '100%' }} alt="" />
                    <div className='headerTitle-Position'>
                        <h2 className='text-white'>Computer Engineering</h2>
                        <p className='text-white'>142,756 Computer engineers follow this </p>
                    </div>
                </div>
                {/* <div class="card bg-dark text-white">
                    <img src="..." class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                </div> */}


            </div>
        </div>
    );
};

export default Header;