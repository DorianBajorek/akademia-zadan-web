"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
    {
    id: "2000",
    title: "Zadanie 1",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2000.png",
    isCompleted: false,
  },
    {
    id: "2001",
    title: "Zadanie 2",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2001.png",
    isCompleted: false,
  },
    {
    id: "2002",
    title: "Zadanie 3",
    description: "Wzór funkcji kwadratowej",
    img: "/problemImages/problem2002.png",
    isCompleted: false,
  },
    {
    id: "2003",
    title: "Zadanie 4",
    description: "Wzór funkcji kwadratowej na podstawie zbioru wartości",
    img: "/problemImages/problem2003.png",
    isCompleted: false,
  },
    {
    id: "2004",
    title: "Zadanie 5",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2004.png",
    isCompleted: false,
  },
    {
    id: "2005",
    title: "Zadanie 6",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2005.png",
    isCompleted: false,
  },
    {
    id: "2006",
    title: "Zadanie 7",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2006.png",
    isCompleted: false,
  },
    {
    id: "2007",
    title: "Zadanie 8",
    description: "Postać kanoniczna funkcji kwadratowej",
    img: "/problemImages/problem2007.png",
    isCompleted: false,
  },
  {
    id: "2010",
    title: "Zadanie 9",
    description: "Wierzchołek funkcji kwadratowej",
    img: "/problemImages/problem2010.png",
    isCompleted: false,
  },
  {
    id: "2011",
    title: "Zadanie 9",
    description: "Wierzchołek funkcji kwadratowej",
    img: "/problemImages/problem2011.png",
    isCompleted: false,
  },
    {
    id: "2012",
    title: "Zadanie 10",
    description: "Miejsca zerowe funkcji kwadratowej",
    img: "/problemImages/problem2012.png",
    isCompleted: false,
  },
  {
    id: "2013",
    title: "Zadanie 11",
    description: "Monotoniczność funkcji kwadratowej",
    img: "/problemImages/problem2013.png",
    isCompleted: false,
  }
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  const firstGroup = tasks.filter(task => parseInt(task.id) >= 2000 && parseInt(task.id) <= 2009);
  const secondGroup = tasks.filter(task => parseInt(task.id) >= 2010 && parseInt(task.id) <= 2020)
  const thirdGroup = tasks.filter(task => parseInt(task.id) >= 2030);

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
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Postać kanoniczna funkcji kwadratowej"} />

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