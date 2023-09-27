import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';

import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import ErrorElement from './components/ErrorElement/ErrorElement';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,

    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
        // element:<Donation></Donation>
      },
      {
        path:'/home/:id',
        element:<DonationDetails></DonationDetails>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('/jobs.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
