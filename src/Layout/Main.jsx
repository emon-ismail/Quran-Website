import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import Sidebar from "../Pages/Home/Home/Shared/Navbar/Sidebar";
import MainPage from "../Pages/Control-Layout/MainPage";


const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <MainPage></MainPage>
            {/* <Sidebar></Sidebar> */}
            {/* <App></App> */}
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;