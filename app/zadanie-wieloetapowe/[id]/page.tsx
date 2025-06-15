"use client";

import { notFound, useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { stepsMap } from './stepsMap';
import { FaArrowUp } from 'react-icons/fa';

const Rozwiazanie = () => {
  const { id } = useParams();
  const router = useRouter();

  const StepsProblem = stepsMap[id as string];
  if (!StepsProblem) return notFound();

  const numericId = parseInt(id as string, 10);
  const nextId = (numericId + 1).toString();
  const hasNext = stepsMap[nextId];

  const handleBackToCourse = () => {
    const path = window.location.pathname;
    const newPath = '/kurs-matura-podstawowa';
    router.push(newPath);
  };

  const handleNext = () => {
    if (hasNext) {
      const path = window.location.pathname;
      const base = path.substring(0, path.lastIndexOf('/'));
      router.push(`${base}/${nextId}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<div>Ładowanie rozwiązania...</div>}>
      <Nav />
      <div className="p-4">
        <button
          onClick={handleBackToCourse}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mr-2"
        >
          ← Wróć do kursu
        </button>
        {hasNext && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Następne zadanie →
          </button>
        )}
      </div>
      <StepsProblem />
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Wróć na górę"
        >
          <FaArrowUp />
        </button>
      <Footer />
    </Suspense>
  );
};

export default Rozwiazanie;
