import { Link } from 'react-router-dom';
import Background from '../assets/images/background/ondel.jpeg';

export default function QuizRulesPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      ></div>

      <div className="relative z-10 max-w-[700px] md:px-16 px-10 py-16 md:py-20 md:w-full w-[90%] bg-black/20 backdrop-blur-md shadow-2xl text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-400">
          Peraturan Quiz
        </h1>
        <ul className="list-disc pl-5 space-y-4 text-lg">
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
        <div className="mt-12 text-center">
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
