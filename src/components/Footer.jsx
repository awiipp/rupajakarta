import { FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#B71C1C] text-[#FFD700] pt-10">
      <div className="max-w-7xl mx-auto md:px-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-left">
          <img
            src={Logo}
            alt="RupaJakarta"
            className="h-[70px] md:h-[80px] object-contain"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quis veritatis sequi quasi fugit, sit distinctio!
          </p>
        </div>

        <div className="text-left md:pl-32">
          <h2 className="text-xl font-bold text-white mb-2">Navigasi</h2>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to={'/'} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/betawi'} className="hover:text-white">
                Betawi
              </Link>
            </li>
            <li>
              <Link to={'/jakarta'} className="hover:text-white">
                Jakarta
              </Link>
            </li>
            <li>
              <Link to={'/quiz-rules'} className="hover:text-white">
                Quiz!
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left md:pl-20">
          <h2 className="font-bold text-lg text-white">Developed by</h2>
          <h2 className="font-bold text-lg text-white">
            (Ini tempat ganti bahasa)
          </h2>
          <ul className="space-y-2 text-base">
            <li className="flex items-center space-x-3">
              <p className="font-semibold text-lg">Sayid Arip</p>
            </li>
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-xl" />
              <a
                href="https://instagram.com/awiipp_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                @awiipp_
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaGithub className="text-2xl" />
              <a
                href="https://github.com/awiipp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                awiipp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FFD700]/40 mt-6 py-4 text-center text-sm text-[#FFD700]">
        &copy; {new Date().getFullYear()} RupaJakarta. All rights reserved.
      </div>
    </footer>
  );
}
