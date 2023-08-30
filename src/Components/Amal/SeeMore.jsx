import { useState, useEffect } from 'react';
import { FaShare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import this if you're using React Router

const SeeMore = () => {
  const [amalData, setAmalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = parseInt(localStorage.getItem('currentPage'));
    return isNaN(savedPage) ? 1 : savedPage;
  });
  const itemsPerPage = 5;
  const location = useLocation(); // Get the current location from React Router

  useEffect(() => {
    // Fetch JSON data
    fetch('/amal.json')
      .then(response => response.json())
      .then(data => setAmalData(data))
      .catch(error => console.error('Error fetching data:', error));

    // Set currentPage based on URL parameter
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page'));
    if (!isNaN(page)) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page);
    }
  }, [location.search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = amalData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber);
  };

  const generatePaginationButtons = () => {
    return Array.from({ length: Math.ceil(amalData.length / itemsPerPage) }, (_, index) => (
      <button
        key={index}
        onClick={() => paginate(index + 1)}
        className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}  text-white mb-8 w-full md:w-auto nokia__8110:w-auto bg-black ` }
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="flex flex-col items-center pt-40 bg-[#172542] px-2 nokia__8110">
      <h1 className="md:text-2xl text-base font-bold mb-8 text-green-500 border-b border-green-600 pb-5">৭০ টি ছোট আমল তবে পুরস্কার অনেক বড়।</h1>
      <div className="w-full md:w-[1200px] bg-[#23304B] p-4 rounded-lg mb-8">
        {currentItems.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl font-semibold text-green-500 mb-4 nokia__8110">{item.amal_number}</p>
            <p className="text-white">{item.description}</p>

            <a
              href={`whatsapp://send?text=${item.amal_number}%0A${item.description}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-share bg-green-500  btn btn-xs text-black hover:text-white mt-8 nokia__8110"
            >
              <i className="fab fa-whatsapp mr-1 "> <FaShare></FaShare> </i> Share on WhatsApp
            </a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 w-80 md:flex justify-center join nokia__8110-flex " >
        {generatePaginationButtons()}
      </div>
    </div>
  );
};

export default SeeMore;
