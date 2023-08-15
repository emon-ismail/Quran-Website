import React from "react";


import Sidebar from "..//Control-Layout/Sidebar";

import NavPage from "./Navpage";
import NavBar from "../Home/Home/Shared/Navbar/Navbar";
// import Sidebar from './Sidebar'

const MainPage = () => {
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div className="">
          <NavBar />
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className=' col-span-0 bg-[#FEFEFE] mt-0 md:col-span-2   '>
              <Sidebar className="fixed top-0 left-0 right-0  "></Sidebar>
          </div>

          <div className='col-span-9   pl-2 md:col-span-10  '>
              <NavPage/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;