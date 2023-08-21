import { useState, useEffect } from 'react';

const RandomAyah = () => {
  const [arabicAyah, setArabicAyah] = useState('');
  const [banglaAyah, setBanglaAyah] = useState('');
  const [suraName, setSuraName] = useState('');
  const [ayahNum, setAyahNum] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 6236);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const handlePlayAudio = () => {
    const audio = new Audio(audioSrc);
    setIsPlaying(true);

    audio.play();

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  };

  const handleGenerate = () => {
    // Clear previous content
    setArabicAyah('');
    setBanglaAyah('');
    setSuraName('');
    setAyahNum('');
    setAudioSrc('');

    // Fetch new random ayah content
    const randomNum = generateRandomNum();
    const arabicApi = `https://api.alquran.cloud/v1/ayah/${randomNum}/ar.alafasy`;
    const banglaApi = `https://api.alquran.cloud/v1/ayah/${randomNum}/bn.bengali`;

    fetch(arabicApi)
      .then(response => response.json())
      .then(data => {
        setArabicAyah(data.data.text);
        setSuraName(data.data.surah.englishName);
        setAyahNum(data.data.numberInSurah);
        setAudioSrc(data.data.audio);
      });

    fetch(banglaApi)
      .then(response => response.json())
      .then(data => {
        setBanglaAyah(data.data.text);
      });

    // Scroll to the newly generated content
    // const generatedContent = document.getElementById('generated-content');
    // if (generatedContent) {
    //   generatedContent.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  const generateWhatsAppUrl = (arabicText, banglaText, surahInfo) => {
    const encodedArabicText = encodeURIComponent(arabicText);
    const encodedBanglaText = encodeURIComponent(banglaText);
    const encodedSurahInfo = encodeURIComponent(surahInfo);
    return `https://api.whatsapp.com/send?text=${encodedArabicText}%0A%0A${encodedBanglaText}%0A%0A${encodedSurahInfo}`;
  };

  return (
    <main className="text-center p-4 mt-1" id="generated-content">
      <div className='bg-[#23304B]'>
        <div className="mt-8">
          <h1 className='text-green-400 py-8 pb-4 text-xl md:font-semibold'>Random Ayah of the Day</h1>
          <h1 className=' border-b border-green-400 border-w-40 mt-2 mb-8 '></h1>
          <h2 className="text-xl arabic-ayah py-8 font-al-qalam  font-normal font-weight-300 tracking-wide md:text-2xl leading-loose text-white">{arabicAyah}</h2>
          <h3 className="text-lg bangla-ayah py-4 text-white">{banglaAyah}</h3>
          <p className="text-green-400 sura-info py-4">
            আল কুরআন • সুরা - {suraName} • আয়াত - {ayahNum}
          </p>
        </div>
        <div className="mb-4 px-4 py-8  rounded">
          <audio src={audioSrc}></audio>
          <button onClick={handlePlayAudio} className={`btn-play bg-blue-500 text-white px-4 py-2 rounded mr-2 ${isPlaying ? 'disabled' : ''}`} disabled={isPlaying}>
            <i className="fas fa-play mr-1"></i> Play
          </button>
          <a
            href={generateWhatsAppUrl(arabicAyah, banglaAyah, `${suraName} • আয়াত - ${ayahNum}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-share bg-green-500 text-white px-4 py-2 rounded"
          >
            <i className="fab fa-whatsapp mr-1"></i> Share on WhatsApp
          </a>
        </div>
        {/* <button onClick={handleGenerate} className="btn-generate bg-gray-500 text-white px-4 py-2 mb-8 rounded" disabled>
          <i className="fas fa-cog mr-1"></i> Generate
        </button> */}
      </div>
    </main>
  );
};

export default RandomAyah;
