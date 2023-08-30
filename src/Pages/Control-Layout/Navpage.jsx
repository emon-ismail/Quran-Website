import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home/Home";
import SurahList from "../Home/Home/Shared/Surahs/Surahlist";
import Hadis from "../Home/Home/Shared/Hadis/Hadis";
import SurahDetails from "../Home/Home/Shared/Surahs/SuraDetails";
import DuaList from "../Home/Home/Shared/Duas/DuasList";
import Quiz from "../Home/Home/Shared/Quizes/Quiz";
import Login from "../Login/Login";
import SignUp from "../../SignUp/SignUp";
import Shop from "../Shop/Shop";
import SeeMore from "../../Components/Amal/SeeMore";
import Amal from "../../Components/Amal/Amal";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah" element={<SurahList />} />
          <Route path="/hadis" element={<Hadis />} />
          <Route path="/surah/:id" element={<SurahDetails />} />
          <Route path="/duas" element={<DuaList />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp></SignUp>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/" element={<Amal></Amal>} />
          
          <Route path="/see-more" element={<SeeMore></SeeMore>} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
