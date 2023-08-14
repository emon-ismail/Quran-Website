import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex mt-20 h-[20px] select-container-1  ">
      <div className="flex flex-col h-[700px] p-3 bg-white shadow w-60 rounded-lg ">
        <div className="space-y-3">
          <div className="flex items-center">
            {/* <h2 className="text-xl font-bold">Dashboard</h2> */}
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                  <span>Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/surah" className="flex items-center p-2 space-x-3 rounded-md">
                  <span>Quran</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/orders" className="flex items-center p-2 space-x-3 rounded-md">
                  <span>Orders</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/settings" className="flex items-center p-2 space-x-3 rounded-md">
                  <span>Settings</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link to="/logout" className="flex items-center p-2 space-x-3 rounded-md">
                  <span>Logout</span>
                </Link>
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
