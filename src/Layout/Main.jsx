import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import Sidebar from "../Pages/Home/Home/Shared/Navbar/Sidebar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;