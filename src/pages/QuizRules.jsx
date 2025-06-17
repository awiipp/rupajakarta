import { Link } from 'react-router-dom';
import Background from '../assets/images/background/ondel.jpeg';
import RulesImage from '../assets/images/logo-quiz.png';

export default function QuizRulesPage() {
  return (
    <main className="relative min-h-screen flex justify-center items-start text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      ></div>

      <div className="md:mt-8 mt-28 mb-10 z-10 max-w-[600px] md:px-16 px-10 py-10 md:py-8 md:w-full w-[90%] bg-black/20 backdrop-blur-md shadow-2xl text-white text-center">
        <img
          src={RulesImage}
          alt="Ilustrasi Peraturan Quiz"
          className="mx-auto md:h-48 h-32 object-cover mb-6"
        />

        <h2 className="text-xl text-left md:text-4xl font-bold mb-2 text-yellow-400">
          Peraturan Quiz
        </h2>

        <ul className="list-disc list-inside space-y-4 text-lg text-left">
          <li>
            Quiz berisi <strong>10 soal</strong>.
          </li>
          <li>
            Quiz tentang <strong>budaya Betawi</strong> dan{' '}
            <strong>ikon tempat di Jakarta</strong>.
          </li>
          <li>
            Jawab dengan benar untuk mendapatkan <strong>poin</strong>!
          </li>
        </ul>

        <div className="mt-12">
          <Link
            to={'/quiz'}
            className="inline-block px-6 py-3 bg-yellow-400 text-red-700 font-semibold shadow hover:bg-yellow-500 transition"
          >
            Mulai Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
