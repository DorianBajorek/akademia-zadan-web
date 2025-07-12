'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import TaskCards from '@/components/TaskCards';
import TopicStats from '@/components/TopicStats';
import { getProblemProgress } from '@/service';
import { useAuth } from '@/app/UserData';

const LOCAL_TASKS_META = [
  {
    id: '500',
    title: 'Podstawowe działania',
    description: 'Wykonaj kolejne działania arytmetyczne',
    img: '/problemImages/problem500.png',
  },
  {
    id: '501',
    title: 'Podstawowe działania',
    description: 'Oblicz wartości potęg o wykładnikach naturalnych',
    img: '/problemImages/problem501.png',
  },
  {
    id: '502',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem502.png',
  },
  {
    id: '503',
    title: 'Podstawowe działania',
    description: 'Wykonaj kolejne działania arytmetyczne',
    img: '/problemImages/problem503.png',
  },
  {
    id: '504',
    title: 'Podstawowe działania',
    description: 'Oblicz wartości potęg o wykładnikach naturalnych',
    img: '/problemImages/problem504.png',
  },
  {
    id: '505',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem505.png',
  },
  {
    id: '506',
    title: 'Podstawowe działania',
    description: 'Wykonaj kolejne działania arytmetyczne',
    img: '/problemImages/problem506.png',
  },
  {
    id: '507',
    title: 'Podstawowe działania',
    description: 'Oblicz wartości potęg o wykładnikach naturalnych',
    img: '/problemImages/problem507.png',
  },
  {
    id: '508',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem508.png',
  },
  {
    id: '509',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem509.png',
  },
  {
    id: '510',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem510.png',
  },
  {
    id: '511',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem511.png',
  },
  {
    id: '512',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem512.png',
  },
  {
    id: '513',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem513.png',
  },
  {
    id: '514',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem514.png',
  },
  {
    id: '515',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem515.png',
  },
  {
    id: '516',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem516.png',
  },
  {
    id: '517',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem517.png',
  },
  {
    id: '518',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem518.png',
  },
  {
    id: '519',
    title: 'Podstawowe działania',
    description: 'Uprość wyrażenia z pierwiastkami',
    img: '/problemImages/problem519.png',
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
          'liczby-rzeczywiste',
          'dzialania-na-potegach',
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

  const firstGroup = tasks.filter((task) => parseInt(task.id) <= 509 && parseInt(task.id) >= 500);
  const secondGroup = tasks.filter((task) => parseInt(task.id) <= 515 && parseInt(task.id) >= 510);
  const thirdGroup = tasks.filter((task) => parseInt(task.id) >= 516);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/liczby-rzeczywiste/"
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

        <VideoSection youtubeId="U6Il0yWVfy4" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Działania na potęgach'}
        />

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-12">Ładowanie zadań...</p>
        ) : (
          <>
            <Section
              title="Zadania wieloetapowe"
              description="Do samodzielnej nauki"
              tasks={firstGroup}
            />
            <Section title="Zadania zamknięte" description="Sprawdź się!" tasks={secondGroup} />
            <Section
              title="Zadania otwarte"
              description="Zadania autorskie i maturalne"
              tasks={thirdGroup}
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

const Section = ({
  title,
  description,
  tasks,
}: {
  title: string;
  description: string;
  tasks: Task[];
}) => (
  <>
    <div className="col-span-full py-8 text-center">
      <div className="border-t-2 border-b-2 border-gray-300 py-4">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {tasks.map((task) => (
        <TaskCards key={task.id} tasks={[task]} />
      ))}
    </div>
  </>
);

export default TopicTasksPage;
