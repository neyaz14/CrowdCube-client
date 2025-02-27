import React from 'react';
import RunningCampCard from './RunningCampCard';
import { Fade } from 'react-awesome-reveal';
import SlidertextONE from '../TypeWriter/SlidertextONE';

const RunningCompaigns = ({ AllCampaignLink }) => {
    const currentDate = new Date();


    const avilableCamp = AllCampaignLink.filter(camp=> currentDate < new Date(camp.deadline)  )
    const camplength = avilableCamp.length;
    const visibleCards = avilableCamp.slice(0, 6);
    console.log(camplength)
 

    return (
        <div>
            
            <div>
                <div>
                    <SlidertextONE></SlidertextONE>
                </div>
                
                <Fade duration={2000} delay={500}>
                <p className='text-5xl text-center  font-bold my-10'>All Runnig Campaigns</p>
                </Fade>
            </div>

            <div className="p-8 gap-y-5 items-stretch justify-center min-h-screen md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid">
                {
                    visibleCards.map(campCard=>
                         <RunningCampCard campCard={campCard}key={campCard._id}>  </RunningCampCard>)
                }
            </div>
        </div>
    );
};

export default RunningCompaigns;