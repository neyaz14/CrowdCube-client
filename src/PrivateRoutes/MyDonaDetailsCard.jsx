import React from 'react';

const MyDonaDetailsCard = ({details}) => {
   

    const {campaignID,organizerEmail,organizerName,thumbnail,title, type,minDonation,description,deadline,donarEmail, donarName}= details;
    return (
        <div className='my-5  mx-auto'>
            <div className="card bg-base-100 image-full w-[400px] h-80 shadow-xl">
                <figure>
                    <img
                    className='w-full '
                        src={thumbnail}
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-yellow-500 text-3xl">{title}</h2>
                    <p className='opacity-80 h-10 overflow-hidden text-yellow-300 font-semibold '>Campaign Details: {description}</p>
                  
                    <div className=' bg-transparent opacity-70 font-bold  text-white  '>
                        <p className='opacity-90'>Donar info :</p>
                        <p>{donarName} , Email: {donarEmail}</p>
                    </div>
                    <div className=' bg-transparent opacity-70 font-bold rounded-xl text-white  '>
                        <p className='opacity-90'>Organizer info :</p>
                        <p>{organizerName} , Email: {organizerEmail}</p>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default MyDonaDetailsCard;