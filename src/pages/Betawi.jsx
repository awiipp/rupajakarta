import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Ondel from '../assets/images/ondel.jpeg';
import Rumah from '../assets/images/rumah.jpg';
import Silat from '../assets/images/silat.jpg';
import Baju from '../assets/images/baju-adat.jpeg';
import PawaiBetawi from '../assets/images/pawai-betawi.jpg';
import AkarKelapa from '../assets/images/akar-kelapa.jpeg';

export default function BudayaDetailPage() {
  const { t } = useTranslation();

  const budayaItems = [
    {
      title: t('budaya.ondel.title'),
      desc: t('budaya.ondel.desc'),
      image: Ondel,
    },
    {
      title: t('budaya.silat.title'),
      desc: t('budaya.silat.desc'),
      image: Silat,
    },
    {
      title: t('budaya.baju.title'),
      desc: t('budaya.baju.desc'),
      image: Baju,
    },
    {
      title: t('budaya.rumah.title'),
      desc: t('budaya.rumah.desc'),
      image: Rumah,
    },
    {
      title: t('budaya.kue.title'),
      desc: t('budaya.kue.desc'),
      image: AkarKelapa,
    },
  ];

  return (
    <main>
      <div
        className="w-full md:h-[300px] h-[150px] bg-[url('../assets/images/test.jpg')] bg-cover bg-top relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50), rgba(255,255,255,1)), url(${PawaiBetawi})`,
        }}
      ></div>

      <section className="bg-white pt-10 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif uppercase tracking-wider">
            {t('budaya.title')}
          </h2>
          <p
            className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            {t('budaya.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {budayaItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start bg-white shadow-md border-l-4 border-[#B71C1C] p-6 md:p-8 hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-48 h-48 object-cover"
                data-aos="fade-in"
              />
              <div className="text-left">
                <h3
                  className="text-2xl font-extrabold text-[#B71C1C] mb-2 uppercase tracking-widest"
                  data-aos="fade-in"
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-800 whitespace-pre-line leading-relaxed text-sm"
                  data-aos="fade-up"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 mt-8 inline-block text-sm"
          to={'/'}
          data-aos="fade-in"
        >
          {t('budaya.back')}
        </Link>
      </section>
    </main>
  );
}
