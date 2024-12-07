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

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path: '/',
            element: <HomePage></HomePage>,
            loader: ()=>fetch('http://localhost:5000/campaign')
        },{
            path: '/allCampaign',
            element: <AllCampaign></AllCampaign>,
            loader: ()=>fetch('http://localhost:5000/campaign')
        },{
            path: '/addNewCampaign',
            element: <PrivateRouter><AddNewCampaign></AddNewCampaign></PrivateRouter>
        },{
            path: '/myCampaign',
            element: <PrivateRouter><MyCampaign></MyCampaign></PrivateRouter>,
            loader: ()=>fetch('http://localhost:5000/campaign')
        },{
            path: '/myDonations',
            element: <PrivateRouter><MyDonations></MyDonations></PrivateRouter>
        },{
            path: '/login',
            element: <Login></Login>
        },{
            path: '/register',
            element: <Register></Register>
        },{
            path: '/cardDetails/:id',
            element: <PrivateRouter><CardDetails></CardDetails></PrivateRouter> ,
            loader: ()=>fetch('http://localhost:5000/campaign')
        },{
            path: 'updateCamp/:id',
            element:<PrivateRouter> <UpdateCamp></UpdateCamp></PrivateRouter>,
            loader: ()=>fetch(`http://localhost:5000/campaign`)
        }
      ]
    },
  ]);
  

export default Router;