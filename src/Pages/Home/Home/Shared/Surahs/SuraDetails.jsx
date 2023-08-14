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
    <div className="bg-[#F4F5F7] pb-20" >
      <div className="select-container  relative p-20 max-xl:mx-auto max-2xl:ml-44 ">
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

      <div className="grid grid-cols-1  gap-4 mt-4">
        {selectedSurah.verses.map((verse) => (
          <div
            key={`${verse.id}-${verse.chapter}-${verse.verse}`}
            className="p-4 bg-[#F6F1E0] border  rounded-lg shadow-xl border-green-500 container mx-auto  w-[450px] max-sm:w-[320px]   md:w-[800px]"
          >
            <div className=" text-lg font-bold tracking-tight  text-right  text-black">
              <p>
                <span className="text-[#6F6F8E] ">
                  {verse.id} .  <span className="font-uthman-taha font-normal font-weight-400 text-3xl leading-9 p-8 text-[#1B365C]"> {verse.text}</span>
                </span>{" "}
                {"  "}
               
              </p>
              <p className=" text-left font-sans font-normal font-weight-400 text-base font-roboto pt-8 leading-8 text-[#1B365C]">{verse.id} . {verse.translation}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahDetails;
