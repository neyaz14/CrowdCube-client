import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCampaignCard from '../Components/SingleCampaignCard';

const AllCampaign = () => {
    const allCampaigns = useLoaderData();
    const [stateAllCampaigns, setStateAllCampaigns] = useState(allCampaigns);
    // const [sortedCamp, setsortedCamp] = useState(stateAllCampaigns);

    const handleSorting=()=>{
        const sort = [...stateAllCampaigns].sort((a,b)=>b.minDonation - a.minDonation)
        setStateAllCampaigns(sort);
    }

    return (
        <div className='w-11/12 mx-auto space-y-5'>
            <div>
                <h1 className='text-4xl text-sky-700 font-bold text-center my-6'>All Campaigns </h1>
            </div>
            <div className=' overflow-x-auto'>
                <table className="table md:table-sm table-xs">
                    <thead>
                        <tr>
                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-1'>#</th>
                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Name</th>

                            <th className='hidden  border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>email</th>
                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Project Name</th>

                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Funding for</th>

                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Last date for funding</th>

                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Minimum Donation</th>
                           
                            <th className='border border-base-300 text-sky-600 font-bold  overflow-hidden max-w-7'>Details</th>
                        </tr>
                    </thead>
                    
                </table>
              
                        {stateAllCampaigns.map((campaignCard, idx) => <SingleCampaignCard idx={idx} campaignCard={campaignCard} key={campaignCard._id}></SingleCampaignCard>)}
                    


            </div>
            <div className='flex justify-end'>
                <button
                onClick={handleSorting}
                className='btn bg-sky-100 text-xl hover:bg-sky-900 hover:text-sky-100 font-semibold hover:font-bold  text-sky-950'>Sort Campaigns</button>
            </div>
        </div>
    );
};

export default AllCampaign;