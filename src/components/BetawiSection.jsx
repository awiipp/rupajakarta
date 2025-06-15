import Ondel from '../assets/images/ondel.jpeg';
import Rumah from '../assets/images/rumah.jpg';
import Silat from '../assets/images/silat.jpg';
import Baju from '../assets/images/baju-adat.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

export default function BetawiSection() {
  const budayaItems = [
    {
      title: 'Ondel-Ondel',
      desc: 'Boneka raksasa tradisional yang digunakan untuk menyambut dan meramaikan acara budaya.',
      image: Ondel,
    },
    {
      title: 'Silat Betawi',
      desc: 'Seni bela diri khas Betawi yang mencerminkan kearifan lokal dan filosofi hidup.',
      image: Silat,
    },
    {
      title: 'Baju Adat',
      desc: 'Pakaian tradisional dengan warna dan motif khas, mencerminkan identitas masyarakat Betawi.',
      image: Baju,
    },
    {
      title: 'Rumah Adat',
      desc: 'Rumah Kebaya dengan ciri khas atap bergelombang dan ukiran etnik.',
      image: Rumah,
    },
  ];

  return (
    <section id="budaya" className="bg-white py-16 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center md:mb-12 mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif">
          Budaya Betawi
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Betawi adalah suku asli Jakarta yang memiliki budaya unik dan beragam.
          Berikut beberapa elemen budaya Betawi yang masih dilestarikan hingga
          kini.
        </p>
      </div>

      {/* desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {budayaItems.map((item, index) => (
          <div
            key={index}
            className="group bg-[#B71C1C] text-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/90 group-hover:text-white">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="sm:hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={true}
        >
          {budayaItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#B71C1C] text-white overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 mb-5">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <Link
          className="bg-yellow-500 px-3 py-2 text-white hover:bg-yellow-600"
          to={'/betawi'}
        >
          Lihat lebih detail
        </Link>
      </div>
    </section>
  );
}
