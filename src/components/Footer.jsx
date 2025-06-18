import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-[#B71C1C] text-[#FFD700] pt-10">
      <div className="max-w-7xl mx-auto md:px-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-left">
          <img
            src={Logo}
            alt="RupaJakarta"
            className="h-[70px] md:h-[80px] object-contain mb-3"
          />
          <p className="text-sm">{t('footer.desc')}</p>
        </div>

        <div className="text-left md:pl-32">
          <h2 className="text-xl font-bold text-white mb-2">
            {t('footer.navigasi')}
          </h2>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to={'/'} className="hover:text-white">
                {t('footer.nav.beranda')}
              </Link>
            </li>
            <li>
              <Link to={'/betawi'} className="hover:text-white">
                {t('footer.nav.betawi')}
              </Link>
            </li>
            <li>
              <Link to={'/jakarta'} className="hover:text-white">
                {t('footer.nav.jakarta')}
              </Link>
            </li>
            <li>
              <Link to={'/quiz-rules'} className="hover:text-white">
                {t('footer.nav.quiz')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left md:pl-20">
          <h2 className="font-bold text-lg text-white">{t('footer.bahasa')}</h2>

          <div className="relative inline-block mt-3">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="appearance-none bg-transparent border border-[#FFD700] rounded px-2 py-1 pr-8 text-[#FFD700] hover:bg-[#FFD700] hover:text-red-800 transition"
            >
              <option value="id">ID</option>
              <option value="jp">JP</option>
              <option value="en">EN</option>
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FFD700] pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFD700]/40 mt-6 py-4 text-center text-sm text-[#FFD700]">
        &copy; {new Date().getFullYear()} RupaJakarta. All rights reserved.
      </div>
    </footer>
  );
}
