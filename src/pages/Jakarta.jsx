import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import KotaTua from '../assets/images/fatahillah.jpg';
import Monas from '../assets/images/monas.jpg';
import IstiqlalKatedral from '../assets/images/istiqlal-katedral.jpeg';
import Babakan from '../assets/images/babakan.jpg';
import BundaranHI from '../assets/images/bundaran-hi.jpg';
import Bajaj from '../assets/images/bajaj.png';
import { Link } from 'react-router-dom';

export default function JakartaDetailPage() {
  const [isMoving, setIsMoving] = useState(false);
  const { t } = useTranslation();

  const tempatJakarta = [
    {
      title: t('jakarta.monas.title'), // 🟡 ID: "Monas", EN: "Monas", JP: "モナス"
      desc: t('jakarta.monas.desc'),
      image: Monas,
    },
    {
      title: t('jakarta.kotatua.title'), // 🟡 ID: "Kota Tua", EN: "Old Town", JP: "コタ・トゥア（旧市街）"
      desc: t('jakarta.kotatua.desc'),
      image: KotaTua,
    },
    {
      title: t('jakarta.istiqlal.title'), // 🟡 ID: "Istiqlal & Katedral", EN: "Istiqlal & Cathedral", JP: "イスティクラル & カテドラル"
      desc: t('jakarta.istiqlal.desc'),
      image: IstiqlalKatedral,
    },
    {
      title: t('jakarta.babakan.title'), // 🟡 ID: "Setu Babakan", EN: "Setu Babakan", JP: "セトゥ・ババカン"
      desc: t('jakarta.babakan.desc'),
      image: Babakan,
    },
  ];

  return (
    <main className="mb-32">
      <style>
        {`
          @keyframes move-down {
            0% {
              transform: translateX(-50%) translateY(0);
            }
            100% {
              transform: translateX(-50%) translateY(2130px);
            }
          }

          .animate-move-down {
            animation: move-down 20s linear forwards;
          }

          @media (max-width: 768px) {
            .mobile-behind {
              z-index: 0 !important;
            }
          }
        `}
      </style>

      <div
        className="w-full md:h-[200px] h-[120px] bg-cover bg-up relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.30), rgba(255,255,255,1)), url(${BundaranHI})`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto text-center mb-16 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif uppercase tracking-wider">
          {t('jakarta.title')}
        </h2>
        <p
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-in"
        >
          {t('jakarta.desc')}
        </p>

        <button
          onClick={() => setIsMoving(true)}
          className="mt-6 px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition"
          data-aos="fade-up"
        >
          {t('jakarta.button.start')}
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto pt-24">
        {/* Garis tengah */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-700 -translate-x-1/2 rounded-full z-0"></div>

        <img
          src={Bajaj}
          alt="bajaj"
          className={`absolute top-0 left-1/2 w-24 h-24 -mt-10 -translate-x-1/2 z-30 mobile-behind ${
            isMoving ? 'animate-move-down' : ''
          }`}
        />

        <div className="flex flex-col gap-28">
          {tempatJakarta.map((item, index) => {
            const alignmentClass =
              index % 2 === 0
                ? 'ml-8 text-left items-start'
                : 'mr-8 text-right items-end';

            return (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="absolute left-1/2 w-5 h-5 bg-[#FFD700] border-4 border-white rounded-full -translate-x-1/2 z-20"></div>

                <div
                  className={`bg-gray-100 border-l-4 border-[#B71C1C] shadow-lg max-w-md p-6 md:p-8 z-10 flex flex-col gap-4 ${alignmentClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                    data-aos="fade-in"
                  />
                  <div>
                    <h3
                      className="text-xl font-bold text-[#B71C1C] mb-2 uppercase tracking-widest"
                      data-aos="fade-in"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-800 leading-relaxed text-sm"
                      data-aos="fade-up"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center items-center md:mt-40 mt-28 gap-x-4 overflow-hidden">
        <button
          onClick={() => {
            setIsMoving(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition"
          data-aos="fade-right"
        >
          {t('jakarta.button.reset')}
        </button>
        <Link
          to="/"
          className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 text-sm"
          data-aos="fade-left"
        >
          {t('jakarta.button.back')}
        </Link>
      </div>
    </main>
  );
}
