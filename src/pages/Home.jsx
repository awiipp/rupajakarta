import React from 'react';
import HeroCarousel from '../components/Carousel';
import BetawiSection from '../components/BetawiSection';
import JakartaSection from '../components/JakartaSection';
import ImageTest from '../assets/images/test.jpg';

const Home = () => {
  return (
    <main className="mb-28">
      <HeroCarousel />

      <section className="bg-red-600 md:py-4 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly font-serif gap-6">
          <div className="bg-yellow-400 rounded-lg p-3 shadow-md">
            <img
              src={ImageTest}
              alt="Ondel-Ondel"
              className="w-[150px] h-[80px] object-contain"
            />
          </div>

          <p className="text-yellow-400 text-2xl md:text-3xl font-semibold text-center md:text-left">
            Warna-warni Tradisi dari Tanah Betawi
          </p>
        </div>
      </section>

      <BetawiSection />

      <JakartaSection />

      <a
        className="bg-yellow-400 px-4 py-2 text-white font-semibold rounded-md hover:bg-yellow-600 mt-4 inline-block text-sm"
        href="/quiz"
      >
        Quiz
      </a>
    </main>
  );
};

export default Home;
