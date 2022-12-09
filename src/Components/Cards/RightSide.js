import { HandThumbUpIcon, InformationCircleIcon, MapPinIcon, PencilIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import leisure from '../../assets/leisure.png'
import activism from '../../assets/activism.png'
import mba from '../../assets/MBA.png'
import philosophy from '../../assets/Philosophy.png'
import { AuthProvider } from '../../UserContext/UserContext';

const RightSide = () => {
    const { user } = useContext(AuthProvider)
    return (
        <div className='container-fluid '>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className='d-flex align-items-center justify-content-between'>
                        <span><MapPinIcon style={{ height: '15px', marginRight: '5px' }}></MapPinIcon></span>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext fw-bold" id="staticEmail" defaultValue={'Nodia, India'} />
                        </div>
                        <span><PencilIcon style={{ height: '15px' }}></PencilIcon></span>
                    </div>
                    <hr className='my-0' />
                </div>
                <p className='px-5 mx-5 my-5 text-muted'> <span><InformationCircleIcon style={{ height: '15px' }}></InformationCircleIcon></span> Your location will help us to surve better and extend pesonalised exprience</p>

                {
                    user?.uid && <div className='text-center'>
                        <h5><HandThumbUpIcon style={{ height: '18px', marginRight: '5px' }}></HandThumbUpIcon>Recomended Groups</h5>
                        <div className='my-5'>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center ms-5'>
                                    <img src={leisure} style={{ height: '50px', width: '50px' }} alt="" />
                                    <p className='fw-bold ms-4'>Leisure</p>
                                </div>
                                <span class="px-3 rounded-pill bg-dark text-white">followed</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between  my-3">
                                <div className='d-flex align-items-center ms-5'>
                                    <img src={activism} style={{ height: '50px', width: '50px' }} alt="" />
                                    <p className='fw-bold ms-4'>Activism</p>
                                </div>
                                <span class="px-3 rounded-pill bg-light text-dark">follow</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <div className='d-flex align-items-center ms-5'>
                                    <img src={mba} style={{ height: '50px', width: '50px' }} alt="" />
                                    <p className='fw-bold ms-4'>MBA</p>
                                </div>
                                <span class="px-3 rounded-pill bg-light text-dark">follow</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center ms-5'>
                                    <img src={philosophy} style={{ height: '50px', width: '50px' }} alt="" />
                                    <p className='fw-bold ms-4'>Philosophy</p>
                                </div>
                                <span class="px-3 rounded-pill bg-light text-dark">follow</span>
                            </div>
                            <p className='text-primary text-end mt-5'>See More...</p>
                        </div>
                    </div>
                }

                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default RightSide;