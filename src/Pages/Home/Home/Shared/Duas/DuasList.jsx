import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function DuaList() {
  const [duas, setDuas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("duas.json")
        .then((response) => response.json())
        .then((data) => {
          setDuas(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  const toggleAccordion = (groupIndex) => {
    if (activeGroup === groupIndex) {
      setActiveGroup(null);
    } else {
      setActiveGroup(groupIndex);
    }
  };

  if (isLoading) {
    return (
      <div className="mt-20 p-12 bg-[#172542] ">
        <Helmet>
          <title>Quran-Hadith | Duas </title>
        </Helmet>

        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 md:h-60 md:w-60"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!duas || duas.length === 0) {
    return <div>No duas available.</div>;
  }

  return (
    <div className="flex p-8 mt-[85px] md:mt-24 bg-[#172542] ">
      <div className="w-1/3 overflow-y-auto max-h-screen ">
        <div className="sticky top-0 ">
          {duas.map((duaGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="mt-4 text-center cursor-pointer  text-white "
              onClick={() => toggleAccordion(groupIndex)}
            >
              <div className="bg-[#23304B] py-4 rounded-md ">
                {" "}
                <Link className="bg-[#23304B] nokia__8110:px-0 nokia__8110:py-0  px-4 py-3 md:hover:bg-black md:active:bg-green-600 hover:text-green-600 focus:outline-none focus:text-green-600 md:focus:ring md:focus:ring-green-600 font-roboto font-bold text-[9px] md:text-lg nokia__8110   ">
                  {duaGroup.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 overflow-y-auto max-h-screen p-4">
        {duas.map((duaGroup, groupIndex) => (
          <ul
            key={groupIndex}
            className={activeGroup === groupIndex ? "" : "hidden"}
          >
            {duaGroup.duas ? (
              duaGroup.duas.map((dua, duaIndex) => (
                <li key={duaIndex} className="p-4 bg-[#23304B]">
                  <h3 className="mb-8 font-roboto text-lg md:text-2xl font-semibold text-[#7cff80] nokia__8110 ">
                    {dua.title || "Title not available"}
                  </h3>
                  {/* <div className="w-52 border-b  border-gray-300 mb-4"></div> */}
                  <p className="text-white mb-4 font-al-qalam leading-relaxed md:leading-loose font-extralight text-base md:text-3xl nokia__8110">
                    {"    "} {dua.arabic || "Arabic text not available"}
                  </p>
                  <p className="text-white leading-relaxed md:leading-loose font-extralight text-base md:text-2xl nokia__8110">
                    <span className="text-[#7cff80]">Translation:</span>{" "}
                    {dua.translation || "Translation not available"}
                  </p>
                  <p className="text-white leading-relaxed md:leading-loose font-extralight text-base md:text-2xl nokia__8110 mt-4">
                    <span className="text-[#7cff80]">Reference:</span>{" "}
                    {dua.reference || "Translation not available"}
                  </p>
                  <div className="pb-8 border-b border-gray-300"></div>
                </li>
              ))
            ) : (
              <li>No duas available for this group.</li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default DuaList;
