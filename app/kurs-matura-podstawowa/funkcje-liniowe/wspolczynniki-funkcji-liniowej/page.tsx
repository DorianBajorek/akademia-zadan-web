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
    id: '4500',
    title: 'Zadanie 1',
    description: 'Współczynniki funkcji liniowej',
    img: '/problemImages/problem4500.png',
    isCompleted: false,
  },
  {
    id: '4501',
    title: 'Zadanie 2',
    description: 'Współczynniki funkcji liniowej',
    img: '/problemImages/problem4501.png',
    isCompleted: false,
  },
  {
    id: '4502',
    title: 'Zadanie 3',
    description: 'Współczynniki funkcji liniowej',
    img: '/problemImages/problem4502.png',
    isCompleted: false,
  },
  {
    id: '4503',
    title: 'Zadanie 4',
    description: 'Równanie prostej',
    img: '/problemImages/problem4503.png',
    isCompleted: false,
  },
  {
    id: '4504',
    title: 'Zadanie 5',
    description: 'Kąt nachylenia prostej',
    img: '/problemImages/problem4504.png',
    isCompleted: false,
  },
  {
    id: '4505',
    title: 'Zadanie 6',
    description: 'Kąt nachylenia prostej',
    img: '/problemImages/problem4505.png',
    isCompleted: false,
  },
  {
    id: '4506',
    title: 'Zadanie 7',
    description: 'Własności funkcji liniowej',
    img: '/problemImages/problem4506.png',
    isCompleted: false,
  },
  {
    id: '4507',
    title: 'Zadanie 8',
    description: 'Własności funkcji liniowej',
    img: '/problemImages/problem4507.png',
    isCompleted: false,
  },
  {
    id: '4508',
    title: 'Zadanie 9',
    description: 'Własności funkcji liniowej',
    img: '/problemImages/problem4508.png',
    isCompleted: false,
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
          'funkcje-liniowe',
          'wspolczynniki-funkcji-liniowej',
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

  const firstGroup = tasks.filter((task) => parseInt(task.id) >= 4500 && parseInt(task.id) <= 4505);
  const secondGroup = tasks.filter(
    (task) => parseInt(task.id) >= 4506 && parseInt(task.id) <= 4508
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/funkcje-liniowe"
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

        <VideoSection youtubeId="" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Współczynniki funkcji liniowej'}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania wieloetapowe</h2>
            <p className="text-gray-600 mt-2">Wytłuamczenie krok po kroku</p>
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
