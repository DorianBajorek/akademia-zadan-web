'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import 'katex/dist/katex.min.css';
import TaskContent from '@/components/TaskContent';

const MathProblem = () => {
  const taskContent =
    ' Udowodnij, że iloczyn kolejnych liczb naturalnych od $1$ do $16$, czyli $\\\\$ $1\\cdot2\\cdot3\\cdot...\\cdot16$ jest piodzielna przez $2^{15}$';

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId="XD" taskId={'518'}/>
    </div>
  );
};

export default MathProblem;
