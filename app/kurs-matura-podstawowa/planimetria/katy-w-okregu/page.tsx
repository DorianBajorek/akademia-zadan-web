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
    id: '4000',
    title: 'Kąty w okręgu',
    description: 'Kąt środkowy i wpisany',
    img: '/problemImages/problem4000.png',
    isCompleted: true,
  },
  {
    id: '4001',
    title: 'Kąty w okręgu',
    description: 'Kąt środkowy i wpisany',
    img: '/problemImages/problem4001.png',
    isCompleted: true,
  },
  {
    id: '4002',
    title: 'Kąty w okręgu',
    description: 'Trójkąt równoramienny',
    img: '/problemImages/problem4002.png',
    isCompleted: true,
  },
  {
    id: '4003',
    title: 'Kąty w okręgu',
    description: 'Styczna do okręgu',
    img: '/problemImages/problem4003.png',
    isCompleted: true,
  },
  {
    id: '4004',
    title: 'Kąty w okręgu',
    description: 'Te same łuki',
    img: '/problemImages/problem4004.png',
    isCompleted: true,
  },
  {
    id: '4005',
    title: 'Kąty w okręgu',
    description: 'Trójkąt równoramienny',
    img: '/problemImages/problem4005.png',
    isCompleted: true,
  },
  {
    id: '4006',
    title: 'Kąty w okręgu',
    description: 'Trójką równoboczny',
    img: '/problemImages/problem4006.png',
    isCompleted: true,
  },
  {
    id: '4007',
    title: 'Kąty w okręgu',
    description: 'Własności trójkąta',
    img: '/problemImages/problem4007.png',
    isCompleted: true,
  },
  {
    id: '4008',
    title: 'Kąty w okręgu',
    description: 'Kąty środkowe i wpisane',
    img: '/problemImages/problem4008.png',
    isCompleted: true,
  },
  {
    id: '4009',
    title: 'Kąty w okręgu',
    description: 'Kąty środkowe i wpisane',
    img: '/problemImages/problem4009.png',
    isCompleted: true,
  },
];
const TopicTasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) return;

      try {
        const response = await getProblemProgress('planimetria', 'katy-w-okregu', token);

        const mergedTasks = response.tasks.map((taskFromApi: any) => {
          const meta = LOCAL_TASKS_META.find((m) => m.id === String(taskFromApi.id));
          return {
            id: taskFromApi.id,
            title: meta?.title || `Zadanie ${taskFromApi.id}`,
            description: meta?.description || '',
            img: meta?.img || '',
            isCompleted: taskFromApi.completed,
          };
        });

        setTasks(mergedTasks);
      } catch (error) {
        console.error('Nie udało się pobrać zadań', error);
      }
    };

    fetchTasks();
  }, [token]);
  const completedCount = tasks.filter((task) => task.isCompleted).length;

  const firstGroup = tasks.filter((task) => parseInt(task.id) <= 4000 && parseInt(task.id) >= 4000);
  const secondGroup = tasks.filter(
    (task) => parseInt(task.id) <= 4009 && parseInt(task.id) >= 4001
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/planimetria"
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

        <VideoSection youtubeId="Vh6XLazcSW8" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Kąty w okręgu'}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania wprowadzające</h2>
            <p className="text-gray-600 mt-2">Poznaj podstawowe własności kątów w okręgu</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {firstGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania zamknięte</h2>
            <p className="text-gray-600 mt-2">Sprawdź się w krótkich pytaniach</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {secondGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania otwarte</h2>
            <p className="text-gray-600 mt-2">Rozwiązuj zadania wieloetapowe i maturalne</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;
