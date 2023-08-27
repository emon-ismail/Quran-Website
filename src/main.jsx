import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'

import {
  RouterProvider,

  
} from "react-router-dom";

import {


  // RouterProvider,
}  from "react-router-dom";
// import App from './App';
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

// import { router } from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 
<AuthProvider>
<HelmetProvider>
<div >
 <RouterProvider router={router} />
 </div>
</HelmetProvider>
</AuthProvider>


  </React.StrictMode>,
)
