import React from 'react'
import {SidebarData} from '../../Pages/Home/Home/Shared/Sidebar data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    // const activeLink = '  active mt-7 pl-7  h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
    // const activeLink = '  hover:bg-black  bg-black px-7 font-roboto mt-7 btn   flex justify-center items-center hover:text-white text-green-500 text-2xl space-x-1 font-bold   btn-xs sm:btn-sm md:btn-md lg:btn-lg '

    // const normalLink = 'hover:text-white hover:bg-black  text-black font-roboto px-7 mt-7 btn flex justify-center items-center text-2xl space-x-1 font-bold btn-xs sm:btn-sm md:btn-md lg:btn-lg ';
    


  return (
    <React.Fragment>
    <section>
      <div className="text-black fixed top-20 my-0   hidden md:block mr-[12rem] py-4 ">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                         <NavLink
      to={item.path}
      className="menu  h-auto border rounded bg-base-100 menu-normal lg:menu-normal mt-4 flex flex-col items-center justify-center  focus:ring-2 focus:ring-blue-500 focus:outline-none active:ring-2 active:ring-blue-700 shadow-md ml-4 md:w-24 "
    >
      <div className='flex items-center justify-center'>
        <span className='w-4 h-4 mr-4'>{item.image}</span>
        <span className='text-sm'>{item.title}</span>
      </div>
    </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar