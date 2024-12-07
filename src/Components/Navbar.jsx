
import { Link, NavLink } from 'react-router-dom';
import { FaHandsHelping } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import Style from 'index.css'
const Navbar = () => {

    const { Currentuser, singOut, currentloggedInUser } = useContext(AuthContext);

    const Links = <>
        <li><NavLink to='/' className="inactive" activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/allCampaign' className="inactive" activeClassName="active">All Campaign</NavLink></li>
        <li><NavLink to='/addNewCampaign' className="inactive" activeClassName="active">Add New Campaign</NavLink></li>
        <li><NavLink to='/myCampaign' className="inactive" activeClassName="active">My Campaign</NavLink></li>
        <li><NavLink to='/myDonations' className="inactive" activeClassName="active">My Donations</NavLink></li>
    </>


    const handleSingOut = () => {
        singOut()


    }

    return (
        <div className="navbar   z-50 flex justify-between">

            <div className="navbar-center">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn rounded-full bg-emerald-700 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6  w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-yellow-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>

                <a className="btn btn-ghost  text-xl flex items-center">
                    <FaHandsHelping />
                    CrowdCube</a>
            </div>

            <div className='flex justify-around'>
                <div className=" navbar-center hidden lg:flex">

                    <div className=''>
                        <ul className="menu menu-horizontal px-1">

                            {Links}

                        </ul>
                    </div>
                </div>

                {/* <div>
                            <div className="navbar-end">
                                <Link to='/login' className="btn btn-outline">Login</Link>
                            </div>
                    
                </div> */}


            </div>

            <div className='border w-60 h-16 justify-between flex'>
                {/* <p>{currentloggedInUser?.displayName}</p> */}

                {/* <figure><img  className='w-12' src={`currentloggedInUser?.photoURL,''s Profile Pic'`} alt={currentloggedInUser?.displayName} /></figure> */}

                <div>
                    {
                        Currentuser ?


                            // <div className="user-info">

                            //     <img src={Currentuser?.photoURL} alt="User" title={Currentuser.displayName} className="user-photo" />

                            //     <button
                            //         onClick={handleSingOut}
                            //         className='btn-sm btn-outline text-orange btn'>
                            //         <NavLink to='/login'>LogOut</NavLink></button>

                            // </div>

                            <div className="flex items-center space-x-4">
                                <div className="relative group">
                                    <img
                                        src={Currentuser?.photoURL}
                                        alt="User"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                    />
                                    <div className='absolute top-7 left-2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-sm px-2 py-1 rounded shadow-lg'>
                                        <span className="   text-white ">{Currentuser?.displayName}</span>
                                        <button
                                            onClick={handleSingOut}
                                            className='btn-sm btn-outline text-orange btn'>
                                            LogOut
                                        </button>
                                    </div>
                                </div>

                            </div>




                            :
                            <div className='flex md:flex-row flex-col md:space-x-3 '>
                                <button className='bg-orange text-white font-semibold bg-light-green-hover btn'><Link to='/login'>Login</Link></button>
                                <button className='bg-orange text-white font-semibold bg-light-green-hover btn'><Link to='/register'>Register</Link></button>
                            </div>
                    }


                </div>

            </div>

        </div>
    );
};

export default Navbar;