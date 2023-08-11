import { Link } from "react-router-dom"


const componentName = () => {
    return (
        <div
        className="content__button flex flex-row items-center justify-evenly md:flex-row w-auto md:w-[48rem] container mx-auto rounded-md border border-solid border-gray-100 bg-gray-50 p-4  my-28 md:my-18">
    
  
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mb-4 mb:my-0">
    <div className="absolute inset-0 w-4 bg-[#008000] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white  "><Link to="#">Ramadan Duas</Link></span>
  </button>
  
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#008000]  text-lg shadow mb-4 mb:my-0">
        <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-white group-hover:text-black"><Link to="#">Dua Categories</Link></span>
  </button>

  <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-48 h-12 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative"><Link to="#">Dua Categories</Link></span>
</a>
<button className="text-[#667085] font-Inter text-base font-semibold leading-6 mb-6 md:mb-0">
        Dua Categories
        </button>
    
        {/* <button className="text-[#667085] font-Inter text-base font-semibold leading-6 mb-6 md:mb-0">
        Dua Categories
        </button>
        <button className="text-[#667085] font-Inter text-base font-semibold leading-6 mb-6 md:mb-0">
    Zikr
        </button> */}
      </div>
    )
}

export default componentName