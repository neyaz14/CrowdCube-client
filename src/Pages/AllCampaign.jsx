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
                <h1 className='text-4xl text-emerald-800 font-bold text-center my-6'>All Campaigns </h1>
            </div>
            <div className=' overflow-x-auto'>
                <table className="table md:table-sm table-xs">
                    <thead>
                        <tr>
                            <th className='border border-yellow-400 overflow-hidden max-w-1'>#</th>
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Name</th>

                            <th className='hidden  border border-yellow-400 overflow-hidden max-w-7'>email</th>
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Project Name</th>

                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Funding for</th>

                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Last date for funding</th>

                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Minimum Donation</th>
                           
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Details</th>
                        </tr>
                    </thead>
                    
                </table>
              
                        {stateAllCampaigns.map(campaignCard => <SingleCampaignCard campaignCard={campaignCard} key={campaignCard._id}></SingleCampaignCard>)}
                    


            </div>
            <div className='flex justify-end'>
                <button
                onClick={handleSorting}
                className='btn bg-yellow-100 text-xl hover:bg-yellow-900 hover:text-yellow-100 font-semibold hover:font-bold  text-yellow-950'>Sort Campaigns</button>
            </div>
        </div>
    );
};

export default AllCampaign;