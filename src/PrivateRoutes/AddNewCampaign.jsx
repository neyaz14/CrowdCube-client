import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import './AddNewCampaign.css'
import Swal from 'sweetalert2';
const AddNewCampaign = () => {
    const { Currentuser } = useContext(AuthContext);
    const [nowLoggedin , setnowLoggedin] = useState(Currentuser);
    // console.log(Currentuser)





    const handleSubmit = (e) => {
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

        const addedCampaignInfo = {email, name, thumbnail, title,type, minDonation, description, deadline } ;
        // console.log(addedCampaignInfo);
        
        // console.log("Campaign Submitted:", email, name);
        // alert("Campaign Added Successfully!");


        fetch(' https://crowdcube-server-site-sigma.vercel.app/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedCampaignInfo)
        }).then(res => res.json())
        .then(data =>{
            // console.log(data)
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
                <h1 className="cta-title">Add New Campaign</h1>
                <form onSubmit={handleSubmit} className="campaign-form space-y-6 space-x-3 ">
                    <input
                        type="url"
                        name="thumbnail"
                        placeholder="Image/Thumbnail URL"
                        className="cta-input text-orange"
                      
                        required
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Campaign Title"
                        className="cta-input"
                       
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
                        // value={formData.description}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="minDonation"
                        placeholder="Minimum Donation Amount"
                        className="cta-input"
                        // value={formData.minDonation}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="deadline"
                        className="cta-input"
                        // value={formData.deadline}
                        // onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="cta-input read-only"
                        placeholder={Currentuser?.email}
                        value={Currentuser?.email}
                        readOnly
                    />
                    <input
                        type="text"
                        name="userName"
                        className="cta-input read-only"
                        placeholder={Currentuser?.displayName}
                        value={Currentuser?.displayName}
                        readOnly
                    />
                    <button type="submit" className="cta-button">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;