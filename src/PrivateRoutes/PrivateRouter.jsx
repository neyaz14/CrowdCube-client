import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const disiredLocation = location.pathname;
    // console.log(location.pathname);
    const {Currentuser,currentloggedInUser, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    else if(currentloggedInUser){
        return children;
    }
    return (
       <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;