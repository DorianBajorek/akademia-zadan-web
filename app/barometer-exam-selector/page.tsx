import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BarometerExamSelector: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="bg-gray-20 min-h-screen flex flex-col items-center justify-center">
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Sekcja z opisem */}
          <div className="bg-white p-10 rounded-2xl shadow-xl mb-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-blue-600 mb-6">Co to jest Barometr?</h3>
            <p className="text-gray-700 text-lg mb-6">
              Barometr to innowacyjne narzędzie, które pomoże Ci ocenić Twój poziom przygotowania do matury.
              Na podstawie 10 losowo wybranych zadań z różnych matur i historii odpowiedzi innych uczniów,
              Barometr potrafi przewidzieć Twój wynik na maturze. Przeprowadź test, a dowiesz się, w jakiej
              kondycji jesteś przed maturą podstawową.
            </p>
            <p className="text-gray-700 text-lg">
              Nasz system oparty jest na analizie odpowiedzi setek uczniów, co pozwala na dokładne prognozowanie
              wyników. Wykonaj test i sprawdź, gdzie jeszcze musisz popracować!
            </p>
          </div>

          {/* Przyciski */}
          <div className="flex justify-center">
            <Link href="/barometer">
              <div className="bg-blue-600 text-white text-2xl font-semibold py-4 px-12 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
                Rozpocznij Barometr
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BarometerExamSelector;
