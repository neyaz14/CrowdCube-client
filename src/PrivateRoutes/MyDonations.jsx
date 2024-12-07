import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyDonaDetailsCard from './MyDonaDetailsCard';
import { AuthContext } from '../Provider/AuthProvider';

const MyDonations = () => {
    const {currentloggedInUser, Currentuser} = useContext(AuthContext);
    const allDonations = useLoaderData();
    const [Ddetail, setDdetail]= useState(allDonations);
    console.log(Currentuser)
    const filteredDetails = [...Ddetail].filter(filteredDetail=> filteredDetail.donarEmail == Currentuser.email);


    return (
        <div className=' lg:w-11/12 mx-auto '>
            <div className='my-4'>
                <h1 className='text-center text-5xl text-emerald-950 font-bold '>My Donation Details</h1>
            </div>
            <div className='grid md:grid-cols-2  grid-cols-1 justify-center items-start mx-auto mt-3'>
            {
                filteredDetails.map(details=> 
                <MyDonaDetailsCard key={details._id} details={details}>

                </MyDonaDetailsCard>)
            }

            </div>
        </div>
    );
};

export default MyDonations;