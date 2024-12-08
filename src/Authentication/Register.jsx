import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {

    const [msg, setmsg] = useState('');
    const [showpw, setshowpw] = useState(false);
    const navigate = useNavigate();
    const { register, googleRegister, setCurrentUser, Currentuser, updateUserProfile, setloading } = useContext(AuthContext);
    
    // const [registeredID, setregisteredID] = useState(Currentuser);
    // console.log(registeredID);
    // console.log(Currentuser);
    // console.log(setCurrentUser)


    const handleRegister = e => {

        setmsg('');
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photoURL = form.get('photo');
        // for pw validation 
        const pwREGX = /^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{6,}$/
        if (!pwREGX.test(password)) {
            setmsg('Must have an Uppercase letter,a Lowercase letter and the Length must be at least 6 character');
            return;
        }

        register(email, password)
            .then(res => {
                const newRegisteredUser = res.user;

                // setregisteredID(newRegisteredUser);
                updateUserProfile({ displayName: name, photoURL: photoURL })
                .then((res) => {
                    // res.json()
                    // navigate('/')
                }).catch(err => setmsg(err.message))
                setCurrentUser(newRegisteredUser);
                
                const createdtime = res.user.metadata.creationTime;
                const newUser = { name, email, photoURL, createdtime };

                // Save the new user to the database
                fetch(' https://crowdcube-server-site-sigma.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.acknowledged) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "You have successfully registered",
                                timer: 1500,
                                background: '#FEFCE8',
                                color: '#FFAC00',
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
                    })
                






                e.target.reset();
                // navigate('/login');
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





    // ---------------------- Google      -----------







    const handleRegisterGOOGLE = () => {
        setmsg('');
        googleRegister()
            .then(res => {
                const newRegisteredUser = res.user;
                // console.log(res.user.displayName, res.user.photoURL)
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
                //   e.target.reset();
                navigate('/login');

            })


// ------------------------------------------------------------------------- 
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
            <div className="hero  min-h-screen bg-light-green">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl text-orange mb-7 font-bold">Register Here</h1>
                    </div>
                    <div className="card bg-yellow-50 w-full  shrink-0 shadow-2xl ">
                        <form onSubmit={handleRegister} className="card-body w-[400px]">
                            <div className="form-control my-1">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                {/* name */}
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Name"
                                    className="input bg-yellow-50  input-bordered" required />
                            </div>

                            <div className="form-control my-1">
                                <label className="label">
                                    <span className="label-text mt-2">Photo URL</span>
                                </label>

                                {/* photo */}
                                <input
                                    name='photo'
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input bg-yellow-50 input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                {/* Email */}
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="email"
                                    className="input bg-yellow-50  input-bordered" required />
                            </div>
                            <div className="form-control relative">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* pw inout */}
                                <input
                                    name='password'
                                    type={!showpw ? "password" : "text"}
                                    placeholder="password"
                                    className="input  input-bordered" required />


                                {/* --------------------------------------------------- */}
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    // onClick={handleRegisterbtn}
                                    className=" btn font-semibold text-xl bg-light-green text-orange bg-orange-hover text-light-green-hover hover:font-bold">
                                    Register</button>
                            </div>
                            <div className='flex mt-4 text-light-green font-bold  justify-start'>
                                <p>Allready have an account? <Link to='/login'>Login</Link></p>
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold text-sm'>{msg}</p>
                            </div>
                        </form>
                        {/* pw toggle */}
                        <button
                            onClick={() => setshowpw(!showpw)}
                            className='btn btn-xs absolute right-10 top-96'>{
                                showpw ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</button>
                        <div className='mx-auto mb-6'>
                            {/* google */}
                            <button
                                onClick={handleRegisterGOOGLE}
                                className='btn-wide btn font-bold text-xl bg-orange text-orange-hover bg-light-green-hover text-light-green hover:font-bold'> Register with Google </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
