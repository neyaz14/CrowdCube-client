import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCamp = () => {
    const { Currentuser } = useContext(AuthContext);

    const allCampaigns = useLoaderData();
    const { id } = useParams();
    const campaign = allCampaigns.find(campaign => campaign._id.toString() == id)
    const {
        _id, email, name, thumbnail, title, type, minDonation, description, deadline,
    } = campaign;



    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('userName');
        const thumbnail = form.get('thumbnail');
        const title = form.get('title');
        const type = form.get('type');
        const minDonation = form.get('minDonation');
        const description = form.get('description');
        const deadline = form.get('deadline');

        const updatedCampaignInfo = { email, name, thumbnail, title, type, minDonation, description, deadline };
        console.log(updatedCampaignInfo);

        // console.log("Campaign Submitted:", email, name);
        // alert("Campaign Added Successfully!");


        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCampaignInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have successfully added a Campaign",
                    timer: 1650,
                    background: '#005a4e',
                    color: '#f4a30b',
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

        e.target.reset();
    };



















    return (
        <div className='w-11/12 mx-auto'>



            <div className="cta-container mx-auto">
                <h1 className="cta-title">Update Campaign</h1>
                <form onSubmit={handleUpdateSubmit} className="campaign-form space-y-6 space-x-3 ">
                    <input
                        type="url"
                        name="thumbnail"
                        placeholder="Image/Thumbnail URL"
                        className="cta-input text-orange"
                        defaultValue={thumbnail}
                        required
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Campaign Title"
                        className="cta-input"
                        // value={title}
                        defaultValue={title}
                        required
                    />
                    <select
                        name="type"
                        className="cta-input "

                        required
                    >
                        <option className='cta-select ' value="personal-issue">Personal Issue</option>
                        <option className='cta-select ' value="startup">Startup</option>
                        <option className='cta-select ' value="business">Business</option>
                        <option className='cta-select ' value="creative ideas">Creative Ideas</option>
                    </select>
                    <textarea
                        name="description"
                        placeholder="Campaign Description"
                        className="cta-textarea"
                        defaultValue={description}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="minDonation"
                        placeholder="Minimum Donation Amount"
                        className="cta-input"
                        defaultValue={minDonation}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="deadline"
                        className="cta-input"
                        defaultValue={deadline}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="cta-input read-only"
                        placeholder={Currentuser?.email}
                        defaultValue={Currentuser?.email}
                        readOnly
                    />
                    <input
                        type="text"
                        name="userName"
                        className="cta-input read-only"
                        placeholder={Currentuser?.displayName}
                        defaultValue={Currentuser?.displayName}
                        readOnly
                    />
                    <button 
                    // type="submit" 
                    className="cta-button">
                        Update Campaign Info
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCamp;