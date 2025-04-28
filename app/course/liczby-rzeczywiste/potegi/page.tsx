"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const tasks = [
  {
    id: "500",
    title: "Podstawowe działania",
    description: "Wykonaj kolejne działania arytmetyczne",
    img: "/problemImages/problem500.png",
    isCompleted: true,
    difficulty: "Łatwe"
  },
  {
    id: "501",
    title: "Potęgi całkowite",
    description: "Oblicz wartości potęg o wykładnikach naturalnych",
    img: "/problemImages/problem501.png",
    isCompleted: false,
    difficulty: "Średnie"
  },
  {
    id: "502",
    title: "Pierwiastki kwadratowe",
    description: "Uprość wyrażenia z pierwiastkami",
    img: "/problemImages/problem502.png",
    isCompleted: false,
    difficulty: "Trudne"
  },
  // ... Dodaj więcej zadań według potrzeb
];

const TopicTasksPage = () => {
  const completedCount = tasks.filter(task => task.isCompleted).length;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="flex items-center mb-6">
          <Link 
            href="/course/real-numbers" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Powrót do działu
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Działania na liczbach rzeczywistych</h1>
          <p className="text-lg text-gray-600 mb-6">Podstawowe operacje matematyczne i ich właściwości</p>
          
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
            <div>
              <h3 className="text-sm font-semibold text-blue-800">Stan realizacji</h3>
              <p className="text-2xl font-bold text-blue-600">
                {completedCount}/{tasks.length} zadań
              </p>
            </div>
            <div className="flex space-x-2">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <span className="text-gray-700">- rozwiązane</span>
              <XCircleIcon className="w-6 h-6 text-gray-400" />
              <span className="text-gray-700">- do wykonania</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Link 
              key={task.id}
              href={`/zadanie-wieloetapowe/${task.id}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden relative"
            >
              {task.isCompleted && (
                <div className="absolute top-2 right-2 z-10">
                  <CheckCircleIcon className="w-8 h-8 text-green-500 drop-shadow-sm" />
                </div>
              )}
              
              <div className="relative h-48">
              <Image
                src={task.img}
                alt={task.title}
                width={400}  // Dodaj konkretne rozmiary
                height={300}
                quality={80} // Optymalna jakość (80% balans między jakością a rozmiarem)
                className="opacity-90 group-hover:opacity-100 transition-opacity object-cover"
                style={{
                maxWidth: '100%',
                height: 'auto',
                }}
            />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{task.title}</h3>
                  <span className={`inline-block px-2 py-1 text-sm rounded-full mt-2 ${
                    task.difficulty === "Łatwe" ? "bg-green-100 text-green-800" :
                    task.difficulty === "Średnie" ? "bg-orange-100 text-orange-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {task.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{task.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-2 ${
                    task.isCompleted ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {task.isCompleted ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5" />
                        <span className="font-medium">Rozwiązane</span>
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-5 h-5" />
                        <span className="font-medium">Do wykonania</span>
                      </>
                    )}
                  </div>
                  <div className="text-blue-600 group-hover:text-blue-800 transition-colors">
                    {task.isCompleted ? "Sprawdź ponownie →" : "Rozwiąż teraz →"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-800 mb-3">Porady do działu</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Rozwiązane zadania możesz powtarzać wielokrotnie</li>
            <li>Zaczynaj od zadań oznaczonych jako łatwe</li>
            <li>Oznaczaj ulubione zadania do późniejszych powtórek</li>
            <li>Korzystaj z podpowiedzi w trudniejszych zadaniach</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicTasksPage;