import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.beranda'), path: '/' },
    { name: t('nav.betawi'), path: '/betawi' },
    { name: t('nav.jakarta'), path: '/jakarta' },
    { name: t('nav.quiz'), path: '/quiz-rules' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main>
      <style>
        {`
        .text-shadow {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-red-700' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <img
            src={Logo}
            alt="RupaJakarta"
            className="h-[45px] md:h-[53px] object-contain"
          />

          <div className="hidden md:flex items-center space-x-6 text-white font-semibold text-shadow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#FFEB3B]"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative inline-block">
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

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#FFD700] text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-xs bg-[#B71C1C] p-6 z-50 text-[#FFD700] text-lg flex flex-col space-y-6 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={toggleMenu}
          className="ml-auto text-4xl"
          aria-label="Close Menu"
        >
          &times;
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-[#FFEB3B] text-shadow"
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}

        <div className="relative w-fit mt-4 md:mt-0">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="appearance-none bg-transparent border border-[#FFD700] rounded px-2 py-1 pr-8 text-[#FFD700] hover:bg-[#FFD700] hover:text-red-800 transition w-full"
          >
            <option value="id">ID</option>
            <option value="jp">JP</option>
            <option value="en">EN</option>
          </select>
          <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#FFD700] pointer-events-none" />
        </div>
      </div>
    </main>
  );
}
