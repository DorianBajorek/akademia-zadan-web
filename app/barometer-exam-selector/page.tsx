import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BarometerExamSelector: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-center text-blue-600 mb-8">
          Wybierz egzamin
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Wybierz jeden z egzaminów, aby przejść do Barometru.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/barometer">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Matura Rozszerzona</h3>
              <p className="text-gray-600 mt-4">
                Zaczynaj przygotowania do matury rozszerzonej z matematyki.
              </p>
            </div>
          </Link>
          
          <Link href="/barometer/matura-podstawowa">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Matura Podstawowa</h3>
              <p className="text-gray-600 mt-4">
                Sprawdź swój poziom przygotowania do matury podstawowej.
              </p>
            </div>
          </Link>

          <Link href="/barometer/egzamin-8-klasisty">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Egzamin 8 Klasisty</h3>
              <p className="text-gray-600 mt-4">
                Przygotuj się do egzaminu ósmoklasisty z matematyki.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarometerExamSelector;
