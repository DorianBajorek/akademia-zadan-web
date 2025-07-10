'use client';

import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { postsMap } from './postsMap';

const Rozwiazanie = () => {
  const { id } = useParams();

  const Post = postsMap[id as string];
  if (!Post) return notFound();

  return (
    <Suspense fallback={<div>Ładowanie rozwiązania...</div>}>
      <Nav />
      <Post />
      <Footer />
    </Suspense>
  );
};

export default Rozwiazanie;
