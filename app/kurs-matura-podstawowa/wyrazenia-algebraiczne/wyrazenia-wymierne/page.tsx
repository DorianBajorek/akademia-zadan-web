'use client';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import TaskCards from '@/components/TaskCards';
import TopicStats from '@/components/TopicStats';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { getProblemProgress } from '@/service';

const LOCAL_TASKS_META = [
  {
    id: '7000',
    title: 'Zadanie 1',
    description: 'Rozwiązywanie równań wymiernych - znajdź rozwiązania w określonym przedziale.',
    img: '/problemImages/problem6000.png',
    isCompleted: false,
  },
  {
    id: '7001',
    title: 'Zadanie 2',
    description: 'Upraszczanie wyrażeń wymiernych - wybierz poprawną odpowiedź.',
    img: '/problemImages/problem6001.png',
    isCompleted: false,
  },
  {
    id: '7002',
    title: 'Zadanie 3',
    description: 'Dzielenie wyrażeń wymiernych - uprość i wybierz poprawną odpowiedź.',
    img: '/problemImages/problem6002.png',
    isCompleted: false,
  },
  {
    id: '7003',
    title: 'Zadanie 4',
    description: 'Dzielenie wyrażeń wymiernych - uprość wyrażenie i wybierz poprawną odpowiedź.',
    img: '/problemImages/problem7003.png',
    isCompleted: false,
  },
];

const TopicTasksPage = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) {
        // If no token, show local tasks
        setTasks(LOCAL_TASKS_META);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getProblemProgress(
          'wyrazenia-algebraiczne',
          'wyrazenia-wymierne',
          token
        );

        if (response && response.tasks) {
          const mergedTasks = response.tasks.map((taskFromApi: any) => {
            const meta = LOCAL_TASKS_META.find((m) => m.id === String(taskFromApi.id));
            return {
              id: taskFromApi.id,
              title: meta?.title || `Zadanie ${taskFromApi.id}`,
              description: meta?.description || '',
              img: meta?.img || '',
              isCompleted: taskFromApi.completed || false,
            };
          });
          setTasks(mergedTasks);
        } else {
          // If API response is empty, show local tasks
          setTasks(LOCAL_TASKS_META);
        }
      } catch (error) {
        console.error('Nie udało się pobrać zadań', error);
        setError('Błąd podczas pobierania zadań');
        // Show local tasks as fallback
        setTasks(LOCAL_TASKS_META);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token]);

  const completedCount = tasks.filter((task) => task.isCompleted).length;

  // Group tasks - all are multi-step tasks
  const allTasks = tasks.filter((task) => parseInt(task.id) >= 7000 && parseInt(task.id) <= 7003);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col pt-20">
        <Nav />
        <div className="max-w-7xl mx-auto w-full px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Ładowanie zadań...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/wyrazenia-algebraiczne/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-500 group-hover:text-gray-700 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Powrót do działu</span>
          </Link>
        </div>

        <VideoSection youtubeId="ah14ixiKFw4" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        {error && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Uwaga:</strong> {error}. Pokazano lokalne zadania.
            </p>
          </div>
        )}

        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Wyrażenia wymierne'}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania wieloetapowe</h2>
            <p className="text-gray-600 mt-2">Wyjaśnienie krok po kroku</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allTasks.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;