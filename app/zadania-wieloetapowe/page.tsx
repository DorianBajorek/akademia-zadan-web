"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

const tasksByCategory = [
  {
    category: "Nierówności kwadratowe",
    tasks: [
      {
        id: "1",
        title: "Zadanie 1",
        img: "/problemImages/problem1.png",
      },
      {
        id: "2",
        title: "Zadanie 2",
        img: "/problemImages/problem2.png",
      },
      {
        id: "3",
        title: "Zadanie 3",
        img: "/problemImages/problem3.png",
      },
      {
        id: "4",
        title: "Zadanie 4",
        img: "/problemImages/problem4.png",
      },
      {
        id: "5",
        title: "Zadanie 5",
        img: "/problemImages/problem5.png",
      },
      {
        id: "6",
        title: "Zadanie 6",
        img: "/problemImages/problem6.png",
      },
      {
        id: "7",
        title: "Zadanie 7",
        img: "/problemImages/problem7.png",
      },
      {
        id: "8",
        title: "Zadanie 8",
        img: "/problemImages/problem8.png",
      },
      {
        id: "9",
        title: "Zadanie 9",
        img: "/problemImages/problem9.png",
      },
      {
        id: "10",
        title: "Zadanie 10",
        img: "/problemImages/problem10.png",
      },
    ],
  },
  {
    category: "Równania wymierne",
    tasks: [
      {
        id: "11",
        title: "Zadanie 11",
        img: "/problemImages/problem11.png",
      },
      {
        id: "12",
        title: "Zadanie 12",
        img: "/problemImages/problem12.png",
      },
      {
        id: "13",
        title: "Zadanie 13",
        img: "/problemImages/problem13.png",
      },
      {
        id: "14",
        title: "Zadanie 14",
        img: "/problemImages/problem14.png",
      },
      {
        id: "15",
        title: "Zadanie 15",
        img: "/problemImages/problem15.png",
      },
    ],
  },
];

const SolutionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Lista Rozwiązań
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Kliknij na zadanie, aby zobaczyć jego rozwiązanie.
        </p>

        {tasksByCategory.map((category) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.tasks.map((task) => (
                <Link key={task.id} href={`/zadanie-wieloetapowe/${task.id}`}>
                  <div className="bg-white shadow-md border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100 transition">
                    <img
                      src={task.img}
                      alt={task.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold text-gray-800">
                        {task.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;