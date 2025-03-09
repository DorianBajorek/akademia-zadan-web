"use client";

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// Mapa dynamicznych importów dla komponentów rozwiązań
const solutionsMap: Record<string, any> = {
  '1': dynamic(() => import('@/components/solutions/Solutions1')),
  '2': dynamic(() => import('@/components/solutions/Solutions2')),
};

const Rozwiazanie = () => {
  const { id } = useParams();

  const Solution = solutionsMap[id as string];
  if (!Solution) return notFound();

  return (
    <Suspense fallback={<div>Ładowanie rozwiązania...</div>}>
        <Nav />
        <Solution />
        <Footer />
    </Suspense>
  );
};

export default Rozwiazanie;
