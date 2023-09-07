import  { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import logo from "/src/assets/icon/icon5.png";

import sun from "../../../../../assets/icon/sun.png";
import moon from "../../../../../assets/icon/moon.png";
import profile from "../../../../../../src/assets/icon/profile1.png";

export default function NavBar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

  

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const [ setNavbarOpen] = useState(false);
    const { user } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {})
    //         .catch(error => console.log(error));
    // };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const navOptions = (
        <div className={`grid grid-cols-1 gap-8 text-${theme === 'light' ? 'black' : 'white'}`}>
            <li className="mt-4"><NavLink to="/" onClick={closeNavbar}>Home</NavLink></li>
            <li><NavLink to="/surah" onClick={closeNavbar}>Quran</NavLink></li>
            <li><NavLink to="/hadis" onClick={closeNavbar}>Hadith</NavLink></li>
            <li><NavLink to="/duas" onClick={closeNavbar}>Duas</NavLink></li>
            <li><NavLink to="/quiz" onClick={closeNavbar}>Quiz</NavLink></li>
            <li><NavLink to="/shop" onClick={closeNavbar}>Shop</NavLink></li>
        </div>
    );
    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('my-drawer-3');
        if (drawerCheckbox) {
          drawerCheckbox.checked = false;
        }
      };
      
    return (
       

            <nav  className="w-full ">
         
            
            <div className="drawer shadow fixed z-30 mx-auto  "  >
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={`w-full navbar mx-auto ${theme === 'light' ? 'bg-white' : 'bg-[#2c364f]'}  shadow fixed z-30 py-4`}>
      <div className="flex-none lg:hidden ">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

      <div className="flex-1 px-2 md:mx-40">
      <div className="flex items-center ">
                                <img src={logo} alt="Icon" className=" w-12 h-12 md:w-20 md:h-16 " />
                                <Link
                                    className={`btn okia__8110:btn-disabled btn-ghost normal-case text-sm font-roboto max-sm:text-xs  text-${theme === 'light' ? 'black' : 'white'} nokia__8110`}
                                    to="/"
                                    onClick={closeNavbar}
                                >
                                    Quran-Hadith
                                </Link>
                            </div>
      </div>
      <div className="md:mx-40">
      <button className={`btn btn-square btn-ghost md:mr-8 ml-20   `}>
                                <label className={`swap swap-rotate w-8 h-8`}>
                                    <input
                                        type="checkbox"
                                        onChange={handleToggle}
                                        checked={theme === "light" ? false : true}
                                    />
                                    <img src={sun} alt="light" className={`w-7 h-7 swap-on`} />
                                    <img src={moon} alt="dark" className={`w-8 h-8 swap-off`} />
                                </label>
                            </button>
      <div className="flex-none  lg:block " >
        <ul className="menu menu-horizontal">
   
        <div className={` `}>
                    {user ? (
                        <div className={`flex items-center `}>
                            {/* <button onClick={handleLogOut} className={`btn btn-ghost text-${theme === 'light' ? 'black' : 'white'} bg-green-500 `}>
                                LogOut
                            </button> */}
                            <div className={`ml-8 flex items-center`}>
                           <Link to='/profile'>

                           <img 
  src={user?.photoURL ? user.photoURL : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."}
  className="border w-10 h-10 rounded-full"
  alt="Profile"
  width={40} // Replace with your desired width
  height={40} // Replace with your desired height
  onError={(e) => {
    e.target.onerror = null;
e.target.src = profile;
  }}
/>
                           {/* <img
               
               src={user?.photoURL ? user.photoURL : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/.../"  }  alt="Profile"

                referrerPolicy='no-referrer'
              
                className=' border w-12 h-12 rounded-full bg-gray-500 border-gray-700'

               
                
              /> */}


{/* <div>
<img 
  src={user?.photoURL ? user.photoURL : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."}
  alt="Profile"
  width={40} // Replace with your desired width
  height={40} // Replace with your desired height
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = profile;
  }}
/>

    </div> */}
                           </Link>
                                <span className={`text-${theme === 'light' ? 'black' : 'white'} ml-4`}>
                                    
                                    {/* <Link to='/profile' className=' text-stone-50 mr-5 hover:text-blue-900 font-bold border-2 p-2'>
                                    {user?.displayName}
              </Link> */}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className={`btn btn-outline btn btn-sm btn-accent text-${theme === 'light' ? 'black' : 'white'}`}>
                            Login
                        </Link>
                    )}
                </div>

        </ul>
      </div>
      </div>




      
    </div>
    {/* Page content here */}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay "></label> 
    <ul className=" p-4 w-40 min-h-full bg-base-200 mt-[85px] " >
      {/* Sidebar content here */}

    <li
    onClick={closeDrawer}
   >
        
    {navOptions}
    </li>
    
      
    </ul>
    
  </div>
</div>
            
            </nav>
        
            


    );
}
