import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-center text-blue-600 mb-8">
          Witamy w Akademii Zadań!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Aplikacja do nauki matematyki z codziennymi zadaniami i narzędziem do prognozowania wyników.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Daily Zadania</h3>
            <p className="text-gray-600 mt-4">
              Codziennie 5 nowych zadań, które pomogą Ci przygotować się do egzaminów!
            </p>
          </div>
          <Link href="/barometer-exam-selector">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-500">Barometr</h3>
              <p className="text-gray-600 mt-4">
                Przewidź swój wynik na egzaminie i sprawdź postęp!
              </p>
            </div>
          </Link>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Rozwiązania</h3>
            <p className="text-gray-600 mt-4">
              Sprawdź szczegółowe rozwiązania zadań, aby lepiej zrozumieć materiał.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 text-blue-800 p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold mb-4">Jak to działa?</h2>
          <p className="mb-6">Nasza aplikacja oferuje codziennie nowe zadania matematyczne, które pomagają w przygotowaniach do egzaminów. Codziennie 5 nowych wyzwań!</p>
          <p className="mb-6">W aplikacji znajdziesz również narzędzie, które pozwala przewidywać swój wynik na egzaminie na podstawie wykonanych zadań.</p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              Zacznij rozwiązywać zadania!
            </button>
          </div>
        </div>

        <section className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">Dlaczego warto?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500">Łatwy dostęp</h4>
              <p className="text-gray-600 mt-4">
                Nasza aplikacja jest dostępna 24/7, więc możesz się uczyć w dowolnym czasie i miejscu.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500">Motywacja i postęp</h4>
              <p className="text-gray-600 mt-4">
                Dzięki codziennym zadaniom i prognozom możesz śledzić swój postęp i utrzymywać motywację.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-500">Interaktywne rozwiązania</h4>
              <p className="text-gray-600 mt-4">
                Otrzymasz szczegółowe rozwiązania zadań, które pomogą Ci lepiej zrozumieć materiał.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
