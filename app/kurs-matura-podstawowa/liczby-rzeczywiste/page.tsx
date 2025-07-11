'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const RealNumbersCourse: React.FC = () => {
  const { token } = useAuth();
  const field = 'liczby-rzeczywiste';

  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});

  const topics = [
    {
      title: 'Działania na ułamkach',
      shortDesc: 'Dodawanie, odejmowanie, mnożenie, dzielenie',
      slug: 'dzialania-na-ulamkach',
      icon: '➕',
    },
    {
      title: 'Obliczanie na potęg',
      shortDesc: 'Potęgi o wykładnikach całkowitych oraz wymiernych - podstawowe własności',
      icon: '🔢',
      slug: 'potegi',
    },
    {
      title: 'Pierwiastki i działania na pierwiastkach',
      shortDesc: 'Właściwości i operacje na pierwiastkach',
      icon: '√',
      slug: 'dzialania-na-pierwiastkach',
    },
    {
      title: 'Obliczanie logarytmu',
      shortDesc: 'Obliczanie podstawowych logarytmów',
      icon: '㏒',
      slug: 'logarytmy',
    },
    {
      title: 'działania na logarytmach',
      shortDesc: 'Działania na logarytmach, podstawowe wzory',
      icon: '2㏒',
      slug: 'dzialania-na-logarytmach',
    },
    {
      title: 'Własności wartości bezwzględnej',
      shortDesc: 'Właściwości i zastosowania wartości bezwzględnej',
      slug: 'wlasnosci-wartosci-bezwzglednej',
      icon: '|-2+√2|',
    },
    {
      title: 'Równania z wartością bezwzględną',
      shortDesc: 'Rozwiązywanie równań z wartością bezwzględną',
      slug: 'rownania-z-wartoscia-bezwzgledna',
      icon: '|x+2|',
    },
  ];

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

    fetchData();
  }, [token]);

  const overallProgress = Math.round(
    topics.reduce((sum, topic) => sum + (topicProgress[topic.slug] || 0), 0) / topics.length
  );

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
            Dział „Liczby rzeczywiste” obejmuje zagadnienia związane z potęgowaniem,
            pierwiastkowaniem oraz logarytmami, które są podstawowymi narzędziami w analizie
            matematycznej. Uczysz się tu, jak operować potęgami o różnych wykładnikach, a także jak
            upraszczać i przekształcać wyrażenia z pierwiastkami. Logarytmy – będące działaniem
            odwrotnym do potęgowania – pozwalają rozwiązywać równania wykładnicze, a znajomość ich
            własności ułatwia wykonywanie działań takich jak dodawanie czy odejmowanie logarytmów.
            Dodatkowo omawiana jest wartość bezwzględna, czyli odległość liczby od zera na osi
            liczbowej, przydatna m.in. w zagadnieniach geometrycznych i nierównościach.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/liczby-rzeczywiste/${topic.slug}`}
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
                      style={{ width: `${topicProgress[topic.slug] || 0}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {topicProgress[topic.slug] || 0}% ukończono
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
