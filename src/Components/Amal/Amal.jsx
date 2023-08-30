import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Amal = () => {
  const [amalData, setAmalData] = useState([]);

  useEffect(() => {
    // Fetch JSON data
    fetch('/amal.json')
      .then(response => response.json())
      .then(data => setAmalData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  // <div className="pb-8 border-b border-gray-300 text-sm  md:text-lg leading-loose">{verse.translation}</div>

  return (
    <div className="flex flex-col items-center pb-12">
      <h1 className=" text-base md:text-2xl font-bold mb-8 text-green-500  border-b border-green-600 pb-5">৭০ টি ছোট আমল তবে পুরস্কার অনেক বড়।</h1>
      
      <div className="w-full md:w-[1300px] bg-[#23304B] p-4 rounded-lg pb-12">
        {amalData.slice(0, 3).map((item, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl font-semibold text-green-500 mb-4">{item.amal_number}</p>
            <p className="text-white py-1">{item.description}</p>
          </div>
        ))}
      <div className="flex justify-center mt-8">
          <Link to="/see-more" className=" btn btn-success cursor-pointer">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Amal;
