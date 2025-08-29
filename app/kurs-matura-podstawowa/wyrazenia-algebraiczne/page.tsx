'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const AlgebraicExpressionsCourse: React.FC = () => {
  const { token } = useAuth();
  const field = 'wyrazenia-algebraiczne';

  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});

  const topics = [
    {
      title: 'Działania na podstawowych wyrażeniach algebraicznych',
      shortDesc:
        'W tym dziale skupimy się na działaniach na literkach. Poznamy zasady dodawania, odejmowania, mnożenia i dzielenia wyrażeń algebraicznych.',
      slug: 'dzialania-na-wyrazeniach-algebraicznych',
      icon: 'xyz',
    },
    {
      title: 'Wzory skróconego mnożenia',
      shortDesc:
        'Poznaj wzory skróconego mnożenia i ich zastosowanie w uproszczeniach wyrażeń algebraicznych. Pojawią się również w kontekscie liczb rzeczywistych.',
      slug: 'wzory-skroconego-mnozenia',
      icon: '()²',
    },
    {
      title: 'Wyrażenia wymierne',
      shortDesc:
        'Poznaj operacje na ułamkach algebraicznych, rozwiązywanie równań wymiernych i określanie dziedziny wyrażeń wymiernych.',
      slug: 'wyrazenia-wymierne',
      icon: 'P(x)/Q(x)',
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

    if (token) {
      fetchData();
    }
  }, [token]);

  const overallProgress = Math.round(
    topics.reduce((sum, topic) => sum + (topicProgress[topic.slug] || 0), 0) / topics.length
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center mb-8">
          <Link href="/kurs-matura-podstawowa" className="mr-4 text-blue-600 hover:text-blue-800">
            ← Wróć do kursu
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Wyrażenia Algebraiczne</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
            Dział „Wyrażenia algebraiczne” skupia się na operacjach na liczbach rzeczywistych oraz
            przekształcaniu wyrażeń z użyciem liter (zmiennych). Nauczysz się tu dodawać, odejmować,
            mnożyć i dzielić wyrażenia algebraiczne, a także upraszczać je poprzez redukowanie
            wyrazów podobnych. Szczególny nacisk położony jest na opanowanie wzorów skróconego
            mnożenia, które pozwalają szybko i sprawnie przekształcać wyrażenia kwadratowe i
            sześcienne. Umiejętność ich stosowania znacznie ułatwia późniejsze rozwiązywanie równań
            i analizowanie funkcji.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/wyrazenia-algebraiczne/${topic.slug}`}
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
                        width: `${topicProgress[topic.slug] || 0}%`,
                      }}
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

export default AlgebraicExpressionsCourse;
