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
    id: '2600',
    title: 'Zadanie 1',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2600.png',
    isCompleted: true,
  },
  {
    id: '2601',
    title: 'Zadanie 2',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2601.png',
    isCompleted: true,
  },
  {
    id: '2602',
    title: 'Zadanie 3',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2602.png',
    isCompleted: true,
  },
  {
    id: '2603',
    title: 'Zadanie 4',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2603.png',
    isCompleted: true,
  },
  {
    id: '2604',
    title: 'Zadanie 5',
    description: 'Liczba rozwiązań układu równań',
    img: '/problemImages/problem2604.png',
    isCompleted: true,
  },
  {
    id: '2605',
    title: 'Zadanie 6',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2605.png',
    isCompleted: true,
  },
  {
    id: '2606',
    title: 'Zadanie 7',
    description: 'Spełnialność układu równań',
    img: '/problemImages/problem2606.png',
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
        const response = await getProblemProgress(
          'uklady-rownan',
          'sprawdzenie-ukladow-rownan',
          token
        );

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

  const firstGroup = tasks.filter((task) => parseInt(task.id) <= 2602 && parseInt(task.id) >= 2600);
  const secondGroup = tasks.filter(
    (task) => parseInt(task.id) <= 2606 && parseInt(task.id) >= 2603
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/uklady-rownan/"
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

        <VideoSection youtubeId="CrTWBy7rv0A" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Sprwadzenia spełnialności układów równań'}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania wieloetapowe</h2>
            <p className="text-gray-600 mt-2">Do samodzielnej nauki</p>
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
            <p className="text-gray-600 mt-2">Sprwadź się!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {secondGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;
