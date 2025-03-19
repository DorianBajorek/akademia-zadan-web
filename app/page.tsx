import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 text-center">
        <div className="flex justify-center mb-6">
          <Image src="/logoGrayBackground.svg" alt="Smok" width={200} height={200} />
        </div>
        
        <h2 className="text-5xl font-bold text-blue-600 mb-6">
          Witamy w Akademii Zadań!
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Nauka matematyki jeszcze nigdy nie była tak prosta i przyjemna! Codzienne zadania, analiza wyników i prognozy egzaminacyjne w jednym miejscu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/daily-task" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Daily Zadania</h3>
            <p className="text-gray-600 mt-4">
              Codzienne nowe zadania matematyczne, które przygotują Cię do egzaminów! Rozwiązuj, ucz się i poprawiaj swoje wyniki każdego dnia.
            </p>
          </Link>
          <Link href="/barometr-opis" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Barometr</h3>
            <p className="text-gray-600 mt-4">
              Sprawdź swoją prognozę wyników na egzaminie i śledź postępy. Dowiedz się, które zagadnienia wymagają jeszcze pracy!
            </p>
          </Link>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Dołącz do naszej społeczności!</h3>
          <p className="text-gray-600 mt-2">Śledź nas na social mediach, aby być na bieżąco z nowymi zadaniami i materiałami edukacyjnymi.</p>
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.youtube.com/@AkademiaZada%C5%84" target="_blank" rel="noopener noreferrer" className="text-red-500 text-3xl hover:text-red-700">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573815694973&locale=pl_PL" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/akademiazadan/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-700">
            <FaInstagram />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
