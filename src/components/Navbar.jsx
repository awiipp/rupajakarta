import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat berpindah halaman
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Betawi', path: '/betawi' },
    { name: 'Jakarta', path: '/jakarta' },
    { name: 'Quiz!', path: '/quiz-rules' },
  ];

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
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="md:text-2xl text-xl font-bold text-white text-shadow">
            <span className="text-yellow-400 text-shadow">Rupa</span>Jakarta
          </h1>

          {/* Tombol toggle menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#FFD700] text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6 text-white font-semibold text-shadow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#FFEB3B]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
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
      </div>
    </main>
  );
}
