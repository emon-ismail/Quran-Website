import { Helmet } from "react-helmet-async";
import Duas from "./Shared/Duas/Duas";
import Sidebar from "./Shared/Navbar/Sidebar";
import ComingSoon from "../../../Components/Animation/ComingSoon";

// import Surahlist from "./Shared/Surahs/Surahlist";

// import Banner from "../Banner/Banner";
// import Category from "../Category/Category";
// import Featured from "../Featured/Featured";
// import PopularMenu from "../PopularMenu/PopularMenu";
// import Testimonials from "../Testimonials/Testimonials";
// import BistroBoss from "./BistroBoss/BistroBoss";




const Home = () => {
    return (
        <div className="">
            <Helmet>
        <title>Apon Ghor |  Home </title>
      </Helmet>
{/* <Duas></Duas> */}
{/* <Sidebar></Sidebar> */}
{/* <LottiePlayer animationData={comingsoon} loop={true} /> */}

<ComingSoon></ComingSoon>
{/* <Lottie
  animationData={animationData}
  loop={true}
  autoplay={true}
  speed={1.5}
  style={{ width: '900px', height: '500px',margin:'auto',padding:'10px' ,'margin-top':"90px"}}
/> */}

        
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