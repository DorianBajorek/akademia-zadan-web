"use client";
import 'katex/dist/katex.min.css';
import TaskContent from "@/components/TaskContent";

const MathProblem = () => {
  const taskContent = "Podaj przykład liczb całkowitych dodatnich $a$ i $b$, spełniających $\\\\$$\\frac{4}{9} < \\frac{a}{b} < \\frac{5}{9}.$"

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId='XD'/>
    </div>
  );
};

export default MathProblem;