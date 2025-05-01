"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";

const tasks = [
  {
    id: "500",
    title: "Podstawowe działania",
    description: "Wykonaj kolejne działania arytmetyczne",
    img: "/problemImages/problem500.png",
    isCompleted: true,
  },
  {
    id: "501",
    title: "Podstawowe działania",
    description: "Oblicz wartości potęg o wykładnikach naturalnych",
    img: "/problemImages/problem501.png",
    isCompleted: false,
  },
  {
    id: "502",
    title: "Podstawowe działania",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem502.png",
    isCompleted: false,
  },
  {
    id: "503",
    title: "Podstawowe działania",
    description: "Wykonaj kolejne działania arytmetyczne",
    img: "/problemImages/problem503.png",
    isCompleted: true,
  },
  {
    id: "504",
    title: "Podstawowe działania",
    description: "Oblicz wartości potęg o wykładnikach naturalnych",
    img: "/problemImages/problem504.png",
    isCompleted: true,
  },
  {
    id: "505",
    title: "Podstawowe działania",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem505.png",
    isCompleted: false,
  },
  {
    id: "506",
    title: "Podstawowe działania",
    description: "Wykonaj kolejne działania arytmetyczne",
    img: "/problemImages/problem506.png",
    isCompleted: false,
  },
  {
    id: "507",
    title: "Podstawowe działania",
    description: "Oblicz wartości potęg o wykładnikach naturalnych",
    img: "/problemImages/problem507.png",
    isCompleted: false,
  },
  {
    id: "508",
    title: "Podstawowe działania",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem508.png",
    isCompleted: false,
  },
  {
    id: "509",
    title: "Podstawowe działania",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem509.png",
    isCompleted: false,
  },
  {
    id: "510",
    title: "Podstawowe działania",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem510.png",
    isCompleted: false,
  },
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

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

        <VideoSection youtubeId="U6Il0yWVfy4" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Działania na potęgach"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCards tasks={tasks} />   
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;