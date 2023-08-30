
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import SurahList from "../Pages/Home/Home/Shared/Surahs/Surahlist";
import SuraDetails from "../Pages/Home/Home/Shared/Surahs/SuraDetails";
import Hadis from "../Pages/Home/Home/Shared/Hadis/Hadis.jsx";
import DuasList from "../Pages/Home/Home/Shared/Duas/DuasList";
import MainPage from "../Pages/Control-Layout/MainPage";
import FourOfour from "../Components/Animation/fourOfour";
import Quiz from "../Pages/Home/Home/Shared/Quizes/Quiz";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import SeeMore from "../Components/Amal/SeeMore";
import Amal from "../Components/Amal/Amal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/surah',
        element: <SurahList />
      },
      {
        path: "/surah/:id",
        element: <SuraDetails></SuraDetails>
      },
      {
        path: '/hadis',
        element: <Hadis />,
      },
      {
        path: '/duas',
        element: <DuasList></DuasList>,
      },
      {
        path: '/quiz',
        element: <Quiz></Quiz>,
      },
      {
        path: "*",
        element: <FourOfour></FourOfour>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/",
        element: <Amal></Amal>,
      },
      {
        path: "/see-more",
        element: <SeeMore></SeeMore>,
      },
    ],
  },
]);
