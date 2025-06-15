import { Link } from 'react-router-dom';
import ImageTest from '../assets/images/test.jpg';

export default function BudayaDetailPage() {
  const budayaItems = [
    {
      title: 'Ondel-Ondel',
      desc: 'Ondel-ondel adalah boneka raksasa khas Betawi yang digunakan untuk meramaikan berbagai acara adat dan perayaan. Boneka ini memiliki tampilan mencolok dengan wajah merah atau putih dan rambut kaku yang khas. Biasanya dimainkan berpasangan, satu pria dan satu wanita, serta diiringi musik tradisional.\n\nKehadiran ondel-ondel dipercaya dapat mengusir roh jahat dan membawa keberuntungan. Meski kini tampilannya lebih modern, makna budaya dan spiritual dari ondel-ondel tetap dijaga oleh masyarakat Betawi.',
      image: ImageTest,
    },
    {
      title: 'Silat Betawi',
      desc: 'Silat Betawi adalah seni bela diri tradisional yang berkembang di kalangan masyarakat Betawi. Gaya bertarungnya lincah dan penuh strategi, menggabungkan unsur kecepatan, kelincahan, dan spiritualitas. Silat ini juga sering ditampilkan dalam upacara atau pertunjukan budaya.\n\nSelain sebagai bela diri, silat Betawi juga dianggap sebagai warisan budaya yang mengajarkan nilai kesopanan, keberanian, dan kearifan lokal. Ia menjadi simbol kekuatan dan identitas suku Betawi.',
      image: ImageTest,
    },
    {
      title: 'Baju Adat',
      desc: 'Pakaian adat Betawi mencerminkan keragaman budaya yang memengaruhinya, seperti unsur Melayu, Arab, Tionghoa, dan Belanda. Pria biasanya mengenakan baju sadariah dan peci, sedangkan wanita memakai kebaya encim dengan kain batik. Warnanya cerah dan desainnya anggun.\n\nBaju adat ini tidak hanya dipakai saat perayaan budaya, tetapi juga mencerminkan kebanggaan akan identitas dan tradisi masyarakat Betawi yang ramah dan terbuka.',
      image: ImageTest,
    },
    {
      title: 'Rumah Adat',
      desc: 'Rumah adat Betawi yang dikenal dengan nama Rumah Kebaya memiliki atap berbentuk seperti lipatan kebaya. Ciri khas lainnya adalah teras depan yang luas dan dihiasi ornamen kayu ukir. Rumah ini dirancang terbuka agar sesuai dengan iklim tropis Jakarta.\n\nFilosofi desain rumah Kebaya mencerminkan nilai kekeluargaan, keterbukaan, dan keselarasan dengan alam yang dijunjung tinggi oleh masyarakat Betawi.',
      image: ImageTest,
    },
  ];

  return (
    <main>
      <div
        className="w-full h-[180px] bg-[url('../assets/images/test.jpg')] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.50), rgba(255,255,255,1)), url(${ImageTest})`,
        }}
      ></div>

      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 font-serif uppercase tracking-wider">
            Detail Budaya Betawi
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Budaya Betawi merupakan warisan yang kaya akan nilai sejarah dan
            tradisi. Dari boneka ondel-ondel hingga rumah kebaya yang ikonik,
            semuanya menjadi lambang jati diri masyarakat Betawi. Keunikan ini
            menjadikan budaya Betawi menarik untuk dipelajari dan dilestarikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {budayaItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start bg-white shadow-md border-l-4 border-[#B71C1C] p-6 md:p-8 hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-extrabold text-[#B71C1C] mb-2 uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-gray-800 whitespace-pre-line leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="bg-yellow-400 px-4 py-2 text-white font-semibold hover:bg-yellow-600 mt-8 inline-block text-sm"
          to={'/'}
        >
          Kembali Ke Home
        </Link>
      </section>
    </main>
  );
}
