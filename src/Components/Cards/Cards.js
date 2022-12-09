import { CalendarIcon, EllipsisHorizontalIcon, EyeIcon, LockClosedIcon, MapIcon, MapPinIcon, ShareIcon } from '@heroicons/react/24/solid';
import React from 'react';
import RightSide from './RightSide';

const Cards = () => {

    const cards = [
        {
            img: 'https://i.ibb.co/TWMZ6hZ/image.png',
            Icon: 'https://i.ibb.co/ZHnM9yp/article-Icon.png',
            caption: 'Article',
            title: 'What if famous brands had regular fonts? Meet regular Brands',
            subTitle: 'I have worked in UX for the better part of a decade. From now on I plan to rei...',
            name: 'Sharthak kamra',
            ownerImg: 'https://i.ibb.co/yVXgXYm/man1.png',
            view: '1.4k views'
        },
        {
            img: 'https://i.ibb.co/cY57R2D/image2.png',
            Icon: 'https://i.ibb.co/fHnST9Y/education.png',
            caption: 'Education',
            title: 'Tax benifits for investment under National pension scheme launched by Government',
            subTitle: 'I have worked in UX for the better part of a decade. From now on I plan to rei...',
            name: 'Sarah west',
            ownerImg: 'https://i.ibb.co/SmxvDZR/weman1.png',
            view: '1.4k views'
        },
        {
            img: 'https://i.ibb.co/j9Nptzv/image3.png',
            Icon: 'https://i.ibb.co/SBbJPMx/meetup.png',
            caption: 'Meetup',
            title: 'Finance & Investments Elite social mixer @Lujiazui',
            date: 'Fri, 12 Oct, 2018',
            location: 'Ahmedabad, India',
            visitButton: 'Visit website',
            name: 'Ronal Jones',
            ownerImg: 'https://i.ibb.co/gvTrDJP/Ronal.png',
            view: '1.4k views'
        },
        {
            img: '',
            Icon: 'https://i.ibb.co/Wcx6srQ/job.png',
            caption: 'Jobs',
            title: 'Softwere Developer',
            subTitle: '',
            date: 'Inovaccer Analytics Privet Ltd.',
            location: 'Nodia, India',
            visitButton: 'Visit on templete',
            name: 'Joseph Gray',
            ownerImg: 'https://i.ibb.co/pyVgXfR/Joseph.png',
            view: '1.4k views'
        },
    ]

    return (
        <div className='container '>
            <div className="row">
                <div className=" col-sm-12 col-lg-8">
                    {
                        cards.map(card => <div
                            key={card.caption}
                            className="card mb-3">
                            {
                                card?.img ? <img src={`${card.img}`} className="card-img-top" alt="..." /> : ''
                            }
                            <div className="card-body">
                                <h6 className="card-title">
                                    <img src={card.Icon} className='mb-2 me-1' style={{ height: '15px' }} alt="" />
                                    {card.caption}
                                </h6>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h5>{card.title}</h5>
                                    <span className=''><EllipsisHorizontalIcon style={{ height: '30px' }}></EllipsisHorizontalIcon></span>
                                </div>
                                <p className="card-text text-muted">{card.subTitle}</p>

                                {
                                    card?.date && <><div
                                        className='d-flex align-items-center '>
                                        <h6 style={{ marginRight: '20%' }}>
                                            <span className='me-1'><CalendarIcon style={{ height: '15px' }}></CalendarIcon></span>
                                            {card.date}
                                        </h6>
                                        <h6 className='d-flex align-items-center'><MapPinIcon style={{ height: '15px', marginRight: '5px' }}></MapPinIcon>{card.location}</h6>

                                    </div>
                                        <p className='btn btn-outline-secondary w-100 my-2'>{card.visitButton}</p>
                                    </>
                                }

                                <div className='d-flex align-items-center justify-content-between mt-3'>
                                    <div className='d-flex align-items-center'>
                                        <img src={card.ownerImg} alt="" />
                                        <h5 className='ms-3'>{card.name}</h5>
                                    </div>
                                    <div className='d-flex text-muted '>
                                        <span><EyeIcon style={{ height: '15px' }}></EyeIcon></span>
                                        <p className='fw-bold ms-2 me-4'>{card.view}</p>
                                        <span ><ShareIcon style={{ height: '15px' }}></ShareIcon></span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-sm-12 col-lg-4 d-none d-lg-block">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Cards;