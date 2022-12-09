import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import '../../../App.css'
import logo from '../../../assets/image (4).png'
import { AuthProvider } from '../../../UserContext/UserContext';

const Navber = () => {
    const { user, logOutUser } = useContext(AuthProvider)

    const handleLogout = () => {
        logOutUser()
            .then(result => console.log(result.user))
            .catch(err => console.log(err.message))

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-block">
                <div className="container-fluid">
                    <h1 className="navbar-brand fs-3 mx-5"><span className='text-success'>ATG.</span>W<span ><img src={logo} className='mb-2' style={{ height: '20px' }} alt="" /></span>RLD</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <span style={{ marginRight: '-20px', zIndex: '1000', marginTop: '5px' }}><i className="bi bi-search"></i></span>
                            <input className="form-control me-2 ps-4 rounded-pill" style={{ width: '360px' }} type="search" placeholder="Search for your favorite group in ATG" aria-label="Search" />
                        </ul>

                        <div className="">
                            {
                                user?.uid ? <div className="dropdown">
                                    <span className="btn dropdown-toggle fw-bold" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <UserCircleIcon  style={{ height: '30px',marginRight:'8px' }}></UserCircleIcon>
                                        {user?.email}

                                    </span>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li onClick={handleLogout}><span className="dropdown-item">LogOut</span></li>
                                    </ul>
                                </div>

                                    : <p data-bs-toggle="modal" href="#exampleModalToggle" className='fw-bold'>Create account <span className='text-primary'>It's free</span></p>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navber;