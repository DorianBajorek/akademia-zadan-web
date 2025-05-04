"use client";
import 'katex/dist/katex.min.css';
import TaskContent from "@/components/TaskContent";

const MathProblem = () => {
  const taskContent = "Uzasadnij, że dla kazdej dodatniej liczby całkowitej $n$ liczba $\\\\$ $3^{n+2} - 2^{n+2} + 3^{n} - 2^n$ jest wielokrotnością liczby 10."

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId='XD'/>
    </div>
  );
};

export default MathProblem;