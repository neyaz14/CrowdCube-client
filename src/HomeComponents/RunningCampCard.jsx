import React from 'react';
import { Link } from 'react-router-dom';

const RunningCampCard = ({ campCard }) => {
    const {
        _id,
        email,
        name,
        thumbnail,
        title,
        type,
        minDonation,
        description,
        deadline,
    } = campCard;

    return (
        <div>
            <div className="max-w-sm mx-auto running-camp-card-bg running-camp-card-bg-hover rounded-lg shadow-md overflow-hidden max-h-[580px]">
           
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-[384px] h-48 object-cover"
                />

           
                <div className="p-6 mb-3">
                    {/* Title */}
                    <h2 className="text-2xl font-bold ">{title}</h2>

                    {/* Type */}
                    <p className="text-[18px] text-yellow-200 font-medium mt-1 capitalize">{type}</p>

                    {/* Description */}
                    <p className=" mt-2 text-yellow-50 text-sm h-24 overflow-hidden">{description}</p>

                    {/* Minimum Donation */}
                    <p className=" font-semibold text-[18px] mt-4">
                        Minimum Donation: <span className="text-orange-50">${minDonation}</span>
                    </p>

                    {/* Deadline */}
                    <p className="text-yellow-50 text-[18px] font-semibold text-sm mt-2">
                        Deadline: {new Date(deadline).toLocaleDateString()}
                    </p>

                    {/* Action Button */}
                    <button className="mt-4 w-full running-camp-card-btn running-camp-card-btn-hover py-2 px-4 rounded hover:bg-blue-600 text-[18px]">
                       <Link to={`/cardDetails/${_id}`} > See More</Link>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default RunningCampCard;