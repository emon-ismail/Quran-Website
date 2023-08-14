
import { Link } from "react-router-dom";

const NavBar = () => {
    const navOptions = (
        <>
            
          <div className="  ">
          <button className="  max-lg:hidden max-xl:hidden  md:hidden group relative h-11 w-20 overflow-hidden rounded-lg bg-[#008000]  text-lg shadow ml-0 md:mr-[100px]  mb-4 mb:my-0">
    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-white group-hover:text-black"><Link to="/">Home</Link></span>
  </button>

  <button className="md:hidden    group relative h-11 w-20 overflow-hidden rounded-lg bg-[#008000]  text-lg shadow ml-0 md:mr-[100px]  mb-4 mb:my-0">
    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-white group-hover:text-black"><Link to="/surah">Quran</Link></span>
  </button>

  <button className=" md:hidden  group relative h-11 w-20 overflow-hidden rounded-lg bg-[#008000]  text-lg shadow ml-0 md:mr-[100px]  mb-4 mb:my-0">
    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-white group-hover:text-black"><Link to="/hadislist">Hadis</Link></span>
  </button>

  <button className=" md:hidden    group relative h-11 w-20 overflow-hidden rounded-lg bg-[#008000]  text-lg shadow ml-0 md:mr-[100px]  mb-4 mb:my-0">
    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-white group-hover:text-black "><Link to="/duas">Duas</Link></span>
  </button>

             
          </div>


            <button className=" max-lg:hidden max-xl:hidden  btn mb-4 text-white bg-[#33b249] ml-0 md:ml-[200px]"><Link to="#">Login</Link></button>
          

              
         

        </>
    );

    return (
        <div className=" fixed   bg-[#FFFDD0] text-black  shadow-sm font-mono full-width top-0 left-0 right-0 navbar z-10 bg-opacity-30 w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-{} rounded-box w-auto h-auto">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex items-center  ">
 <img src="/src/assets/icon/icon5.png" alt="Icon" className="w-20 h-30 "/> 
      <Link   className="btn btn-ghost normal-case text-xl font-roboto " to="/">Quran-Hadith</Link>
      </div>
                
            </div>
            <div className="navbar-center hidden lg:flex  ml-60">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            
        </div>
    );
};

export default NavBar;
