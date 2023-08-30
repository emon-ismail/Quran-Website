import { Helmet } from "react-helmet-async";

// import ComingSoon from "../../../Components/Animation/ComingSoon";
import RandomAyah from "./Shared/Random Ayat/RandomAyah";
import Cover from "./Shared/Cover/Cover";
import Amal from "../../../Components/Amal/Amal";







const Home = () => {
    return (
        <div className="bg-[#172542]">
            <Helmet>
        <title>Quran-Hadith |  Home </title>
      </Helmet>
      <Cover></Cover>

<RandomAyah></RandomAyah>
{/* <ComingSoon></ComingSoon> */}
<Amal></Amal>
        </div>
    );
};

export default Home;