import React, { useContext } from 'react';
import { ArrowRightOnRectangleIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import '../../../App.css'
import { AuthProvider } from '../../../UserContext/UserContext';

const Menu = () => {
    const { user } = useContext(AuthProvider)
    return (
        <div className='container my-5'>
            <div className="row d-none d-lg-block">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <p className="nav-link active fw-bold" aria-current="page">all Post(32)</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page">Article</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page">Event</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page">Education</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page">Job</p>
                                </li>
                            </ul>
                            <div className="d-flex ">
                                <div className="dropdown me-4">
                                    <button className="btn btn-outline-secondary dropdown-toggle">
                                        <span className='fw-bold text-black'>Write a post</span>
                                    </button>
                                </div>

                                {user?.uid ? <button className="btn btn-outline-secondary"> <span><ArrowRightOnRectangleIcon className='icon me-2 mb-1'></ArrowRightOnRectangleIcon></span>Leave Group</button>

                                    : <button className="btn btn-primary"> <span><UserGroupIcon className='icon me-2 mb-1'></UserGroupIcon> </span> Join Group</button>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
            <div className="row d-sm-block d-lg-none">
                <div className='col-12 d-flex align-items-center justify-content-between'>
                    <p className="nav-link active fw-bold" aria-current="page">all Post(328)</p>
                    <div className="dropdown">
                        <p className="btn btn-outline-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter: All
                        </p>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><p className="dropdown-item" href="#">Article</p></li>
                            <li><p className="dropdown-item" href="#">Event</p></li>
                            <li><p className="dropdown-item" href="#">Education</p></li>
                            <li><p className="dropdown-item" href="#">Jobs</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;