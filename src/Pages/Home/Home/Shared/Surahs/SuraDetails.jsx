import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import quranData from "./../../../../../../public/quranupdate.json";

const SurahDetails = () => {
  const { id } = useParams();
  const surahIndex = parseInt(id);
  const initialSurah = quranData.find((item) => item.id === surahIndex);
 const [selectedSurah, setSelectedSurah] = useState(initialSurah);

  useEffect(() => {
    const newSurah = quranData.find((item) => item.id === surahIndex);
    setSelectedSurah(newSurah);
  }, [surahIndex]);

  if (!selectedSurah) {
    return <div>Surah not found</div>;
  }

  const handleSelectChange = (event) => {
    const selectedSurahId = parseInt(event.target.value);
    const newSurah = quranData.find((item) => item.id === selectedSurahId);
    setSelectedSurah(newSurah);
  };

  return (
    <div className="bg-[#172542] pb-20 " >
      

      <div className="grid grid-cols-3 gap-4 mt-4 relative">
        
  <div className="col-span-2 gap-4 overflow-y-auto relative z-80 mt-56 md:ml-20">
  <h1 className="text-white text-center mb-20 font-uthman-taha md:text-5xl ">  بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ </h1>
    {selectedSurah.verses.map((verse) => (
      <div
        key={`${verse.id}-${verse.chapter}-${verse.verse}`}
        className="p-4  bg-[#23304B]  container mx-auto "
      >
        <div className="text-lg font-bold tracking-tight text-right text-black">
          <p>
          {/* className="font-uthman-taha font-normal font-weight-400 text-3xl leading-9 p-8 text-[#1B365C]" */}
            <span className="text-[#6F6F8E] my-4  flex justify-between">
             <div className="text-[#30A961] font-roboto"> {verse.id} .{" "}</div>
              
              <div className="text-white font-al-qalam  font-normal font-weight-400 text-3xl leading-loose">
              {verse.text}
              </div>
              
            </span>{" "}
          </p>
          <p className="text-left font-roboto font-normal font-weight-400 text-lg font-roboto pt-8 leading-loose text-white mt-8">
  <div className="pb-8 border-b border-gray-300">{verse.translation}</div>
</p>

      
        </div>
      </div>
    ))}
  </div>
  <div className="col-span-0  overflow-y-auto relative z-20 md:ml-16 bg-[#23304B] px-8">
  <div className=" md:fixed top-4 h-[calc(100vh-4rem)] w-full">
  <div className=" md:mt-40 my-60 ">
        <select
          className="select select-accent w-full max-w-xs"
          value={selectedSurah.id}
          onChange={handleSelectChange}
        >
          <option disabled value="">
            Select a surah
          </option>
          {quranData.map((surah) => (
            <option key={surah.id} value={surah.id}>
              {surah.id}. {surah.name}
              <div>
                <h1> - {surah.transliteration}</h1>
                <h1> - {surah.translation}</h1>
              </div>
            </option>
          ))}
        </select>
      </div>
  </div>

  <img className=" md:w-60 md:ml-12 w-full h-auto mt-60 fixed" src="/src/assets/icon/sponsor.jpg" alt="" />

</div>

</div>







    </div>
  );
};

export default SurahDetails;
