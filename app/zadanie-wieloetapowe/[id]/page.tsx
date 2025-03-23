"use client";

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { stepsMap } from './stepsMap';

const Rozwiazanie = () => {
  const { id } = useParams();

  const StepsProblem = stepsMap[id as string];
  if (!StepsProblem) return notFound();

  return (
    <Suspense fallback={<div>Ładowanie rozwiązania...</div>}>
        <Nav />
        <StepsProblem />
        <Footer />
    </Suspense>
  );
};

export default Rozwiazanie;
