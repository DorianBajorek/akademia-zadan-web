'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import TaskCards from '@/components/TaskCards';
import TopicStats from '@/components/TopicStats';
import { getProblemProgress } from '@/service';
import { useAuth } from '@/app/UserData';

type Task = {
  id: string;
  title: string;
  description: string;
  img: string;
  isCompleted: boolean;
};

const LOCAL_TASKS_META = [
  {
    id: '800',
    title: 'Zadanie 1',
    description: 'Dodawanie ułamków',
    img: '/problemImages/problem800.png',
  },
  {
    id: '801',
    title: 'Zadanie 2',
    description: 'Odejmowanie ułamków',
    img: '/problemImages/problem801.png',
  },
  {
    id: '802',
    title: 'Zadanie 3',
    description: 'Mnożenie ułamków',
    img: '/problemImages/problem802.png',
  },
  {
    id: '803',
    title: 'Zadanie 4',
    description: 'Dzielenie ułamków',
    img: '/problemImages/problem803.png',
  },
  {
    id: '804',
    title: 'Zadanie 5',
    description: 'Trudniejsze zadanie na ułamkach',
    img: '/problemImages/problem804.png',
  },
  {
    id: '805',
    title: 'Zadanie 6',
    description: 'Trudniejsze zadanie na ułamkach',
    img: '/problemImages/problem805.png',
  },
  {
    id: '806',
    title: 'Zadanie 7',
    description: 'Ułamek z niewiadomą',
    img: '/problemImages/problem806.png',
  },
  {
    id: '807',
    title: 'Zadanie 8',
    description: 'Porównywanie ułamków',
    img: '/problemImages/problem807.png',
  },
  {
    id: '808',
    title: 'Zadanie 9',
    description: 'Ułamki dziesiętne i zwykłe',
    img: '/problemImages/problem808.png',
  },
  {
    id: '809',
    title: 'Zadanie 10',
    description: 'Ułamki w zadaniach tekstowych',
    img: '/problemImages/problem809.png',
  },
  {
    id: '810',
    title: 'Zadanie 11',
    description: 'Skracanie i rozszerzanie ułamków',
    img: '/problemImages/problem810.png',
  },
  // {
  //   id: "811",
  //   title: "Zadanie 12",
  //   description: "Zastosowania ułamków w praktyce",
  //   img: "/problemImages/problem811.png",
  // },
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
          'dzialania-na-ulamkach',
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

  const firstGroup = tasks.filter((task) => parseInt(task.id) >= 800 && parseInt(task.id) <= 804);
  const secondGroup = tasks.filter((task) => parseInt(task.id) >= 805 && parseInt(task.id) <= 809);
  const thirdGroup = tasks.filter((task) => parseInt(task.id) >= 810);

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

        <VideoSection youtubeId="DlC-AfObAOM" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Działania na ułamkach'}
        />

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-12">Ładowanie zadań...</p>
        ) : (
          <>
            <Section
              title="Zadania podstawowe"
              description="Ćwiczenia wprowadzające"
              tasks={firstGroup}
            />
            <Section title="Zadania zamknięte" description="Sprawdź się!" tasks={secondGroup} />
            <Section
              title="Zadania otwarte"
              description="Warte więcej punktów"
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
