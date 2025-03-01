import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const DailyExamSelector: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-center text-blue-600 mb-8">
          Wybierz poziom Daily Zadań
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Wybierz swój poziom trudności, aby codziennie otrzymywać nowe zadania.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/daily/matura-rozszerzona">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Matura Rozszerzona</h3>
              <p className="text-gray-600 mt-4">
                Codzienne zadania na poziomie matury rozszerzonej.
              </p>
            </div>
          </Link>

          <Link href="/daily/matura-podstawowa">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Matura Podstawowa</h3>
              <p className="text-gray-600 mt-4">
                Sprawdź swoje umiejętności na poziomie matury podstawowej.
              </p>
            </div>
          </Link>

          <Link href="/daily/egzamin-8-klasisty">
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold text-blue-500">Egzamin 8 Klasisty</h3>
              <p className="text-gray-600 mt-4">
                Przygotuj się do egzaminu ósmoklasisty poprzez codzienne zadania.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailyExamSelector;
