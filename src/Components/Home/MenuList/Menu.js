import React from 'react';
import { UserGroupIcon } from '@heroicons/react/24/solid'
import '../../../App.css'

const Menu = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <p class="nav-link active fw-bold" aria-current="page">all Post(32)</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link active" aria-current="page">Article</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link active" aria-current="page">Event</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link active" aria-current="page">Education</p>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link active" aria-current="page">Job</p>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <div class="dropdown me-4">
                                    <button className="btn btn-outline-secondary dropdown-toggle">
                                        <span className='fw-bold text-black'>Write a post</span>
                                    </button>
                                </div>
                                <button class="btn btn-primary"> <span><UserGroupIcon className='icon me-2 mb-1'></UserGroupIcon> </span> Join Group</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
        </div>
    );
};

export default Menu;