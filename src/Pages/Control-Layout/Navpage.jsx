import React from "react";
import { Routes, Route } from "react-router-dom";
// import Angular from '../pages/Angular'

// import Figma from '../pages/Figma'
// import Git from '../pages/Git'
// // import Home from '../pages/Home'

// import Node from '../pages/Node'
// import Php from '../pages/Php'
// import PageReact from '../pages/PageReact'
import Home from "../Home/Home/Home";
import SurahList from "../Home/Home/Shared/Surahs/Surahlist";
import Hadis from "../Home/Home/Shared/Hadis/Hadis";
import SurahDetails from "../Home/Home/Shared/Surahs/SuraDetails";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah" element={<SurahList />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/surah/:id" element={<SurahDetails />} />
        {/* <Route path="/php" element={<Php />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/git" element={<Git />} />
        <Route path="/node" element={<Node />} />
        <Route path="/react" element={<PageReact />} />
        <Route path="/angular" element={<Angular />} /> */}
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;