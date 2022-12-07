import React from 'react';
import '../../../App.css'
import logo from '../../../assets/image (4).png'

const Navber = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand fs-3 mx-5"><span className='text-success'>ATG.</span>W<span ><img src={logo} style={{height:'20px'}} alt="" /></span>RLD</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />  
                        </ul>
                        <form className="d-flex">
                        
                            <button className="btn btn-outline-success" >Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navber;