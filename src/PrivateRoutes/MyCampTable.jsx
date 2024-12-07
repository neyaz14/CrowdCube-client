import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampTable = ({ myCamp, setStateAllCampaigns, stateAllCampaigns, setmyCampState, myCampState }) => {

    const navigate = useNavigate();
    const { _id, email, name, thumbnail, title, type, minDonation, description, deadline } = myCamp;

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'Delete',

                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Campaign has been deleted.",
                                icon: "success"
                            });
                            const remaingnig = stateAllCampaigns.filter(camp => camp._id !== id);
                            const remaingnigmyCamp = myCampState.filter(camp => camp._id !== id);
                            setmyCampState(remaingnigmyCamp);
                            setStateAllCampaigns(remaingnig);
                        }


                    })


            }
        });

    }


    // const handleUpdate = (id) => {
    //     navigate(`updateCamp/${id}`)
    // }
    return (
        <div>
            <div className="overflow-x-auto">


                <table className="table md:table-sm table-xs">
                    <tbody>
                        <tr>
                            <th className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-3'>1</th>

                            <td className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{name}</td>

                            <td className='hidden border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{email}</td>

                            <td className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{title}</td>
                            <td className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{type}</td>

                            <td className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>{deadline}</td>



                            <td className='border border-yellow-400 text-emerald-900 md:font-semibold md:text-[16px] overflow-hidden max-w-7'>

                                <button
                                    // onClick={() => handleUpdate(_id)}
                                    className='btn btn-xs bg-orange-300 text-emerald-950 font-semibold'> <Link to={`/updateCamp/${_id}`}>Update</Link></button>



                                <button
                                    onClick={() => handleDelete(_id)}
                                    className='btn btn-xs bg-orange-300 text-emerald-950 font-semibold'> Delete</button>

                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyCampTable;