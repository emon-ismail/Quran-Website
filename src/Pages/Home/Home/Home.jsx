import { Helmet } from "react-helmet-async";
import Duas from "./Shared/Duas/Duas";
// import Surahlist from "./Shared/Surahs/Surahlist";

// import Banner from "../Banner/Banner";
// import Category from "../Category/Category";
// import Featured from "../Featured/Featured";
// import PopularMenu from "../PopularMenu/PopularMenu";
// import Testimonials from "../Testimonials/Testimonials";
// import BistroBoss from "./BistroBoss/BistroBoss";




const Home = () => {
    return (
        <div className="myComponentWithBg">
            <Helmet>
        <title>Apon Ghor |  Home </title>
      </Helmet>
<Duas></Duas>


      {/* <Surahlist></Surahlist> */}
      {/* <Surah></Surah> */}
         {/* <Banner></Banner>
     <Category></Category>
     <BistroBoss></BistroBoss>
   <PopularMenu></PopularMenu>
   <Featured></Featured>
   <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;