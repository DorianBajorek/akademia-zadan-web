"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useEffect } from "react";
import { useAuth } from "@/app/UserData";
import { getTopicsProgress } from "@/service";

const RealNumbersCourse: React.FC = () => {
  const field = "liczby-rzeczywiste"
  const topicProgress = {
    "Działania na liczbach rzeczywistych": 90,
    "Obliczanie na potęg": 0,
    "Pierwiastki i działania na pierwiastkach": 0,
    "Obliczanie logarytmu": 0,
    "Przekształcanie wyrażeń": 0,
    "Zaokrąglanie i szacowanie": 0,
    "Notacja wykładnicza": 0,
    "Wartość bezwzględna": 0,
    "Porównywanie liczb": 0,
    "Oś liczbowa": 0,
    "Procenty": 0
  };

  const topics = [
    {
      title: "Własności współczynników a, b, c",
      shortDesc: "Analiza wpływu współczynników a, b, c na wykres funkcji oraz wierzchołek paraboli",
      slug: "/funkcje-kwadratowe/wlasnosci-wspolczynnikow-funkcji-kwadratowej",
      icon: "📘"
    },
    {
      title: "Miejsca zerowe funkcji kwadratowej",
      shortDesc: "Obliczanie miejsc zerowych z wykorzystaniem delty i wzorów kwadratowych",
      slug: "/funkcje-kwadratowe/miejsca-zerowe-funkcji-kwadratowej",
      icon: "0️⃣"
    },
    {
      title: "Rozwiązywanie równań kwadratowych",
      shortDesc: "Metody rozwiązywania równań kwadratowych: faktoryzacja, delta, wzory Viète’a",
      slug: "/funkcje-kwadratowe/rownania-kwadratowe",
      icon: "🧩"
    },
    {
      title: "Postać iloczynowa funkcji kwadratowej",
      shortDesc: "Zapis funkcji kwadratowej w postaci iloczynowej: \( f(x) = a(x - x_1)(x - x_2) \)",
      slug: "/funkcje-kwadratowe/postac-iloczynowa-funkcji-kwadratowej",
      icon: "✖️"
    },
    {
      title: "Postać kanoniczna funkcji kwadratowej",
      shortDesc: "Przekształcanie funkcji do postaci kanonicznej: \( f(x) = a(x - p)^2 + q \)",
      slug: "/funkcje-kwadratowe/postac-kanoniczna-funkcji-kwadratowej",
      icon: "🔧"
    },
    {
      title: "Rozwiązywanie nierówności kwadratowych",
      shortDesc: "Techniki rozwiązywania nierówności kwadratowych i interpretacja graficzna",
      slug: "/funkcje-kwadratowe/nierownosci-kwadratowe",
      icon: "🔍"
    },
    {
      title: "Oś symetrii paraboli",
      shortDesc: "Wyznaczanie osi symetrii wykresu funkcji kwadratowej",
      slug: "/funkcje-kwadratowe/os-symetrii-paraboli",
      icon: "🧭"
    },
    // {
    //   title: "Zadania optymalizacyjne",
    //   shortDesc: "Zastosowanie funkcji kwadratowej do rozwiązywania problemów optymalizacyjnych",
    //   slug: "/funkcje-kwadratowe/optymalizacja-funkcji-kwadratowej",
    //   icon: "🎯"
    // },
    {
      title: "Wykres funkcji kwadratowej",
      shortDesc: "Odczytywanie informacji z wykresu funkcji kwadratowej",
      slug: "/funkcje-kwadratowe/wykres-funkcji-kwadratowej",
      icon: "🎯"
    },
    {
      title: "Równania wielomianowe",
      shortDesc: "Poznaj wzory skróconego mnożenia i ich zastosowanie w uproszczeniach wyrażeń algebraicznych. Pojawią się również w kontekscie liczb rzeczywistych.",
      slug: "/wyrazenia-algebraiczne/rownania-wielomianowe",
      icon: "()²"
    },
  ]; 

  const {token} = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopicsProgress(field, token);
        if (data) {
        }
      } catch (error) {
        console.error("Error fetching topics progress", error);
      }
    };
  
    if(token) {
      fetchData();
    }
  }, [token]);
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center mb-8">
          <Link href="/kurs-matura-podstawowa" className="mr-4 text-blue-600 hover:text-blue-800">
            ← Wróć do kursu
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Liczby rzeczywiste</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
           Dział „Funkcja kwadratowa” omawia funkcje zapisane wzorem kwadratowym, gdzie kluczową rolę odgrywają współczynniki a, b i c. Nauczysz się wyznaczać miejsca zerowe, czyli punkty, w których wykres przecina oś OX, oraz wierzchołek paraboli, który określa jej najwyższy lub najniższy punkt. Poznasz różne formy zapisu funkcji kwadratowej, takie jak kanoniczna i iloczynowa, oraz nauczysz się rozwiązywać nierówności kwadratowe. Opanowanie tych zagadnień jest niezbędne do analizy i szkicowania wykresów funkcji kwadratowych.
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Ogólny postęp w dziale:</span>
              <span>{
                Math.round(
                  Object.values(topicProgress).reduce((a, b) => a + b, 0) / 
                  Object.keys(topicProgress).length
                )
              }%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ 
                  width: `${Object.values(topicProgress).reduce((a, b) => a + b, 0) / Object.keys(topicProgress).length}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link 
              key={index}
              href={`/kurs-matura-podstawowa/${topic.slug || topic.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-5 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-3 mt-1">{topic.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.shortDesc}</p>
                  
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${topicProgress[topic.title as keyof typeof topicProgress]}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {topicProgress[topic.title as keyof typeof topicProgress]}% ukończono
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default RealNumbersCourse;