"use client";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useAuth } from './UserData';

const Home: React.FC = () => {
  const { token, username } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 text-center">
        <div className="flex justify-center mb-6">
          <Image src="/logoGrayBackground.svg" alt="Smok" width={200} height={200} />
        </div>
        
        {token ? (
          <>
            <h2 className="text-5xl font-bold text-blue-600 mb-2">
              Witaj z powrotem, {username}!
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Kontynuuj swoją naukę matematyki z Akademią Zadań! Twoje postępy są już zapisane.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              Witamy w Akademii Zadań!
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Nauka matematyki jeszcze nigdy nie była tak prosta i przyjemna! Codzienne zadania, analiza wyników i prognozy egzaminacyjne w jednym miejscu.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/task-speedrun" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Zadaniowy speedrun</h3>
            <p className="text-gray-600 mt-4">
              Sprawdź się w matematycznym speedrunie! Rozwiązuj zadania jedno po drugim! Szybkość, precyzja i trening – to klucz do sukcesu na maturze!
            </p>
          </Link>
          <Link href="/barometr-opis" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Barometr</h3>
            <p className="text-gray-600 mt-4">
              Sprawdź swoją prognozę wyników na egzaminie i śledź postępy. Dowiedz się, które zagadnienia wymagają jeszcze pracy!
            </p>
          </Link>
        </div>

        {!token && (
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12">
            <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Zarejestruj się, aby odblokować pełne funkcje!</h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Tylko zalogowani użytkownicy mają dostęp do pełnych statystyk, śledzenia postępów i personalizowanych rekomendacji.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/rejestracja" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
              >
                Zarejestruj się
              </Link>
              <Link 
                href="/logowanie" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
              >
                Zaloguj się
              </Link>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/kurs-matura-podstawowa" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Kurs maturalny</h3>
            <p className="text-gray-600 mt-4">
              Kompleksowe przygotowanie do matury z matematyki na poziomie podstawowym. Przejdź przez wszystkie działy krok po kroku {token ? "ze śledzeniem postępów" : ""}!
            </p>
            {token && (
              <div className="mt-4 text-sm text-blue-600 font-medium">
                Twój postęp: 0% (rozpocznij kurs)
              </div>
            )}
          </Link>
          <Link href="/matura-probna" className="block bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500">Próbna matura</h3>
            <p className="text-gray-600 mt-4">
              Sprawdź się w warunkach egzaminacyjnych! Rozwiąż próbny arkusz maturalny przygotowany na podstawie analizy ostatnich lat.
            </p>
            {token && (
              <div className="mt-4 text-sm text-blue-600 font-medium">
                Ostatni wynik: nie rozwiązałeś jeszcze próbnej matury
              </div>
            )}
          </Link>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-12 text-left">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            {token ? "Twoje korzyści jako zalogowanego użytkownika" : "Dlaczego warto skorzystać z naszych materiałów?"}
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            {token ? (
              <>
                <p className="mb-4">
                  <span className="font-semibold text-blue-700">Śledzenie postępów:</span> Wszystkie Twoje wyniki są zapisywane, dzięki czemu możesz obserwować swoje poprawy w czasie.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-blue-700">Personalizowane rekomendacje:</span> Na podstawie Twoich wyników sugerujemy, które zagadnienia wymagają najwięcej pracy.
                </p>
                <p>
                  <span className="font-semibold text-blue-700">Pełna historia rozwiązań:</span> Możesz wrócić do wcześniej rozwiązanych zadań i przeanalizować swoje błędy.
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">
                  <span className="font-semibold text-blue-700">Kurs maturalny</span> to kompleksowe przygotowanie zawierające wszystkie wymagane działy matematyki. Każdy temat zawiera teorię, przykłady i zestawy zadań z pełnymi rozwiązaniami.
                </p>
                <p className="mb-4">
                  <span className="font-semibold text-blue-700">Próbna matura</span> to starannie wyselekcjonowane typy zadań, które z dużym prawdopodobieństwem pojawią się na prawdziwej maturze.
                </p>
                <p>
                  To lista tzw. <span className="font-bold text-green-700">pewniaków maturalnych</span> – jeśli chcesz mieć realną przewagę i uczyć się tego, co naprawdę się liczy, <span className="font-semibold text-blue-600">zacznij od naszych materiałów!</span>
                </p>
              </>
            )}
          </div>
          {!token && (
            <div className="mt-8 text-center">
              <Link 
                href="/kurs-matura-podstawowa" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105 mr-4"
              >
                Rozpocznij kurs
              </Link>
              <Link 
                href="/matura-probna" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
              >
                Rozwiąż próbną maturę
              </Link>
            </div>
          )}
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