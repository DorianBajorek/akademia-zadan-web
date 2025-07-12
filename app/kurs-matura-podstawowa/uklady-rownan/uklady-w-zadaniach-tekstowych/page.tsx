'use client';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import TaskCards from '@/components/TaskCards';
import TopicStats from '@/components/TopicStats';
import React from 'react';

const tasks = [
  {
    id: '2200',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2200.png',
    isCompleted: true,
  },
  {
    id: '2201',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2201.png',
    isCompleted: true,
  },
  //   {
  //   id: "2202",
  //   title: "Podstawowe działania",
  //   description: "Skorzystaj z własności wartosci bezwzględnej",
  //   img: "/problemImages/problem2202.png",
  //   isCompleted: true,
  // },
  {
    id: '2203',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2203.png',
    isCompleted: true,
  },
  {
    id: '2204',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2204.png',
    isCompleted: true,
  },
  {
    id: '2205',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2205.png',
    isCompleted: true,
  },
  {
    id: '2206',
    title: 'Podstawowe działania',
    description: 'Skorzystaj z własności wartosci bezwzględnej',
    img: '/problemImages/problem2206.png',
    isCompleted: true,
  },
  // {
  //   id: "2207",
  //   title: "Podstawowe działania",
  //   description: "Skorzystaj z własności wartosci bezwzględnej",
  //   img: "/problemImages/problem2207.png",
  //   isCompleted: true,
  // },
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter((task) => task.isCompleted).length;

  const firstGroup = tasks.filter((task) => parseInt(task.id) <= 2202 && parseInt(task.id) >= 2200);
  const secondGroup = tasks.filter(
    (task) => parseInt(task.id) <= 2207 && parseInt(task.id) >= 2204
  );

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Nav />
      <div className="max-w-7xl mx-auto w-full px-6 pt-8">
        <div className="mb-6">
          <Link
            href="/kurs-matura-podstawowa/uklady-rownan/"
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

        <VideoSection youtubeId="CrTWBy7rv0A" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={'Układy równań w zadaniach tekstowych'}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania wieloetapowe</h2>
            <p className="text-gray-600 mt-2">Do samodzielnej nauki</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {firstGroup.map((task) => (
            <TaskCards key={task.id} tasks={[task]} />
          ))}
        </div>

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">Zadania zamknięte</h2>
            <p className="text-gray-600 mt-2">Sprwadź się!</p>
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
