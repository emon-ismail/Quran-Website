import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/icon/icon5.png";
import porfolio from "../../../../../assets/icon/port.png";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    return (
        <nav className="w-full bg-[#2c364f] shadow fixed z-30">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="relative">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <div className="flex items-center">
                                <img src={logo} alt="Icon" className="w-20 h-16 max-sm:w-10" />
                                <Link
                                    className="btn okia__8110:btn-disabled btn-ghost normal-case text-sm font-roboto max-sm:text-sm text-white nokia__8110"
                                    to="/"
                                >
                                    Quran-Hadith
                                </Link>
                            </div>
                        </a>
                        <div className="md:hidden">
                            <button
                                className={`p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border ${
                                    navbar ? "bg-white" : ""
                                }`}
                                onClick={toggleNavbar}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
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
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  md:absolute md:top-20 md:left-0 md:w-full md:z-20  ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:hidden">
                            <li className="text-white hover:text-indigo-200">
                                <NavLink to="/" onClick={toggleNavbar}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <NavLink to="/surah" onClick={toggleNavbar}>
                                    Quran
                                </NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <NavLink to="/hadis" onClick={toggleNavbar}>
                                    Hadith
                                </NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <NavLink to="/duas" onClick={toggleNavbar}>
                                    Duas
                                </NavLink>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <NavLink to="/quiz" onClick={toggleNavbar}>
                                    Quiz
                                </NavLink>
                            </li>
                        </ul>
                        <div className="mt-3 space-y-2 md:hidden">
                            <a
                                href="https://isemon.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="mt-8"
                                    src={porfolio}
                                    alt="Icon"
                                    width="55"
                                    height="20"
                                    style={{ maxWidth: "100%" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="https://isemon.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={porfolio}
                            alt="Icon"
                            width="62"
                            height="20"
                            style={{ maxWidth: "100%" }}
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
