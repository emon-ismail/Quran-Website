import React from 'react';
import ReadingQuran from '../../../../../Components/Animation/ReadingQuran';
import cover from '../../../../../assets/home/cover.jpg';
import { Link } from 'react-router-dom';

const Cover = () => {
  const backgroundImage = `url(${cover})`;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="absolute inset-0 bg-white/50 to-white/25 from-white/40 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 w-full">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <ReadingQuran />
          </div>

          <div className="w-full lg:w-1/2 max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Read Quran Everyday.
              <strong className="block font-extrabold text-rose-700 mt-4">
                Add On Your Daily Routine.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেন : কোরআনে কারিম তিলাওয়াত সর্বোত্তম ইবাদত।
              <br />
              (বুখারি)
<br />
              <p className='mt-2 max-w-lg sm:text-xl/relaxed'>The Messenger of Allah (peace and blessings be upon him) said: The recitation of the Noble Quran is the best form of worship.
(Bukhari)</p>
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
               to='/surah'
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 lg:w-auto"
              >
                Read Quran
              </Link>

              <Link
            to='/hadis'
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 lg:w-auto"
              >
                Read Hadith
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
