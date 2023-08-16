
// import { Link, NavLink } from "react-router-dom";

// const NavBar = () => {
//     const navOptions = (
//         <>
            
//           <div className="  ">
        

// <div className="md:hidden max-md:block ipad">
// <NavLink to="/" className="flex items-center p-2 space-x-3 rounded-md ">
//                    <span className="font-roboto text-sm">Home</span>
//                 </NavLink>

//   <NavLink to="/surah" className="flex items-center p-2 space-x-3 rounded-md">
//                    <span className="font-roboto text-sm">Quran</span>
//                 </NavLink>
//   <NavLink to="/hadis" className="flex items-center p-2 space-x-3 rounded-md">
//                    <span className="font-roboto text-sm">Hadis</span>
//                 </NavLink>
//   <NavLink to="/duas" className="flex items-center p-2 space-x-3 rounded-md">
//                    <span className="font-roboto text-sm">Duas</span>
//                 </NavLink>
// </div>


 

             
//           </div>


          
          

              
         

//         </>
//     );

//     return (
//         <div className=" fixed   bg-[#FFFDD0] text-black  shadow-sm font-mono full-width top-0 left-0 right-0 navbar z-10 bg-opacity-30 w-full p-4  max-sm:w-auto ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost  ">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5   " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-{} rounded-box w-auto h-auto">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="flex items-center  ">
//  <img src="/src/assets/icon/icon5.png" alt="Icon" className="w-20 h-30 max-sm:w-10 "/> 
//       <Link   className="btn btn-ghost normal-case text-xl font-roboto max-sm:text-sm " to="/">Quran-Hadith</Link>
//       </div>
                
//             </div>
//             <div className="navbar-center hidden lg:flex  ml-60">
//                 <ul className="menu menu-horizontal px-1">
//                     {navOptions}
//                 </ul>
//             </div>
            
//         </div>
//     );
// };

// export default NavBar;





// ..........

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function NavBar() {
//     const [navbar, setNavbar] = useState(false);

//     return (
//         // bg-black h-20 w-full flex items-center pl-10 space-x-4
//         <nav className=" md:fixed   bg-[#FEFEFE] text-black  shadow-sm top-0 p-0 left-0 right-0  z-10 bg-opacity-30 space-x-4   h-20 w-full flex items-center pl-10  max-sm:w-auto ">
//             <div className="justify-between px-4  lg:max-w-7xl   md:ml-30  ">
//                 <div>
//                     <div className="flex items-center justify-between py-3 md:py-5 md:block">
//                         <a href="javascript:void(0)">
//                         <div className="flex items-center  ">
// <img src="/src/assets/icon/icon5.png" alt="Icon" className="w-20 h-30 max-sm:w-10 nokia__8110:w-8 "/> 
//       <Link   className="btn btn-ghost normal-case text-xl font-roboto max-sm:text-sm text-green-500 nokia__8110" to="/">Quran-Hadith</Link>
//        </div>
                            
//                         </a>
//                         <div className="md:hidden ">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                             navbar ? "block" : "hidden"
//                         }`}
//                     >
//                         <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:hidden ">
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Home</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Blog</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">About US</a>
//                             </li>
//                             <li className="text-gray-600 hover:text-blue-600">
//                                 <a href="javascript:void(0)">Contact US</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }


import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-[#2c364f]  shadow md:fixed z-30">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="relative">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <div className="flex items-center">
                                <img src="/src/assets/icon/icon5.png" alt="Icon" className="w-20 h-16 max-sm:w-10 nokia__8110:w-8" />
                                <Link className="btn btn-ghost normal-case text-sm font-roboto max-sm:text-sm text-white nokia__8110" to="/">Quran-Hadith</Link>
                            </div>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`   flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  md:absolute md:top-20 md:left-0 md:w-full md:z-20  ${navbar ? "block" : "hidden"}`}>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:hidden ">
                            <li className="text-white hover:text-indigo-200 ">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul>
                        <div className="mt-3 space-y-2 md:hidden">
                            <a
                                href="javascript:void(0)"
                                className="inline-block w-full  px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                            >
                                Sign in
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    );
}

