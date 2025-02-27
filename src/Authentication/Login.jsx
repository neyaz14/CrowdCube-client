import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';


import 'animate.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import ''


const Login = () => {
    const [showpw, setshowpw] = useState(false);
    const [msg, setmsg] = useState();
    const { login, googleRegister, updateUserProfile, Currentuser, currentloggedInUser, setCurrentUser } = useContext(AuthContext);

    const allUsers = useLoaderData();
    // console.log(allUsers);
    const location = useLocation();
    const navigate = useNavigate();


    // const 
    const handlelogin = e => {
        setmsg('')
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(res => {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have successfully registered",
                    timer: 1500,
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

                e.target.reset();
                navigate(location?.state ? location.state : "/")


            })
            .catch(err => {
                // console.log(err.message);
                setmsg(err.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.message}`,
                    timer: 1500,
                    background: '#FEFCE8', // Light grey background
                    color: '#f72c47', // Text color
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


    const handleLoginGOOGLE = () => {
        setmsg('');

        googleRegister()
            .then(res => {
                const newRegisteredUser = res.user;
                const allemail = allUsers.find(allready => newRegisteredUser.email == allready.email)
                // console.log(allemail);
                // if(newRegisteredUser.email == )
                if (!allemail) {
                    updateUserProfile({ displayName: res.user.displayName, photoURL: res.user.photoURL });

                    const name = newRegisteredUser.displayName;
                    const email = newRegisteredUser.email;
                    const photoURL = newRegisteredUser.photoURL;
                    const createdtime = res.user.metadata.creationTime;

                    const newUser = { name, email, photoURL, createdtime };

                    fetch(' https://crowdcube-server-site-sigma.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)

                        })



                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully registered by Google and logged in",
                        timer: 1500,
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
                    //   e.target.reset();
                    navigate(location?.state ? location.state : "/")


                }
                else{
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully registered by Google",
                        timer: 1500,
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
                }



               

                //   e.target.reset();

            })
            .catch(err => {
                // console.log(err.message);
                setmsg(err.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.message}`,
                    timer: 1500,
                    background: '#FEFCE8', // Light grey background
                    color: '#f72c47', // Text color
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

    return (
        <div>
            <div className="hero  min-h-screen " >

                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl mb-7 text-sky-600 font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-sky-50 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label hover:font-medium ">
                                    <span
                                        className=" label-text text-light-green-hover font-medium">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered border-sky-950" required />
                            </div>
                            <div className="form-control relative">
                                {/* pw toggle */}
                                <button
                                    onClick={() => setshowpw(!showpw)}
                                    className='btn btn-xs absolute right-2 top-12'>{
                                        showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }</button>
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                {/* pw inout */}
                                <input
                                    name='password'
                                    type={!showpw ? "password" : "text"}
                                    placeholder="password"
                                    className="input border-sky-950 input-bordered" required />
                                {/* forget pw */}
                                {/* <label className="label">
                                    <p onClick={handleForgetPW} className="label-text-alt link link-hover">Forgot password?</p>
                                </label> */}

                                {/* --------------------------------------------------- */}
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    // onClick={handleLoginbtn}
                                    className="btn font-semibold text-xl text-sky-50 bg-sky-700 hover:text-sky-700 hover:bg-sky-100 hover:font-bold">Login</button>
                            </div>
                            <div className='flex text-sky-950 font-semibold text-[16px] hover:font-semibold  justify-start'>
                                <p>New here ? <Link to='/register'>Register</Link></p>
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold text-sm'>{msg}</p>
                            </div>
                        </form>
                        <button
                            onClick={() => setshowpw(!showpw)}
                            className='btn btn-xs absolute right-10 top-44'>{
                                showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</button>
                        <div className='mx-auto mb-6'>
                            {/* google */}
                            <button
                                onClick={handleLoginGOOGLE}
                                className='btn-wide btn font-bold text-xl text-sky-50 bg-sky-700 hover:text-sky-700 hover:bg-sky-100 hover:font-bold'> Login with Google </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
