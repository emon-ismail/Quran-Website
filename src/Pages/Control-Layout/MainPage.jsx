import React from "react";
import Sidebar from "..//Control-Layout/Sidebar";
import NavPage from "./Navpage";
import NavBar from "../Home/Home/Shared/Navbar/Navbar";
import Footer from "../Home/Home/Shared/Footer/Footer";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div className="">
        { noHeaderFooter || <NavBar></NavBar>}
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12 '>
          {/* Sidebar */}
         {  noHeaderFooter ||
           <div className='hidden md:block md:col-span-1 bg-[#23304B] mt-0 md:mt-0 md:relative  '>
           {/* <Sidebar className="fixed top-0 left-0 right-0 "></Sidebar> */}
             <Sidebar className="fixed top-0 left-0 right-0 "></Sidebar>
         </div>
         }

          {/* Main Content */}
          <div className='col-span-12 md:col-span-11 pl-0'>
            <NavPage /> 
          </div>
        </div>
        { noHeaderFooter || <Footer></Footer>}
      </section>
    </React.Fragment>
  );
};

export default MainPage;
