import { Link } from 'react-router-dom';
import Background from '../assets/images/background/ondel.jpeg';
import RulesImage from '../assets/images/logo-quiz.png';
import { useTranslation } from 'react-i18next';

export default function QuizRulesPage() {
  const { t } = useTranslation();

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
          data-aos="fade-in"
          data-aos-delay="500"
        />

        <h2
          className="text-xl text-left md:text-4xl font-bold mb-2 text-yellow-400"
          data-aos="fade-in"
        >
          {t('quizRules.title')}
        </h2>

        <ul
          className="list-disc list-inside space-y-4 text-lg text-left"
          data-aos="fade-in"
        >
          {t('quizRules.rules', { returnObjects: true }).map((rule, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: rule }} />
          ))}
        </ul>

        <div className="mt-10">
          <Link
            to={'/quiz'}
            className="inline-block px-6 py-3 bg-yellow-400 text-red-700 font-semibold shadow hover:bg-yellow-500 transition"
            data-aos="fade-up"
          >
            {t('quizRules.start')}
          </Link>
        </div>
      </div>
    </main>
  );
}
