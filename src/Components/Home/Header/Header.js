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