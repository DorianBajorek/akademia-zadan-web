"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
  {
    id: "1400",
    title: "Zadanie 1",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1400.png",
    isCompleted: false,
  },
  {
    id: "1401",
    title: "Zadanie 2",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1401.png",
    isCompleted: false,
  },
  {
    id: "1402",
    title: "Zadanie 3",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1402.png",
    isCompleted: false,
  },
  {
    id: "1403",
    title: "Zadanie 4",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1403.png",
    isCompleted: false,
  },
  {
    id: "1404",
    title: "Zadanie 5",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1404.png",
    isCompleted: false,
  },
  {
    id: "1405",
    title: "Zadanie 6",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1405.png",
    isCompleted: false,
  },
  {
    id: "1406",
    title: "Zadanie 7",
    description: "Równanie kwadratowe",
    img: "/problemImages/problem1406.png",
    isCompleted: false,
  },
    {
    id: "1410",
    title: "Zadanie 11",
    description: "Liczba rozwiązań równania kwadratowego",
    img: "/problemImages/problem1410.png",
    isCompleted: false,
  },
    {
    id: "1411",
    title: "Zadanie 12",
    description: "Rozwiązanie równania kwadratowego",
    img: "/problemImages/problem1411.png",
    isCompleted: false,
  },
    {
    id: "1412",
    title: "Zadanie 12",
    description: "Rozwiązania równania kwadratowego",
    img: "/problemImages/problem1412.png",
    isCompleted: false,
  }
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  const firstGroup = tasks.filter(task => parseInt(task.id) >= 1400 && parseInt(task.id) <= 1409);
  const secondGroup = tasks.filter(task => parseInt(task.id) >= 1410 && parseInt(task.id) <= 1420)
  const thirdGroup = tasks.filter(task => parseInt(task.id) >= 1430);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link 
            href="/kurs-matura-podstawowa/funkcje-kwadratowe/" 
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

        <VideoSection youtubeId="" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Równania kwadratowe"} />

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