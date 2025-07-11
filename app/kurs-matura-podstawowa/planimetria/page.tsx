'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getTopicsProgress } from '@/service';

const PlanimetryCourse: React.FC = () => {
  const field = 'planimetria'; // lub zmień na np. 'planimetria' jeśli to osobny dział

  const topics = [
    {
      title: 'Kąty w okręgu',
      shortDesc: 'Obliczanie miar kątów wpisanych i środkowych w okręgu',
      slug: 'katy-w-okregu',
      icon: '°',
    },
  ];

  const [topicProgress, setTopicProgress] = useState<{ [key: string]: number }>(
    Object.fromEntries(topics.map((topic) => [topic.title, 0]))
  );

  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopicsProgress(field, token);
        if (data) {
          setTopicProgress((prev) => ({
            ...prev,
            ...data,
          }));
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
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="max-w-7xl mx-auto px-6 py-12 flex-1">
        <div className="flex items-center mb-8">
          <Link href="/kurs-matura-podstawowa" className="mr-4 text-blue-600 hover:text-blue-800">
            ← Wróć do kursu
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">Planimetria</h1>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">O dziale</h2>
          <p className="text-gray-700">
            Dział „Planimetria – kąty w okręgu” dotyczy właściwości kątów związanych z okręgiem i
            jego elementami. Nauczysz się rozpoznawać kąty wpisane, środkowe oraz kąty między
            cięciami i stycznymi. Poznasz zależności między tymi kątami oraz ich zastosowanie w
            rozwiązywaniu zadań geometrycznych. Ta wiedza jest kluczowa do zrozumienia geometrii
            okręgów i figur na nich opartych.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tematy w dziale</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={`/kurs-matura-podstawowa/planimetria/${topic.slug}`}
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

export default PlanimetryCourse;
