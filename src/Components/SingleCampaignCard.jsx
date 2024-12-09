import React from 'react';
import { Link } from 'react-router-dom';

const SingleCampaignCard = ({idx, campaignCard }) => {
    
    const {_id, email, name, thumbnail, title, type, minDonation, description, deadline } = campaignCard;
    return (
        <div>
            <div className="overflow-x-auto">


                <table className="table md:table-sm table-xs">
                    <tbody>
                        <tr>
                            <th className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-3'>{idx+1}</th>

                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{name}</td>

                            <td className='hidden border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{email}</td>

                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{title}</td>
                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{type}</td>

                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{deadline}</td>

                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{minDonation}</td>
                         


                            <td className='border border-base-300 text-sky-500 md:font-semibold md:text-[16px] overflow-hidden max-w-7'><button className='btn btn-xs bg-sky-100 text-sky-950 font-semibold'> <Link to={`/cardDetails/${_id}`} >Details</Link></button></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default SingleCampaignCard;