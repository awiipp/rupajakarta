import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ImageSilat from '../assets/images/silat.jpg';
import ImageOndel from '../assets/images/ondel-ondel-carousel.jpeg';
import ImageFatahillah from '../assets/images/fatahillah.jpg';
import ImageMonas from '../assets/images/monas-atas.jpeg';
import { useTranslation } from 'react-i18next';

export default function HeroCarousel() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isJapanese = i18n.language === 'jp';

  const images = [
    { src: ImageMonas, alt: 'Monas' },
    { src: ImageSilat, alt: 'Silat Betawi' },
    { src: ImageOndel, alt: 'Ondel-ondel' },
    { src: ImageFatahillah, alt: 'Museum Fatahillah' },
  ];

  return (
    <div className="relative min-h-screen">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2500}
        showArrows={false}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="h-screen object-cover w-full"
            />
          </div>
        ))}
      </Carousel>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center px-4">
        <h1
          className={`${
            isJapanese ? 'text-5xl' : 'text-4xl'
          } md:text-6xl font-bold leading-tight drop-shadow-lg font-serif w-[90%]`}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          {t('hero.welcome')} <br />
          <span className="text-yellow-400">
            {t('hero.intro')}{' '}
            <span className="relative inline-block">
              {t('hero.jakarta')}
              <span className="absolute left-0 md:-bottom-2 -bottom-0.5 md:h-[6px] h-[4px] w-full bg-red-600"></span>
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
