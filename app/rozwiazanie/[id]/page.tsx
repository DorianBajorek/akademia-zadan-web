"use client";

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const solutionsMap: Record<string, any> = {
  '1': dynamic(() => import('@/components/solutions/Solutions1')),
  '2': dynamic(() => import('@/components/solutions/Solutions2')),
  '3': dynamic(() => import('@/components/solutions/Solutions3')),
  '4': dynamic(() => import('@/components/solutions/Solutions4')),
  '5': dynamic(() => import('@/components/solutions/Solutions5')),
  '6': dynamic(() => import('@/components/solutions/Solutions6')),
  '7': dynamic(() => import('@/components/solutions/Solutions7')),
  '8': dynamic(() => import('@/components/solutions/Solutions8')),
  '9': dynamic(() => import('@/components/solutions/Solutions9')),
  '10': dynamic(() => import('@/components/solutions/Solutions10')),
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
