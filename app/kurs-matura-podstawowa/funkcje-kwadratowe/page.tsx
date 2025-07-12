'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const RealNumbersCourse: React.FC = () => {
  const field = 'funcje-kwadratowe';

const [topicProgress, setTopicProgress] = useState<{ [key: string]: number }>({
  'Własności współczynników a, b, c': 0,
  'Miejsca zerowe funkcji kwadratowej': 0,
  'Rozwiązywanie równań kwadratowych': 0,
  'Postać iloczynowa funkcji kwadratowej': 0,
  'Postać kanoniczna funkcji kwadratowej': 0,
  'Rozwiązywanie nierówności kwadratowych': 0,
  'Oś symetrii paraboli': 0,
  'Wykres funkcji kwadratowej': 0,
  'Równania wielomianowe': 0,
});

  const topics = [
    {
      title: 'Własności współczynników a, b, c',
      shortDesc: 'Analiza wpływu współczynników a, b, c na wykres funkcji oraz wierzchołek paraboli',
      slug: 'wlasnosci-wspolczynnikow-funkcji-kwadratowej',
      icon: '📘',
    },
    {
      title: 'Miejsca zerowe funkcji kwadratowej',
      shortDesc: 'Obliczanie miejsc zerowych z wykorzystaniem delty i wzorów kwadratowych',
      slug: 'miejsca-zerowe-funkcji-kwadratowej',
      icon: '0️⃣',
    },
    {
      title: 'Rozwiązywanie równań kwadratowych',
      shortDesc: 'Metody rozwiązywania równań kwadratowych: faktoryzacja, delta, wzory Viète’a',
      slug: 'rownania-kwadratowe',
      icon: '🧩',
    },
    {
      title: 'Postać iloczynowa funkcji kwadratowej',
      shortDesc: 'Zapis funkcji kwadratowej w postaci iloczynowej: \( f(x) = a(x - x_1)(x - x_2) \)',
      slug: 'postac-iloczynowa-funkcji-kwadratowej',
      icon: '✖️',
    },
    {
      title: 'Postać kanoniczna funkcji kwadratowej',
      shortDesc: 'Przekształcanie funkcji do postaci kanonicznej: \( f(x) = a(x - p)^2 + q \)',
      slug: 'postac-kanoniczna-funkcji-kwadratowej',
      icon: '🔧',
    },
    {
      title: 'Rozwiązywanie nierówności kwadratowych',
      shortDesc: 'Techniki rozwiązywania nierówności kwadratowych i interpretacja graficzna',
      slug: 'nierownosci-kwadratowe',
      icon: '🔍',
    },
    {
      title: 'Oś symetrii paraboli',
      shortDesc: 'Wyznaczanie osi symetrii wykresu funkcji kwadratowej',
      slug: 'os-symetrii-paraboli',
      icon: '🧭',
    },
    {
      title: 'Wykres funkcji kwadratowej',
      shortDesc: 'Odczytywanie informacji z wykresu funkcji kwadratowej',
      slug: 'wykres-funkcji-kwadratowej',
      icon: '🎯',
    },
    {
      title: 'Równania wielomianowe',
      shortDesc: 'Poznaj wzory skróconego mnożenia i ich zastosowanie w uproszczeniach wyrażeń algebraicznych.',
      slug: 'rownania-wielomianowe',
      icon: '()²',
    },
  ];

  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopicsProgress(field, token);
        if (data) {
          setTopicProgress(data);
        }
      } catch (error) {
        console.error('Error fetching topics progress', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
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
            Dział „Funkcja kwadratowa” omawia funkcje zapisane wzorem kwadratowym, gdzie kluczową
            rolę odgrywają współczynniki a, b i c. Nauczysz się wyznaczać miejsca zerowe, czyli
            punkty, w których wykres przecina oś OX, oraz wierzchołek paraboli, który określa jej
            najwyższy lub najniższy punkt...
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/funkcje-kwadratowe/${topic.slug}`}
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
                      style={{
                        width: `${topicProgress[topic.slug as keyof typeof topicProgress] || 0}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {topicProgress[topic.slug as keyof typeof topicProgress] || 0}% ukończono
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
