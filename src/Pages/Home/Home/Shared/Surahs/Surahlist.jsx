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
    <div>
      <Helmet>
        <title> Quran </title>
      </Helmet>
      <div className="mt-40 input-success mx-auto max-w-lg">

        
      <div className="flex items-center  p-2 ">
      
      <div className="mr-2">
        <img src="/src/assets/icon/search.png" alt="Search Icon" className="w-10 h-10" />
      </div>
      <input
      
          type="text"
          placeholder="Search surah...  "
          
          className="block  p-2 border rounded-md input-success w-[400px] md:w-[500px] mx-auto"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          
        />
        
        
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20 py-4  ">
        {(searchInput === '' ? list : filteredSurahs).map((item) => (
          <div
            key={item.id}
            className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
            style={{ width: "300px", height: "390px" }}
          >
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-green-500">
              {item.id}. {item.name}
            </h1>
            <h5 className="mb-3 text-3xl font-normal text-gray-700 dark:text-gray-400">
              {item.transliteration}
            </h5>
            <h5 className="mb-3 text-3xl font-normal dark:text-gray-400 text-green-600">
              {item.translation}
            </h5>
            <h5 className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
              <i>Type: {item.type}</i>
            </h5>
            <h1 className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
              <i>Total Verse: {item.total_verses}</i>
            </h1>
            <button className="btn btn-outline glass btn-success"><Link to={`/surah/${item.id}`} >
              Read
            </Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
