import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SurahList from "../Pages/Home/Home/Shared/Surahs/Surahlist";
import SuraDetails from "../Pages/Home/Home/Shared/Surahs/SuraDetails";
import HadisList from "../Pages/Home/Home/Shared/Hadis/HadisList";
import Duas from "../Pages/Home/Home/Shared/Duas/Duas";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/surah',
          element: <SurahList />,
        },
        {
          path:"/surah/:id",
          element:<SuraDetails></SuraDetails>
            },
            {
              path: '/hadislist',
              element: <HadisList />,
            },
            {
              path: '/duas',
              element: <Duas></Duas>,
            },
      ]
    },
  ]);