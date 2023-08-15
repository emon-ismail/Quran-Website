import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex mt-20 h-[20px] select-container-1  max-xl:hidden">
      <div className="flex flex-col h-[700px] p-3 bg-white shadow w-60 rounded-lg ">
        <div className="space-y-3">
          <div className="flex items-center">
            {/* <h2 className="text-xl font-bold">Dashboard</h2> */}
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink to="/" className="flex items-center p-2 space-x-3 rounded-md">
                    <img className="w-8 h-8" src="/src/assets/icon/home4.png" alt="" />    <span className="font-roboto text-sm">Home</span>
                </NavLink>
    
                
              </li>
              <li className="rounded-sm">
                <NavLink to="/surah" className="flex items-center p-2 space-x-3 rounded-md">
                <img className="w-8 h-8" src="/src/assets/icon/quran2.png" alt="" />  <span className="">Quran</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
              <NavLink to="/hadis" className="flex items-center p-2 space-x-3 rounded-md">
                    <img className="w-8 h-8" src="/src/assets/icon/hadis.png" alt="" />    <span className="font-roboto text-sm">Hadith</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
              <NavLink to="/duas" className="flex items-center p-2 space-x-3 rounded-md">
                    <img className="w-8 h-8" src="/src/assets/icon/doa.png" alt="" />    <span className="font-roboto text-sm">Duas</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
              <NavLink to="/" className="flex items-center p-2 space-x-3 rounded-md">
                    <img className="w-8 h-8" src="/src/assets/icon/zikr.png" alt="" />    <span className="font-roboto text-sm">Zikr</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <h1></h1>
        </div>
      </div> */}
    </div>
  );
}
