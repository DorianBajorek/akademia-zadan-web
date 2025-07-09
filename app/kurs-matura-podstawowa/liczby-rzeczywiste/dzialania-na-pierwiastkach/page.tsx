"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import TaskCards from "@/components/TaskCards";
import TopicStats from "@/components/TopicStats";
import { useEffect, useState } from "react";
import { getProblemProgress } from "@/service";
import { useAuth } from "@/app/UserData";

const LOCAL_TASKS = [
  {
    id: "1205",
    title: "Zadanie 6",
    description: "Usuwanie niewymierności z mianownika",
    img: "/problemImages/problem1205.png",
    isCompleted: false,
  },
  {
    id: "1206",
    title: "Zadanie 7",
    description: "Usuwanie niewymierności z mianownika",
    img: "/problemImages/problem1206.png",
    isCompleted: false,
  },
  {
    id: "1207",
    title: "Zadanie 8",
    description: "Usuwanie niewymierności z mianownika",
    img: "/problemImages/problem1207.png",
    isCompleted: false,
  },
  {
    id: "1208",
    title: "Zadanie 9",
    description: "Działanie na pierwiastkach",
    img: "/problemImages/problem1208.png",
    isCompleted: false,
  },
  {
    id: "1209",
    title: "Zadanie 10",
    description: "Działanie na pierwiastkach",
    img: "/problemImages/problem1209.png",
    isCompleted: false,
  },
  {
    id: "1210",
    title: "Zadanie 11",
    description: "Działanie na pierwiastkach.",
    img: "/problemImages/problem1210.png",
    isCompleted: false,
  },
  {
    id: "1211",
    title: "Zadanie 12",
    description: "Usuwanie niewymierności z pierwiastka 2-go stopnia.",
    img: "/problemImages/problem1211.png",
    isCompleted: false,
  },
  {
    id: "1212",
    title: "Zadanie 13",
    description: "Usuwanie niewymierności z pierwiastka 2-go stopnia.",
    img: "/problemImages/problem1212.png",
    isCompleted: false,
  },
  {
    id: "1213",
    title: "Zadanie 14",
    description: "Usuwanie niewymierności z pierwiastka 3-go stopnia.",
    img: "/problemImages/problem1213.png",
    isCompleted: false,
  },
  {
    id: "1214",
    title: "Zadanie 15",
    description: "Działanie na pierwiastkach.",
    img: "/problemImages/problem1214.png",
    isCompleted: false,
  },
  {
    id: "1215",
    title: "Zadanie 16",
    description: "Usuwanie niewymierności z mianownika",
    img: "/problemImages/problem1215.png",
    isCompleted: false,
  },
  {
    id: "1216",
    title: "Zadanie 17",
    description: "Działanie na pierwiastkach.",
    img: "/problemImages/problem1216.png",
    isCompleted: false,
  },
];

const TopicTasksPage = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) return;

      try {
        const response = await getProblemProgress(
          "liczby-rzeczywiste",
          "dzialania-na-pierwiastkach",
          token
        );

        const merged = response.tasks.map((apiTask) => {
          const local = LOCAL_TASKS.find((t) => t.id === String(apiTask.id));
          return {
            ...apiTask,
            title: local?.title || `Zadanie ${apiTask.id}`,
            description: local?.description || "",
            img: local?.img || "",
            isCompleted: apiTask.completed,
          };
        });

        setTasks(merged);
      } catch (err) {
        console.error("Błąd ładowania postępu zadań:", err);
      }
    };

    fetchTasks();
  }, [token]);

  const completedCount = tasks.filter((task) => task.isCompleted).length;

  const firstGroup = tasks.filter(
    (task) => parseInt(task.id) >= 1200 && parseInt(task.id) <= 1209
  );
  const secondGroup = tasks.filter(
    (task) => parseInt(task.id) >= 1210 && parseInt(task.id) <= 1216
  );

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

        <VideoSection youtubeId="G2_3kvJGLnE" />
      </div>
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <TopicStats
          completedCount={completedCount}
          totalCount={tasks.length}
          topicTitle={"Działania na pierwiastkach"}
        />

        <div className="col-span-full py-8 text-center">
          <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <h2 className="text-xl font-bold text-gray-700">
              Zadania wieloetapowe
            </h2>
            <p className="text-gray-600 mt-2">Wytłuamczenie krok po kroku</p>
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
