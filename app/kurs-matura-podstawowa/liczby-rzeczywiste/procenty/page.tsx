"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";
import React from "react";

const tasks = [
  {
    id: "900",
    title: "Równanie procentowe",
    description: "30% liczby x jest o 2730 mniejsze od liczby x.",
    img: "/problemImages/problem900.png",
    isCompleted: true,
  },
  {
    id: "901",
    title: "Równanie procentowe",
    description: "Zarząd firmy wydzielił z budżetu kwotę 1200000 złotych",
    img: "/problemImages/problem901.png",
    isCompleted: true,
  },
  {
    id: "902",
    title: "Równanie procentowe",
    description: "Liczba 78 stanowi 150% liczby",
    img: "/problemImages/problem902.png",
    isCompleted: true,
  },
  {
    id: "903",
    title: "Równanie procentowe",
    description: "Cena maseczki zdrożała o 40%",
    img: "/problemImages/problem903.png",
    isCompleted: true,
  },
  {
    id: "904",
    title: "Równanie procentowe",
    description: "Cena maseczki zdrożała o 40%",
    img: "/problemImages/problem904.png",
    isCompleted: true,
  },
  {
    id: "905",
    title: "Równanie procentowe",
    description: "Cena maseczki zdrożała o 40%",
    img: "/problemImages/problem905.png",
    isCompleted: true,
  },
  {
    id: "906",
    title: "Obniżka ceny roweru",
    description: "Cena roweru po obniżce",
    img: "/problemImages/problem906.png",
    isCompleted: true,
  },
  {
    id: "910",
    title: "Kwota kapitału po trzech latach",
    description: "Oblicz kwotę kapitału na koncie po trzech latach przy oprocentowaniu 6%",
    img: "/problemImages/problem910.png",
    isCompleted: true,
  },
  {
    id: "911",
    title: "Kwota odsetek po dwóch latach",
    description: "Oblicz kwotę doliczonych odsetek po dwóch latach",
    img: "/problemImages/problem911.png",
    isCompleted: true,
  },
  {
    id: "912",
    title: "Kwota na długoterminowej lokacie",
    description: "Po 10 latach kwota na lokacie będzie większa od kwoty wpłaconej o",
    img: "/problemImages/problem912.png",
    isCompleted: true,
  },
  {
    id: "913",
    title: "Oblicz kwotę kapitału",
    description: "Jaką kwotę wpłacił pan Grzegorz?",
    img: "/problemImages/problem912.png",
    isCompleted: true,
  },
  {
    id: "914",
    title: "Oblicz początkową cenę",
    description: "Cena sandałów wzrosła a potem zmalała",
    img: "/problemImages/problem914.png",
    isCompleted: true,
  },
  
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  const firstGroup = tasks.filter(task => parseInt(task.id) <= 909);
  const secondGroup = tasks.filter(task => parseInt(task.id) <= 915);
  const thirdGroup = tasks.filter(task => parseInt(task.id) >= 916);

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
        <TopicStats completedCount={completedCount} totalCount={tasks.length} topicTitle={"Procenty"} />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania wieloetapowe
            </h2>
            <p className="text-gray-600 mt-2">
              Do samodzielnej nauki
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
              Zadania autorskie i maturalne
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