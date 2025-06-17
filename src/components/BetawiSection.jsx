import React from 'react';
import Ondel from '../assets/images/ondel.jpeg';
import Rumah from '../assets/images/rumah.jpg';
import Silat from '../assets/images/silat.jpg';
import Baju from '../assets/images/baju-adat.jpeg';
import AkarKelapa from '../assets/images/akar-kelapa.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BetawiSection() {
  const { t } = useTranslation();

  const budayaItems = [
    {
      title: t('betawi.ondel.title'),
      desc: t('betawi.ondel.desc'),
      image: Ondel,
    },
    {
      title: t('betawi.silat.title'),
      desc: t('betawi.silat.desc'),
      image: Silat,
    },
    {
      title: t('betawi.baju.title'),
      desc: t('betawi.baju.desc'),
      image: Baju,
    },
    {
      title: t('betawi.rumah.title'),
      desc: t('betawi.rumah.desc'),
      image: Rumah,
    },
    {
      title: t('betawi.kue.title'),
      desc: t('betawi.kue.desc'),
      image: AkarKelapa,
    },
  ];

  return (
    <section id="budaya" className="bg-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center md:mb-12 mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif">
          {t('betawi.sectionTitle')}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto" data-aos="fade-in">
          {t('betawi.sectionDesc')}
        </p>
      </div>

      <div className="gap-6 overflow-x-auto py-4 px-2 sm:px-4 lg:px-6 hidden md:flex" data-aos="fade-up">
        {budayaItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[280px] max-w-xs bg-[#B71C1C] text-white rounded shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03] flex-shrink-0"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400 hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden" data-aos="fade-up">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} showArrows={true}>
          {budayaItems.map((item, index) => (
            <div key={index} className="bg-[#B71C1C] text-white overflow-hidden shadow-md">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-4 mb-5">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <Link
          className="bg-yellow-400 px-3 py-2 text-white hover:bg-yellow-600"
          to={'/betawi'}
          data-aos="fade-in"
        >
          {t('betawi.detail')}
        </Link>
      </div>
    </section>
  );
}
