import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyCampTable from './MyCampTable';

const MyCampaign = () => {

    const { Currentuser, currentloggedInUser } = useContext(AuthContext);
    const allCampaign = useLoaderData();
    const [stateAllCampaigns, setStateAllCampaigns] = useState(allCampaign);

    // console.log(allCampaign, Currentuser);

    const myCampaigns = allCampaign.filter(camp => camp.email === Currentuser.email);
    // console.log(myCampaigns);
    
    const [myCampState, setmyCampState] = useState(myCampaigns);
 
    return (
        <div>
            {/* page header */}
            <div>
                <h1 className=' font-bold text-center text-4xl my-6'>My Campaigns</h1>
            </div>

            <div>
                <div className='w-11/12 mx-auto overflow-x-auto'>
                    <table className="table  md:table-sm table-xs">
                        <thead>
                            <tr>
                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-1'>#</th>
                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-7'>Name</th>

                                <th className='hidden  border text-sky-600 border-base-300 overflow-hidden max-w-7'>email</th>
                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-7'>Project Name</th>

                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-7'>Funding for</th>

                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-7'>Last date for funding</th>

                                <th className='border border-base-300 text-sky-600 overflow-hidden max-w-7'>Details</th>
                            </tr>
                        </thead>

                    </table>

                    {myCampState.map((myCamp, idx) => <MyCampTable idx={idx}
                    myCampState={myCampState}  setmyCampState={setmyCampState}
                    stateAllCampaigns={stateAllCampaigns}  setStateAllCampaigns={setStateAllCampaigns}
                    myCamp={myCamp} key={myCamp._id}></MyCampTable>)}
                </div>
            </div>
        </div>
    );
};

export default MyCampaign;