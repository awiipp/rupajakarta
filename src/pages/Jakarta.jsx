import { useState } from 'react';
import ImageTest from '../assets/images/test.jpg';

export default function JakartaDetailPage() {
  const [isMoving, setIsMoving] = useState(false);

  const tempatJakarta = [
    {
      title: 'Monas',
      desc: 'Monumen Nasional (Monas) adalah simbol perjuangan kemerdekaan Indonesia yang berdiri megah di pusat Jakarta. Dibangun pada masa Presiden Soekarno, monumen ini memiliki tinggi 132 meter dan puncaknya dilapisi emas. Monas menjadi tempat wisata edukatif dengan museum sejarah di dasarnya dan pemandangan kota dari puncaknya.',
      image: ImageTest,
    },
    {
      title: 'Kota Tua',
      desc: 'Kota Tua Jakarta menyimpan sejarah kolonial Belanda dengan bangunan-bangunan kuno yang ikonik seperti Museum Fatahillah dan Cafe Batavia. Area ini menjadi destinasi wisata budaya dan fotografi yang populer, menghadirkan nuansa tempo dulu di tengah hiruk-pikuk modernitas.',
      image: ImageTest,
    },
    {
      title: 'Istiqlal & Katedral',
      desc: 'Masjid Istiqlal dan Gereja Katedral Jakarta berdiri berdampingan sebagai simbol toleransi dan kerukunan antarumat beragama. Masjid Istiqlal adalah yang terbesar di Asia Tenggara, sementara Katedral mencerminkan arsitektur neo-gotik yang megah dan bersejarah.',
      image: ImageTest,
    },
    {
      title: 'Setu Babakan',
      desc: 'Setu Babakan adalah pusat perkampungan budaya Betawi di Jakarta Selatan. Di sini, pengunjung bisa menikmati dan mempelajari kesenian, kuliner, rumah adat, serta tradisi masyarakat Betawi dalam suasana yang asri dan alami.',
      image: ImageTest,
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
              transform: translateX(-50%) translateY(2000px);
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
        className="w-full h-[180px] bg-[url('../assets/images/test.jpg')] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50), rgba(255,255,255,1)), url(${ImageTest})`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif uppercase tracking-wider">
          Ikon Jakarta
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Berikut adalah empat tempat ikonik yang menggambarkan wajah budaya,
          sejarah, dan keragaman Jakarta.
        </p>

        <button
          onClick={() => setIsMoving(true)}
          className="mt-6 px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition"
        >
          Jalanin Mobil
        </button>
      </div>
      <div className="relative max-w-5xl mx-auto pt-24">
        {/* Garis tengah */}
        <div className="absolute left-1/2 top-0 w-1 bg-red-700 h-full -translate-x-1/2"></div>

        <img
          src={ImageTest}
          alt="mobil"
          className={`absolute top-0 left-1/2 w-16 h-16 -translate-x-1/2 z-30 mobile-behind ${
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
                {/* Line */}
                <div className="absolute left-1/2 w-5 h-5 bg-[#FFD700] border-4 border-white rounded-full -translate-x-1/2 z-20"></div>

                {/* Card */}
                <div
                  className={`bg-gray-100 border-l-4 border-[#B71C1C] shadow-lg max-w-md p-6 md:p-8 z-10 flex flex-col gap-4 ${alignmentClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#B71C1C] mb-2 uppercase tracking-widest">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center items-center md:mt-12 mt-5">
        <button
          onClick={() => {
            setIsMoving(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mt-6 px-4 py-2 bg-red-700 text-white hover:bg-red-800 transition"
        >
          Reset Mobil
        </button>
      </div>
    </main>
  );
}
