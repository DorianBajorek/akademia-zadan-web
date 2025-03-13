"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { solutionsMap } from "@/app/rozwiazanie/[id]/solutionsMap";

const SolutionsPage = () => {
  const solutionIds = Object.keys(solutionsMap);

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {solutionIds.map((id) => (
            <Link key={id} href={`/rozwiazanie/${id}`}>
              <div className="bg-white shadow-md border border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition">
                <p className="text-lg font-semibold text-gray-800">Zadanie {id}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
