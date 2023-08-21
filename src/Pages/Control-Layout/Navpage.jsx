import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home/Home";
import SurahList from "../Home/Home/Shared/Surahs/Surahlist";
import Hadis from "../Home/Home/Shared/Hadis/Hadis";
import SurahDetails from "../Home/Home/Shared/Surahs/SuraDetails";
import DuaList from "../Home/Home/Shared/Duas/DuasList";
import Quiz from "../Home/Home/Shared/Quizes/Quiz";
import Login from "../Login/Login";

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
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
