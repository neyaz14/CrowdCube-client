import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CardDetails = () => {
    const { currentloggedInUser, Currentuser } = useContext(AuthContext);
    const allCampaign = useLoaderData();
    console.log(currentloggedInUser, Currentuser);

    const { id } = useParams();
    // console.log(id)

    const campaign = allCampaign.find(campaign => campaign._id.toString() == id)
    const {
        _id, email, name, thumbnail, title, type, minDonation, description, deadline,
    } = campaign;
    // console.log(campaign)
    // console.log(name, email, title, deadline)

    // console.log(Currentuser);
    // const userName = currentloggedInUser.displayName;

    // const userEmail = Currentuser.email;

    // const newDonation = {campaignID:_id,campaignEmail: email,campaignName: name,thumbnail,title, type,minDonation,description,deadline, userEmail, userName};
    // console.log(newDonation)

    const handleSendDonation = () => {
        const currentDate = new Date();
        const deadlinedate = deadline;
        const deadlineDATE = new Date(deadlinedate);
        if (currentDate > deadlineDATE) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Date is over to donate",
                timer: 1600,
                background: '#FEFCE8', // Light grey background
                color: '#FFAC00', // Text color
                showConfirmButton: false,
                showClass: {
                    popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
                },
                hideClass: {
                    popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
                }
            });
            return;
        } else {
            const donarName = Currentuser.displayName;
            const donarEmail = Currentuser.email;
            console.log(donarEmail, donarName)
            const newDonation = { campaignID: _id, organizerEmail: email, organizerName: name, thumbnail, title, type, minDonation, description, deadline, donarEmail, donarName };

            console.log(newDonation)
            fetch('http://localhost:5000/userDonation', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newDonation)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    // setCurrentUser(newUser);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully Donated",
                        timer: 1600,
                        background: '#FEFCE8', // Light grey background
                        color: '#FFAC00', // Text color
                        showConfirmButton: false,
                        showClass: {
                            popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                        },
                        hideClass: {
                            popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                        }
                    });

                })

        }

    }
    return (
        <div className='w-11/12 mx-auto'>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left side */}
                <div className="col-span-2 space-y-4 max-w-4xl mx-auto running-camp-card-bg running-camp-card-bg-hover rounded-lg shadow-md border border-gray-200 p-6">
                    {/* Main Content */}
                    <div>
                        {/* Left Section: Image */}
                        <div className="">
                            <img
                                src={thumbnail}
                                alt={title}
                                className="w-full h-60 object-cover rounded-md"
                            />
                        </div>

                        {/* Middle Section: Campaign Details */}
                        <div className="space-y-2">
                            <div className="flex mt-4 items-center  space-x-2">
                                <span className="px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">
                                    {type}
                                </span>
                            </div>
                            <h2 className="text-3xl  font-bold text-emerald-900">{title}</h2>
                            <p className="text-emerald-900 opacity-70">{description}</p>
                            <p className="text-[18px] w-52 rounded-full bg-emerald-100 px-4 py-2 text-emerald-950">
                                {/* focus  */}
                                <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-emerald-900">
                                <strong>Minimum Donation:</strong> ${minDonation}
                            </p>
                        </div>

                        {/* Right Section: User Info */}

                    </div>
                </div>







                {/* right sides */}
                <div className='col-span-1 space-y-10'>
                    <div className="col-span-1 lg:col-span-1 text-center bg-gray-50 rounded-lg p-4">
                        <div className="flex flex-col items-center space-y-3">
                            <img
                                // src={Currentuser.photoURL}
                                alt={name}
                                className="w-16 h-16 rounded-full"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                            <p className="text-sm text-gray-600">{email}</p>

                        </div>
                    </div>














                    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
                        {/* Donation Amount */}
                        <div className="flex justify-center items-center mb-4">
                            <div className="w-20 h-20 bg-yellow-400 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                ${minDonation}
                            </div>
                        </div>
                        {/* Text */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            How Your Donation Makes A Difference
                        </h3>
                        {/* Button */}
                        <button
                            onClick={handleSendDonation}
                            className="mt-4 px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700">
                            Donate ${minDonation}
                        </button>
                    </div>
                </div>

            </div>





        </div>
    );
};

export default CardDetails;