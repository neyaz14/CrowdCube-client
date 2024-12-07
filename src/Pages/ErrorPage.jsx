import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen bg-emerald-100'>
            <div className='py-7 space-y-7 flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold text-emerald-900 text-center'>Error </h1>
            <h1 className='text-4xl font-bold text-emerald-900 text-center'>You come into wrong url </h1>
            <button className='btn  btn-wide bg-emerald-50 text-emerald-900'><Link to={'/'}>Home</Link></button>
        </div>
        </div>
    );
};

export default ErrorPage;