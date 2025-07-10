'use client';
import 'katex/dist/katex.min.css';
import TaskContent from '@/components/TaskContent';

const MathProblem = () => {
  const taskContent =
    'Wykaż, że liczba $4^{2017} + 4^{2018} + 4^{2019} + 4^{2020}$ jest podzielna przez $17$';

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId="8maQMsiRXJM" />
    </div>
  );
};

export default MathProblem;
