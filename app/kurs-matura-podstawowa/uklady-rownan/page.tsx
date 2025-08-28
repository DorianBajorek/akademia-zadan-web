'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const RealNumbersCourse: React.FC = () => {
  const field = 'uklady-rownan';

  const [topicProgress, setTopicProgress] = useState<{ [key: string]: number }>({
    'Sprawdzenia spełnialności układów równań': 0,
    'Rozwiązywanie układów równań metodą podstawiania': 0,
    'Rozwiązywanie układów równań metodą przeciwnych współczynników': 0,
  });

  const topics = [
    {
      title: 'Sprawdzenia spełnialności układów równań',
      shortDesc:
        'Jak sprawdzić, czy układ równań ma rozwiązanie? Poznamy jak to zrobić i jak wykorzsytać to w praktyce.',
      slug: 'sprawdzenie-ukladow-rownan',
      icon: '🔍',
    },
    {
      title: 'Rozwiązywanie układów równań metodą podstawiania',
      shortDesc: 'Poznamy metodę podstawiania - jeden z podstawowych sposobów rozwiązywania układów równań.',
      slug: 'rozwiazywanie-ukladow-rownan-metoda-podstawiania',
      icon: '🔑',
    },
    {
      title: 'Rozwiązywanie układów równań metodą przeciwnych współczynników',
      shortDesc: 'Poznamy metodę przeciwnych współczynników - skuteczny sposób rozwiązywania układów równań.',
      slug: 'rozwiazywanie-ukladow-rownan-metoda-przeciwnych-wspolczynnikow',
      icon: '⚖️',
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

  const overallProgress = Math.round(
    Object.values(topicProgress).reduce((a, b) => a + b, 0) / Object.keys(topicProgress).length
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center mb-8">
          <Link href="/kurs-matura-podstawowa" className="mr-4 text-blue-600 hover:text-blue-800">
            ← Wróć do kursu
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Układy równań</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
            Dział „Układy równań” skupia się na sprawdzaniu, czy dana para liczb jest rozwiązaniem
            układu równań, bez konieczności pełnego rozwiązywania go. Nauczysz się podstawowej
            metody podstawiania wartości do każdego równania, aby szybko zweryfikować poprawność
            rozwiązania. Ta umiejętność jest szczególnie przydatna w zadaniach zamkniętych, gdzie
            liczy się czas i precyzja. Dzięki niej łatwiej ocenisz, które pary spełniają warunki
            układu, co ułatwia dalszą pracę z równaniami.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/uklady-rownan/${topic.slug}`}
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
                    {(topicProgress[topic.slug] || 0)}% ukończono
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
