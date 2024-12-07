import React from 'react';
import RunningCampCard from './RunningCampCard';

const RunningCompaigns = ({ AllCampaignLink }) => {

    

    return (
        <div>
            <div>
                <p className='text-5xl text-center text-emerald-900 font-bold my-6'>All Runnig Campaigns</p>
            </div>

            <div className="p-8 gap-y-5 items-stretch justify-center min-h-screen md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid">
                {
                    AllCampaignLink.map(campCard=>
                         <RunningCampCard campCard={campCard}key={campCard._id}>  </RunningCampCard>)
                }
            </div>
        </div>
    );
};

export default RunningCompaigns;