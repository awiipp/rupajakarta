import React from 'react';
import KotaTua from '../assets/images/fatahillah.jpg';
import Monas from '../assets/images/monas.jpg';
import IstiqlalKatedral from '../assets/images/istiqlal-katedral.jpeg';
import Babakan from '../assets/images/babakan.jpeg';
import { Link } from 'react-router-dom';

const JakartaSection = () => {
  return (
    <section className="bg-white pt-16 pb-14 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 text-center md:text-right px-5 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-red-700">
            Ayo, Jelajahi Ikon Jakarta!
          </h2>
        </div>
        <div className="w-full md:w-1/2 text-left px-5">
          <h3 className="text-xl sm:text-2xl font-semibold text-black underline decoration-red-700 decoration-3 mb-2">
            Tahukah Kamu?
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto md:mx-0">
            <strong>Jakarta</strong> punya banyak tempat ikonik seperti Monas
            dan Kota Tua. Meski modern, kota ini tetap menyimpan sejarah dan
            budaya unik.{' '}
            <span className="text-red-700 font-bold">Fun fact</span>: Jakarta
            awalnya bernama{' '}
            <span className="underline decoration-red-700 decoration-2 font-bold">
              Batavia
            </span>{' '}
            sebelum menjadi ibu kota Indonesia.
          </p>
          <Link
            className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 mt-4 inline-block text-sm"
            to={'/jakarta'}
          >
            Jelajahi Jakarta
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-2 md:px-0">
        <div className="w-full md:w-1/2 relative group overflow-hidden shadow-lg">
          <img
            src={Monas}
            alt="Monas"
            className="w-full md:h-[420px] h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 bg-black/50 w-full text-white text-lg font-semibold p-4">
            Monumen Nasional (Monas)
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-1/2 relative group overflow-hidden shadow-lg">
              <img
                src={Babakan}
                alt="Setu Babakan"
                className="w-full h-[150px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 bg-black/50 w-full text-white text-sm font-semibold p-2">
                Setu Babakan
              </div>
            </div>
            <div className="w-1/2 relative group overflow-hidden shadow-lg">
              <img
                src={KotaTua}
                alt="Kota Tua"
                className="w-full h-[150px] md:h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 bg-black/50 w-full text-white text-sm font-semibold p-2">
                Kota Tua
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden shadow-lg">
            <img
              src={IstiqlalKatedral}
              alt="Masjid Istiqlal & Gereja Katedral"
              className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 bg-black/50 w-full text-white text-sm font-semibold p-2">
              Masjid Istiqlal & Gereja Katedral
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JakartaSection;
