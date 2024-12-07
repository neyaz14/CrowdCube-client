import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCampaignCard from '../Components/SingleCampaignCard';

const AllCampaign = () => {
    const allCampaigns = useLoaderData();
    const [stateAllCampaigns, setStateAllCampaigns] = useState(allCampaigns);

    return (
        <div>
            
            <div className='w-11/12 mx-auto overflow-x-auto'>
                <table className="table md:table-sm table-xs">
                    <thead>
                        <tr>
                            <th className='border border-yellow-400 overflow-hidden max-w-1'>#</th>
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Name</th>

                            <th className='hidden  border border-yellow-400 overflow-hidden max-w-7'>email</th>
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Project Name</th>

                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Funding for</th>

                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Last date for funding</th>
                           
                            <th className='border border-yellow-400 overflow-hidden max-w-7'>Details</th>
                        </tr>
                    </thead>
                    
                </table>
              
                        {stateAllCampaigns.map(campaignCard => <SingleCampaignCard campaignCard={campaignCard} key={campaignCard._id}></SingleCampaignCard>)}
                    


            </div>
        </div>
    );
};

export default AllCampaign;