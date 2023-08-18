import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'

import {
  RouterProvider,

  
} from "react-router-dom";

import {

  BrowserRouter, 
  // RouterProvider,
}  from "react-router-dom";
// import App from './App';
import { router } from './Routes/Routes';

// import { router } from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App></App> */}
    </BrowserRouter>
 
<HelmetProvider>


<div >
 <RouterProvider router={router} />
 </div>
</HelmetProvider>
  </React.StrictMode>,
)
