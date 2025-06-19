import { Link } from 'react-router-dom';
import ImageQuiz from '../assets/images/kartun.png';
import { useTranslation } from 'react-i18next';

export function QuizSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:gap-12 px-6 py-12">
        <div className="md:w-1/2 w-full" data-aos="fade-in">
          <img
            src={ImageQuiz}
            alt="Ilustrasi Quiz"
            className="w-[95%] h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-700 mb-4">
            {t('quizSection.title')}
          </h2>
          <p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t('quizSection.desc') }}
          />
          <Link
            to="/quiz-rules"
            data-aos="fade-up"
            className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 transition"
          >
            {t('quizSection.button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
