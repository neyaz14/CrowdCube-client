import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Mainlayout from '../MainLayout/Mainlayout';
import HomePage from '../Pages/HomePage';
import AllCampaign from '../Pages/AllCampaign';
import AddNewCampaign from '../PrivateRoutes/AddNewCampaign';
import MyCampaign from '../PrivateRoutes/MyCampaign';
import MyDonations from '../PrivateRoutes/MyDonations';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import PrivateRouter from '../PrivateRoutes/PrivateRouter';
import CardDetails from '../PrivateRoutes/CardDetails';
import UpdateCamp from '../PrivateRoutes/UpdateCamp';
import ErrorPage from '../Pages/ErrorPage';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: ()=>fetch(' https://crowdcube-server-site-sigma.vercel.app/campaign')
        },{
            path: '/allCampaign',
            element: <AllCampaign></AllCampaign>,
            loader: ()=>fetch(' https://crowdcube-server-site-sigma.vercel.app/campaign')
        },{
            path: '/addNewCampaign',
            element: <PrivateRouter><AddNewCampaign></AddNewCampaign></PrivateRouter>
        },{
            path: '/myCampaign',
            element: <PrivateRouter><MyCampaign></MyCampaign></PrivateRouter>,
            loader: ()=>fetch(' https://crowdcube-server-site-sigma.vercel.app/campaign')
        },{
            path: '/myDonations',
            element: <PrivateRouter><MyDonations></MyDonations></PrivateRouter>,
            loader:()=>  fetch(' https://crowdcube-server-site-sigma.vercel.app/userDonation')
        },{
            path: '/login',
            element: <Login></Login>,
            loader: ()=> fetch(' https://crowdcube-server-site-sigma.vercel.app/users')
        },{
            path: '/register',
            element: <Register></Register>
        },{
            path: '/cardDetails/:id',
            element: <PrivateRouter><CardDetails></CardDetails></PrivateRouter> ,
            loader: ()=>fetch(' https://crowdcube-server-site-sigma.vercel.app/campaign')
        },{
            path: 'updateCamp/:id',
            element:<PrivateRouter> <UpdateCamp></UpdateCamp></PrivateRouter>,
            loader: ()=>fetch(` https://crowdcube-server-site-sigma.vercel.app/campaign`)
        }
      ]
    },
  ]);
  

export default Router;