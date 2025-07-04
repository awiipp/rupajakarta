import React from 'react';
import HeroCarousel from '../components/Carousel';
import BetawiSection from '../components/BetawiSection';
import JakartaSection from '../components/JakartaSection';
import Logo from '../assets/images/logo-2.png';
import { QuizSection } from '../components/QuizSection';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="mb-28">
      <HeroCarousel />

      <section className="bg-red-600 py-1 px-6">
        <div className="max-w-6xl mx-auto flex md:flex-row items-center justify-center font-serif md:gap-10 gap-5">
          <img
            src={Logo}
            alt="RupaJakarta"
            className="md:h-[130px] h-[80px] object-contain"
            data-aos="fade-in"
          />

          <p
            className="text-yellow-400 text-xl md:text-3xl font-semibold text-center md:text-left"
            data-aos="fade-in"
          >
            {t('home.slogan')}
          </p>
        </div>
      </section>

      <BetawiSection />
      <JakartaSection />
      <QuizSection />
    </main>
  );
};

export default Home;
