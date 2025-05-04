"use client";
import 'katex/dist/katex.min.css';
import TaskContent from "@/components/TaskContent";

const MathProblem = () => {
  const taskContent = `W pewnej klasie uczniowie przygotowali ciasto na szkolny kiermasz. Pierwszego dnia sprzedano $\\frac{2}{5}$ całego ciasta. Drugiego dnia sprzedano $\\frac{3}{4}$ pozostałego ciasta. Trzeciego dnia sprzedano $\\frac{5}{6}$ tego, co zostało po drugim dniu.
$\\\\$
a) Jaką część całego ciasta sprzedano trzeciego dnia?
$\\\\$
b) Jaka część całego ciasta pozostała niesprzedana po trzech dniach?`

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <TaskContent content={taskContent} youtubeId='XD'/>
    </div>
  );
};

export default MathProblem;