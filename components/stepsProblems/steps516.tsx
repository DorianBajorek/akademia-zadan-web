'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import 'katex/dist/katex.min.css';
import TaskContent from '@/components/TaskContent';

const MathProblem = () => {
  const taskContent = 'Wykaż, że liczba $2^{100} + 4^{49} + 16^{24}$ jest podzielna przez $21$';

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId="huZc4egMap8" />
    </div>
  );
};

export default MathProblem;
