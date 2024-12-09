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
            <div className="max-w-sm mx-auto dark:bg-base-300 text-base rounded-lg shadow-md overflow-hidden max-h-[580px]">

                <img
                    src={thumbnail}
                    alt={title}
                    className="w-[384px] h-48 object-cover"
                />


                <div className="p-6 mb-3">
                    {/* Title */}
                    <h2 className="text-2xl font-bold ">{title}</h2>

                    {/* Type */}
                    <p className="text-[18px]  font-medium mt-1 capitalize">{type}</p>

                    {/* Description */}
                    <p className=" mt-2  text-sm h-24 overflow-hidden">{description}</p>

                    {/* Minimum Donation */}
                    <p className=" font-semibold text-[18px] mt-4">
                        Minimum Donation: <span className="
                        ">${minDonation}</span>
                    </p>

                    {/* Deadline */}
                    <p className="
                     text-[18px] font-semibold text-sm mt-2">
                        Deadline: {new Date(deadline).toLocaleDateString()}
                    </p>

                    {/* Action Button */}
                    <button className="mt-4 w-full bg-slate-900 text-white font-semibold py-2 px-4 rounded  text-[18px]">
                        <Link to={`/cardDetails/${_id}`} > See More</Link>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default RunningCampCard;