import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import logo from "/src/assets/icon/icon5.png";
import { FaUser } from 'react-icons/fa';
import sun from "../../../../../assets/icon/sun.png";
import moon from "../../../../../assets/icon/moon.png";
import profile from "../../../../../../src/assets/icon/profile.png";

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

    const [navbarOpen, setNavbarOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const navOptions = (
        <div className={`grid grid-cols-4 gap-8 text-${theme === 'light' ? 'black' : 'white'}`}>
            <li><NavLink to="/" onClick={closeNavbar}>Home</NavLink></li>
            <li><NavLink to="/surah" onClick={closeNavbar}>Quran</NavLink></li>
            <li><NavLink to="/hadis" onClick={closeNavbar}>Hadith</NavLink></li>
            <li><NavLink to="/duas" onClick={closeNavbar}>Duas</NavLink></li>
            <li><NavLink to="/quiz" onClick={closeNavbar}>Quiz</NavLink></li>
            <li><NavLink to="/shop" onClick={closeNavbar}>Shop</NavLink></li>
        </div>
    );

    return (
        <nav className={`w-full ${theme === 'light' ? 'bg-white' : 'bg-[#2c364f]'} shadow fixed z-30`}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="relative">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <div className="flex items-center">
                                <img src={logo} alt="Icon" className="w-20 h-16 max-sm:w-10" />
                                <Link
                                    className={`btn okia__8110:btn-disabled btn-ghost normal-case text-sm font-roboto max-sm:text-sm text-${theme === 'light' ? 'black' : 'white'} nokia__8110`}
                                    to="/"
                                    onClick={closeNavbar}
                                >
                                    Quran-Hadith
                                </Link>
                            </div>
                        </a>
                        <div className="md:hidden">

                        <button className={`btn btn-square btn-ghost mr-8  `}>
                                <label className={`swap swap-rotate w-12 h-12`}>
                                    <input
                                        type="checkbox"
                                        onChange={handleToggle}
                                        checked={theme === "light" ? false : true}
                                    />
                                    <img src={sun} alt="light" className={`w-8 h-8 swap-on`} />
                                    <img src={moon} alt="dark" className={`w-8 h-8 swap-off`} />
                                </label>
                            </button>
                            <button
                                className={`p-2 text-${theme === 'light' ? 'black' : 'white'} rounded-md outline-none focus:border-gray-400 focus:border ${
                                    navbarOpen ? "bg-white" : ""
                                }`}
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 text-${theme === 'light' ? 'black' : 'white'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0  md:absolute md:top-20 md:left-0 md:w-full md:z-20 ${
                            navbarOpen ? "block" : "hidden"
                        }`}
                    >
                        
                        <div className="mt-3 space-y-2 md:hidden p-4">
                            {user ? (
                                <div className="flex items-center justify-end mb-4">
                                    {/* <span className={`text-${theme === 'light' ? 'black' : 'white'}`} >{user?.displayName}</span> */}
                                    <span className="text-green-500 font-bold" ><span className="text-green-600 font-medium">Welcome,</span> <br /> {user?.displayName}</span>
                                    {/* <FaUser className={`w-6 h-6 text-${theme === 'light' ? 'black' : 'white'} ml-2`} /> */}
                                    <FaUser className="w-8 h-8 text-green-600 ml-1" />
                                    <button onClick={handleLogOut} className={`btn btn-ghost text-${theme === 'light' ? 'black' : 'white'}`}>
                                        LogOut
                                    </button>
                                    
                                </div>
                            ) : (
                                <Link to="/login" className={`btn btn-outline btn-accent text-${theme === 'light' ? 'black' : 'white'}`}>
                                    Login
                                </Link>

                                
                            )}
                           
                        </div>
                        <ul className="items-center justify-center  md:flex md:space-x-6 md:space-y-0 md:hidden p-4">
                            {navOptions}
                        </ul>


                    </div>
                </div>
                <div className={`hidden space-x-2 md:inline-block ml-96`}>
                    {user ? (
                        <div className={`flex items-center `}>
                            <button onClick={handleLogOut} className={`btn btn-ghost text-${theme === 'light' ? 'black' : 'white'} bg-green-500 `}>
                                LogOut
                            </button>
                            <div className={`ml-8 flex items-center`}>
                                <img src={profile} alt="" />
                                <span className={`text-${theme === 'light' ? 'black' : 'white'} ml-4`}>{user?.displayName}</span>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className={`btn btn-outline btn btn-sm btn-accent text-${theme === 'light' ? 'black' : 'white'}`}>
                            Login
                        </Link>
                    )}
                </div>
                <button className={`hidden md:block  btn btn-square btn-ghost `}>
                    <label className={`swap swap-rotate w-8 h-8`}>
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true}
                        />
                        <img src={sun} alt="light" className={`w-2 h-2 md:w-8 md:h-8 swap-on`} />
                        <img src={moon} alt="dark" className={`w-2 h-2 md:w-8 md:h-8 swap-off`} />
                    </label>
                </button>
            </div>
        </nav>
    );
}
