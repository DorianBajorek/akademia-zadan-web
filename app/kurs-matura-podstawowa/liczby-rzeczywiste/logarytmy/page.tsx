"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
  {
    id: "300",
    title: "Zadanie 21",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem300.png",
    isCompleted: false,
  },
  {
    id: "301",
    title: "Zadanie 22",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem301.png",
    isCompleted: false,
  },
  {
    id: "302",
    title: "Zadanie 23",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem302.png",
    isCompleted: false,
  },
  {
    id: "303",
    title: "Zadanie 24",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem303.png",
    isCompleted: false,
  },
  {
    id: "304",
    title: "Zadanie 25",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem304.png",
    isCompleted: false,
  },
  {
    id: "305",
    title: "Zadanie 26",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem305.png",
    isCompleted: false,
  },
  {
    id: "306",
    title: "Zadanie 27",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem306.png",
    isCompleted: false,
  },
  {
    id: "307",
    title: "Zadanie 28",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem307.png",
    isCompleted: false,
  },
  {
    id: "308",
    title: "Zadanie 29",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem308.png",
    isCompleted: false,
  },
  {
    id: "309",
    title: "Zadanie 30",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem309.png",
    isCompleted: false,
  },
  {
    id: "311",
    title: "Zadanie 30",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem311.png",
    isCompleted: false,
  },
  {
    id: "312",
    title: "Zadanie 30",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem312.png",
    isCompleted: false,
  },
  {
    id: "313",
    title: "Zadanie 30",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem313.png",
    isCompleted: false,
  },
  {
    id: "314",
    title: "Zadanie 30",
    description: "Obliczenie podstawowego logarytmu",
    img: "/problemImages/problem314.png",
    isCompleted: false,
  },
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  // Podział zadań na grupy
  const firstGroup = tasks.filter(task => parseInt(task.id) <= 309);
  const secondGroup = tasks.filter(task => parseInt(task.id) >= 310);
  // Można dodać trzecią grupę jeśli będzie potrzebna

  return (
    <div className="min-h-screen flex flex-col">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Powrót do działu</span>
          </Link>
        </div>

        <VideoSection youtubeId="2WGFkYAbT5w" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Logarytmy"} />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania podstawowe
            </h2>
            <p className="text-gray-600 mt-2">
              Ćwiczenia wprowadzające
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {firstGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania zamknięte
            </h2>
            <p className="text-gray-600 mt-2">
              Sprwadź się!
            </p>
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