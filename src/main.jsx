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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
