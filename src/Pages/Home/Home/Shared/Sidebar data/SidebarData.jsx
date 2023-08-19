import * as FaIcons from "react-icons/fa";
import img1 from "./../../../../../assets/icon/home4.png";
import img2 from "./../../../../../assets/icon/quran2.png";
import img3 from "./../../../../../assets/icon/hadis.png";
import img4 from "./../../../../../assets/icon/doa.png";
import img5 from "./../../../../../assets/icon/quiz.png";

export const SidebarData=[
    {
        title: "Home",
        path: "/",
        icon: <FaIcons.FaHome />,
        image: <img src={img1} alt="Hadith Icon" />,
      },
      {
        title: "Quran",
        path: "/surah",
        icon: <FaIcons.FaGit />,
        image: <img src={img2} alt="Hadith Icon" />,
        
      },
      {
        title: "Hadith",
        path: "/hadis",
        icon: <FaIcons.FaGit />,
        image: <img src={img3} alt="Hadith Icon" />,  
      },
      {
        title: "Duas",
        path: "/duas",
        icon: <FaIcons.FaGit />,
        image: <img src={img4} alt="Hadith Icon" />,  
      },
      {
        title: "Quiz",
        path: "/quiz",
        icon: <FaIcons.FaGit />,
        image: <img src={img5} alt="Hadith Icon" />,  
      },
    
    //   {
    //     title: "CSS",
    //     path: "/css",
    //     icon: <FaIcons.FaCss3Alt />,
    //   },
    //   {
    //     title: "Php",
    //     path: "/php",
    //     icon: <FaIcons.FaPhp />,
    //   },
    //   {
    //     title: "Java",
    //     path: "/java",
    //     icon: <FaIcons.FaJava />,
    //   },
     
    //   {
    //     title: "Node",
    //     path: "/node",
    //     icon: <FaIcons.FaNodeJs />,
    //   },
    //   {
    //     title: "Figma",
    //     path: "/figma",
    //     icon: <FaIcons.FaFigma />,
    //   },
    //   {
    //     title: "Angular",
    //     path: "/angular",
    //     icon: <FaIcons.FaAngular />,
        
    //   },
    //   {
    //     title: "React",
    //     path: "/react",
    //     icon: <FaIcons. FaReact />,
       
    //   },
]