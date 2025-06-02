"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
  {
    id: "800",
    title: "Zadanie 1",
    description: "Dodawanie ułamków",
    img: "/problemImages/problem800.png",
    isCompleted: false,
  },
  {
    id: "801",
    title: "Zadanie 2",
    description: "Odejmowanie ułamków",
    img: "/problemImages/problem801.png",
    isCompleted: false,
  },
  {
    id: "802",
    title: "Zadanie 3",
    description: "Mnożenie ułamków",
    img: "/problemImages/problem802.png",
    isCompleted: false,
  },
  {
    id: "803",
    title: "Zadanie 4",
    description: "Dzielenie ułamków",
    img: "/problemImages/problem803.png",
    isCompleted: false,
  },
  {
    id: "804",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem804.png",
    isCompleted: false,
  },
  {
    id: "805",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem805.png",
    isCompleted: false,
  },
  {
    id: "806",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem806.png",
    isCompleted: false,
  },
  {
    id: "807",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem807.png",
    isCompleted: false,
  },
  {
    id: "808",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem808.png",
    isCompleted: false,
  },
  {
    id: "809",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem809.png",
    isCompleted: false,
  },
  {
    id: "810",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem810.png",
    isCompleted: false,
  },
  {
    id: "811",
    title: "Zadanie 5",
    description: "Trudniejsze zadanie na ułamkach",
    img: "/problemImages/problem811.png",
    isCompleted: false,
  },
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  const firstGroup = tasks.filter(task => parseInt(task.id) >= 800 && parseInt(task.id) <= 804);
  const secondGroup = tasks.filter(task => parseInt(task.id) >= 805 && parseInt(task.id) <= 809);
  const thirdGroup = tasks.filter(task => parseInt(task.id) >= 810);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
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

        <VideoSection youtubeId="DlC-AfObAOM" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Działania na ułamkach"} />

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

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania otwarte
            </h2>
            <p className="text-gray-600 mt-2">
              Warte więcej punktów
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {thirdGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;