"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
  {
    id: "1800",
    title: "Zadanie 1",
    description: "Podstawowe dodawanie i odejmowanie wyrażeń algebraicznych.",
    img: "/problemImages/problem1800.png",
    isCompleted: false,
  },
    {
    id: "1801",
    title: "Zadanie 2",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1801.png",
    isCompleted: false,
  },
    {
    id: "1802",
    title: "Zadanie 3",
    description: "Iloczyn trzech nawiasów.",
    img: "/problemImages/problem1802.png",
    isCompleted: false,
  },
    {
    id: "1803",
    title: "Zadanie 4",
    description: "Mnożenie nawiasów przez liczby i podstawowe działania.",
    img: "/problemImages/problem1803.png",
    isCompleted: false,
  },
    {
    id: "1804",
    title: "Zadanie 5",
    description: "Mnożenie nawiasów przez liczby i podstawowe działania.",
    img: "/problemImages/problem1804.png",
    isCompleted: false,
  },
    {
    id: "1805",
    title: "Zadanie 6",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1805.png",
    isCompleted: false,
  },
    {
    id: "1806",
    title: "Zadanie 7",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1806.png",
    isCompleted: false,
  },
    {
    id: "1807",
    title: "Zadanie 8",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1807.png",
    isCompleted: false,
  },
      {
    id: "1808",
    title: "Zadanie 9",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1808.png",
    isCompleted: false,
  },
      {
    id: "1809",
    title: "Zadanie 10",
    description: "Mnożenie nawiasów.",
    img: "/problemImages/problem1809.png",
    isCompleted: false,
  },
      {
    id: "1810",
    title: "Zadanie 11",
    description: "DIloczyn dwóch kwadratowych nawiasów.",
    img: "/problemImages/problem1810.png",
    isCompleted: false,
  },

];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  const firstGroup = tasks.filter(task => parseInt(task.id) >= 1800 && parseInt(task.id) <= 1803);
  const secondGroup = tasks.filter(task => parseInt(task.id) >= 1804 && parseInt(task.id) <= 1810)

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Powrót do działu</span>
          </Link>
        </div>

        <VideoSection youtubeId="RjEfUhdSDB0" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Działania na wyrażeniach algebraicznych"} />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania wieloetapowe
            </h2>
            <p className="text-gray-600 mt-2">
              Wytłuamczenie krok po kroku
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