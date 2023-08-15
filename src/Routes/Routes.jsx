import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SurahList from "../Pages/Home/Home/Shared/Surahs/Surahlist";
import SuraDetails from "../Pages/Home/Home/Shared/Surahs/SuraDetails";
import Duas from "../Pages/Home/Home/Shared/Duas/Duas";
import Hadis from "../Pages/Home/Home/Shared/Hadis/Hadis.jsx";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'*',
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
              path: '/hadis',
              element: <Hadis/>,
            },
            {
              path: '/duas',
              element: <Duas></Duas>,
            },
            {
              path: '/duas',
              element: <Duas></Duas>,
            },
      ]
    },
  ]);