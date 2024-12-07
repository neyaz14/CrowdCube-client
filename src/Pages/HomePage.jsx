import React from 'react';
import Banner from '../HomeComponents/Banner';
import RunningCompaigns from '../HomeComponents/RunningCompaigns';
import { useLoaderData } from 'react-router-dom';

import StatsSection from '../HomeComponents/StatsSection';
import FAQSection from '../HomeComponents/FAQSection';

const HomePage = () => {
    const AllCampaignLink = useLoaderData();

    return (
        <div>
            <Banner></Banner>
      

            <RunningCompaigns AllCampaignLink={AllCampaignLink}></RunningCompaigns>
            <StatsSection></StatsSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default HomePage;