"use client";

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { solutionsMap } from './solutionsMap';

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
