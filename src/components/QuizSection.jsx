import { Link } from 'react-router-dom';
import ImageQuiz from '../assets/images/kartun.png';

export function QuizSection() {
  return (
    <section className="bg-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:gap-12 px-6 py-12">
        <div className="md:w-1/2 w-full">
          <img
            src={ImageQuiz}
            alt="Ilustrasi Quiz"
            className="w-[95%] h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-700 mb-4">
            Uji Pengetahuanmu!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Siap untuk tantangan? Ikuti kuis{' '}
            <span className="underline decoration-red-700 decoration-2">
              budaya Betawi dan ikon Jakarta
            </span>{' '}
            untuk mengetahui seberapa jauh kamu mengenal kota{' '}
            <span className="font-bold text-red-700">Jakarta!</span>
          </p>
          <Link
            to="/quiz-rules"
            className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Ikuti Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
