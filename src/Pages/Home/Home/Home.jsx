import { Helmet } from "react-helmet-async";

// import ComingSoon from "../../../Components/Animation/ComingSoon";
import RandomAyah from "../../../Components/Random Ayat/RandomAyah";







const Home = () => {
    return (
        <div className="bg-[#172542]">
            <Helmet>
        <title>Quran-Hadith |  Home </title>
      </Helmet>

<RandomAyah></RandomAyah>
{/* <ComingSoon></ComingSoon> */}


        </div>
    );
};

export default Home;