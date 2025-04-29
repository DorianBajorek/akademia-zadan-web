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
        id: "300",
        title: "Zadanie 21",
        img: "/problemImages/problem300.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "301",
        title: "Zadanie 22",
        img: "/problemImages/problem301.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "302",
        title: "Zadanie 23",
        img: "/problemImages/problem302.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "303",
        title: "Zadanie 24",
        img: "/problemImages/problem303.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "304",
        title: "Zadanie 25",
        img: "/problemImages/problem304.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "305",
        title: "Zadanie 26",
        img: "/problemImages/problem305.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "306",
        title: "Zadanie 27",
        img: "/problemImages/problem306.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "307",
        title: "Zadanie 28",
        img: "/problemImages/problem307.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "308",
        title: "Zadanie 29",
        img: "/problemImages/problem308.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
      },
      {
        id: "309",
        title: "Zadanie 30",
        img: "/problemImages/problem309.png",
        isCompleted: false,
        description: "Obliczenie podstawowego logarytmu"
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

        <VideoSection youtubeId="ube5Fcgkm4Q" />
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