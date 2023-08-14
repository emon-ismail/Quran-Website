import  { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const SurahList = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredSurahs, setFilteredSurahs] = useState([]);

  useEffect(() => {
    fetch("/public/bn.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const handleSearch = () => {
    const filtered = list.filter((item) =>
      item.transliteration.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredSurahs(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput, list]);



  return (
    <div className="bg-[#F6F8F9]" >
      <Helmet>
        <title> Quran </title>
      </Helmet>
      {/* <h1 className="text-center mx-auto">ciis hic iusto. Neque tempore veniam alias molestias et in eveniet culpa dolores laborum, ipsum quod?</h1> */}
      <div className="pt-32   input-success mx-auto max-w-lg select__container-search">

        
      <div className="flex items-center  p-2  ">
      
      <div className="mr-2">
        <img src="/src/assets/icon/search.png" alt="Search Icon" className="w-10 h-10" />
      </div>
      <input 
      
          type="text"
          placeholder="Search surah...  "
          
          className="block  p-2 border rounded-md input-success w-[400px] md:w-[500px] mx-auto mt-0"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          
        />
        
        
      </div>
      </div>

      <div className="   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 max-lg:grid-cols-1 max-xl:grid-cols-1 max-md:grid-cols-1     gap-y-4 mt-20 mb-8  " >
        {(searchInput === '' ? list : filteredSurahs).map((item) => (
          <div
          
          key={item.id}
          className=" mx-4 lg:col-span-1 shadow-xl md:ml-[300px] md:h-[150px] md:w-[400px]  rounded-r-3xl rounded-l-3xl border border-green-500 border-1  p-4  mb-6  group hover:bg-black"
          // hover: ransition duration-300 ease-in-out hover:scale-110
          // style={{ width: "300px", height: "390px" }}
        >
          <Link to={`/surah/${item.id}`} className="group hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex justify-between">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-green-500 font-roboto ">
            {item.id}.    {item.transliteration}
          </h1>
          <h5 className="mb-3 text-xl font-normal font-uthman-taha text-green-500">
          {item.name}
          </h5>
          </div>
          <h5 className="mb-3 text-lg font-normal font-roboto text-[#1B365C] group-hover:text-white">
            ( {item.translation} )
          </h5>
          <div className="flex justify-between mt-5">
          <h5 className="mb-3 text-xs font-medium font-roboto text-gray-500 group-hover:text-white ">
            <span className="capitalize">{item.type}</span>
          </h5>
          <h1 className="mb-3 text-xs font-medium font-roboto text-gray-500 group-hover:text-white ">
            <span> {item.total_verses} Ayaat</span>
          </h1>
          </div></Link>
          {/* <button className="btn btn-outline glass btn-success"><Link to={`/surah/${item.id}`} >
            Read
          </Link></button> */}
        </div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
