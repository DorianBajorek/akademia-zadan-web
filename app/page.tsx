'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useAuth } from './UserData';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home: React.FC = () => {
  const { token, username } = useAuth();

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="flex-1">
            <div className="flex justify-center mb-8">
              <Image
                src="/logoGrayBackground.svg"
                alt="Logo Akademii Zadań"
                width={200}
                height={200}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 text-center md:text-left">
              {token
                ? `Witaj z powrotem, ${username}!`
                : 'Kompleksowe przygotowanie do matury poprawkowej z matematyki'}
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center md:text-left">
              {token
                ? 'Kontynuuj swoją naukę! Mamy wszystko, czego potrzebujesz, aby zdać maturę poprawkową.'
                : 'Najskuteczniejszy kurs online z matematyki. Skupiamy się tylko na najważniejszych zagadnieniach, które gwarantują zdanie matury!'}
            </p>
            {!token && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/rejestracja"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition transform hover:scale-105 text-center"
                >
                  Zacznij teraz - załóż konto
                </Link>
                <Link
                  href="/kurs-matura-podstawowa"
                  className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 text-lg transition transform hover:scale-105 text-center"
                >
                  Zobacz kurs
                </Link>
              </div>
            )}
          </div>
          <div className="flex-1">
            <Image
              src="/learningImage.png"
              alt="Uczeń rozwiązujący zadania matematyczne"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        {/* Sekcja o kursie */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Dlaczego nasz kurs jest skuteczny?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Zadania wieloetapowe</h3>
              <p className="text-gray-700">
                Zadania podzielone na logiczne etapy z dokładnymi wyjaśnieniami każdego kroku.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Pomoc AI w zadaniach</h3>
              <p className="text-gray-700">
                Sztuczna inteligencja dokładnie tłumaczy rozwiązania zadań zamkniętych, krok po
                kroku.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Skupiamy się na pewniakach
              </h3>
              <p className="text-gray-700">
                Tylko najważniejsze zagadnienia, które na 100% pojawią się na maturze.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Zadania z poprzednich lat
              </h3>
              <p className="text-gray-700">
                Autentyczne zadania maturalne z dokładnymi analizami rozwiązań.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Filmy instruktażowe</h3>
              <p className="text-gray-700">
                Każdy temat ma nagrany film z krok-po-krokowym tłumaczeniem.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">System motywacyjny</h3>
              <p className="text-gray-700">
                Odznaki i kalendarz aktywności pomagają utrzymać regularność nauki.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/kurs-matura-podstawowa"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              Zobacz pełną zawartość kursu
            </Link>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 text-gray-900 p-8 rounded-xl shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Barometr Maturalny</h2>
              <p className="text-xl mb-4">
                Sprawdź swój aktualny poziom przygotowania do matury w zaledwie 25-35 minut!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Precyzyjna prognoza Twojego wyniku maturalnego</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Porównanie z wynikami tysięcy zdających</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Personalizowane wskazówki do poprawy</span>
                </li>
              </ul>
              <Link
                href="/barometr-opis"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition transform hover:scale-105"
              >
                Dowiedz się więcej
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-blue-50 opacity-20 rounded-lg"></div>
              <Image
                src="/barometrImage.png"
                alt="Wizualizacja Barometru Matematycznego"
                width={500}
                height={300}
                className="rounded-lg shadow-md relative z-10"
              />
            </div>
          </div>
        </motion.section>

        {/* Sekcja jak wygląda nauka */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Jak wygląda nauka w naszym kursie?
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={item}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">1. Wybierz dział</h3>
                <p className="text-gray-700 mb-4">
                  Kurs podzielony jest na kluczowe działy maturalne. Każdy zawiera tylko niezbędne
                  zagadnienia.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Działy w kursie:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Liczby rzeczywiste</li>
                    <li>Wyrażenia algebraiczne</li>
                    <li>Równania i nierówności liniowe</li>
                    <li>Układy równań</li>
                    <li>Funkcje</li>
                    <li>Funkcje liniowe</li>
                    <li>Funkcje kwadratowa</li>
                    <li>Ciągi</li>
                    <li>Trygonometria</li>
                    <li>Geometria analityczna</li>
                    <li>Kombinatoryka, Prawdopodobieństwo i elementy statystyki</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="bg-white p-6 rounded-lg shadow-lg min-h-[400px] flex flex-col">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  2. Oglądaj filmy instruktażowe
                </h3>
                <p className="text-gray-700 mb-4">
                  Każdy temat zaczyna się od nagrania wideo, gdzie tłumaczymy krok po kroku jak
                  rozwiązywać typowe zadania.
                </p>
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mt-auto">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/qbgdORRmyjk"
                    title="Przykładowy film instruktażowy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  3. Rozwiązuj zadania krok po kroku
                </h3>
                <p className="text-gray-700 mb-4">
                  Ćwicz na zadaniach wieloetapowych, gdzie każde rozwiązanie jest szczegółowo
                  wyjaśnione.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Przykładowe zadanie:</p>
                  <p className="text-gray-700 mt-2">
                    "Rozwiąż równanie kwadratowe x² - 5x + 6 = 0, a następnie podaj miejsca zerowe
                    funkcji."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  4. Sprawdzaj się na zadaniach zamkniętych
                </h3>
                <p className="text-gray-700 mb-4">
                  Po opanowaniu tematu, sprawdź swoją wiedzę na typowych zadaniach zamkniętych,
                  jakie pojawiają się na maturze.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Przykładowe zadanie zamknięte:</p>
                  <p className="text-gray-700 mt-2">
                    "Liczba rozwiązań równania 2x² - 8x + 8 = 0 wynosi: A) 0, B) 1, C) 2, D) 3"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* CTA do rejestracji */}
        {!token && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Gotowy, aby zdać maturę poprawkową?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dołącz do tysięcy uczniów, którzy dzięki naszemu kursowi osiągnęli sukces na maturze!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rejestracja"
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
              >
                Załóż konto teraz
              </Link>
              <Link
                href="/logowanie"
                className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg border border-white text-lg transition transform hover:scale-105"
              >
                Zaloguj się
              </Link>
            </div>
          </motion.section>
        )}

        {/* Opinie */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Co mówią o nas uczniowie?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Anna</h4>
                  <p className="text-gray-500 text-sm">Zdana matura 2025</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dzięki temu kursowi w końcu zrozumiałam matematykę! Zadania są świetnie
                wytłumaczone, a filmy bardzo pomocne. Polecam każdemu, kto ma problem z matematyką!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  P
                </div>
                <div>
                  <h4 className="font-semibold">Piotr</h4>
                  <p className="text-gray-500 text-sm">Zdana matura poprawkowa 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Nie wierzyłem, że uda mi się zdać maturę, ale ten kurs pokazał mi, że to możliwe.
                Szczególnie pomocne były zadania z poprzednich lat - dokładnie takie same były na
                mojej poprawce!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Marta</h4>
                  <p className="text-gray-500 text-sm">Zdana matura poprawkowa 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Kurs jest idealny dla osób, które potrzebują skupić się tylko na najważniejszych
                rzeczach. Zero zbędnych informacji, same konkrety. Dzięki niemu poprawiłam wynik o
                40%!"
              </p>
            </div>
          </div>
        </motion.section>

        {/* Social media */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">Dołącz do naszej społeczności!</h3>
          <p className="text-gray-600 mt-2 mb-4">
            Śledź nas na social mediach, aby być na bieżąco z nowymi materiałami i poradami.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.youtube.com/@AkademiaZada%C5%84"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-3xl hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573815694973&locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/akademiazadan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:text-pink-700"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
