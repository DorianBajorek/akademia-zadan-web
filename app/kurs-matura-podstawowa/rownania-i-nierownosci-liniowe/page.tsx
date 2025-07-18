'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const RealNumbersCourse: React.FC = () => {
  const field = 'rownania-i-nierownosci-liniowe';
  const [topicProgress, setTopicProgress] = useState<{ [key: string]: number }>({
    'Równania liniowe': 0,
    'Nierówności liniowe': 0,
  });

  const topics = [
    {
      title: 'Równania liniowe',
      shortDesc:
        'Nauczymy się rozwiązywać równania liniowe z jedną niewiadomą. Jest to podstawowa wiedza każdego maturzysty.',
      slug: 'rownania-liniowe',
      icon: 'x',
    },
    {
      title: 'Nierówności liniowe',
      shortDesc:
        'Temat podobny do równania liniowego, ale z dodatkowymi zasadami. Poznamy również sposoby graficznego przedstawiania rozwiązań.',
      slug: 'nierownosci-liniowe',
      icon: '≤',
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
          <h1 className="text-4xl font-bold text-gray-800">Równania i nierównosci liniowe</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
            Dział „Równania i nierówności liniowe” wprowadza podstawowe metody rozwiązywania równań
            oraz nierówności o pierwszym stopniu. Nauczysz się, jak przekształcać i rozwiązywać
            równania liniowe, a także jak interpretować i rozwiązywać nierówności liniowe z jedną
            niewiadomą. Poznasz zasady pracy z nierównościami, w tym zmianę kierunku znaku
            nierówności przy mnożeniu przez liczby ujemne. Opanowanie tych umiejętności jest
            kluczowe do rozwiązywania prostych problemów algebraicznych i analizy zależności między
            zmiennymi.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/rownania-i-nierownosci-liniowe/${topic.slug}`}
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
