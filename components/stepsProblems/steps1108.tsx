'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import 'katex/dist/katex.min.css';
import TaskContent from '@/components/TaskContent';

const MathProblem = () => {
  const taskContent =
    'Dane są liczby $a=3\\log_{2}{12} - \\log_{2}{27}$ i $b=(\\sqrt{6} - \\sqrt{7})(3\\sqrt{6} + 3\\sqrt{7})$. Oblicz wartość wyrażenia $a - b$.';

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId="XD" taskId={'1108'}/>
    </div>
  );
};

export default MathProblem;
