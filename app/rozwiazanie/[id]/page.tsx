"use client";

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const solutionsMap: Record<string, any> = {
  '2': dynamic(() => import('@/components/solutions/Solutions2')),
  '10': dynamic(() => import('@/components/solutions/Solutions10')),
  '49': dynamic(() => import('@/components/solutions/Solutions49')),
  '34': dynamic(() => import('@/components/solutions/Solutions34')),
  '30': dynamic(() => import('@/components/solutions/Solutions30')),
  '13': dynamic(() => import('@/components/solutions/Solutions13')),
  '12': dynamic(() => import('@/components/solutions/Solutions12')),
  '11': dynamic(() => import('@/components/solutions/Solutions11')),
  '41': dynamic(() => import('@/components/solutions/Solutions41')),
  '43': dynamic(() => import('@/components/solutions/Solutions43')),
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
