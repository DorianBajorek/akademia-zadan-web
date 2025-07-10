'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import 'katex/dist/katex.min.css';
import TaskContent from '@/components/TaskContent';

const MathProblem = () => {
  const taskContent =
    'Uzasadnij, że dla kazdej dodatniej liczby całkowitej $n$ liczba $\\\\$ $3^{n+2} - 2^{n+2} + 3^{n} - 2^n$ jest wielokrotnością liczby 10.';

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId="XD" taskId={'519'}/>
    </div>
  );
};

export default MathProblem;
