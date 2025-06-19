"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription"; // Dodano import

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie procentowe"
          description="Liczba $$78$$ stanowi $$150\%$$ liczby $$c$$. Oblicz wartość liczby $$c$$."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak zapisać zdanie '78 stanowi 150% liczby c' jako równanie?"
            choices={[
              { label: "78 = 1,5 \\cdot c", value: "a" },
              { label: "c = 1,5 \\cdot 78", value: "b" },
              { label: "78 = 0,15 \\cdot c", value: "c" },
              { label: "c = 78 / 150", value: "d" },
            ]}
            correctAnswer="a"
            explanation="$$150\%$$ liczby $$c$$ to $$1{,}5 \cdot c$$. Równanie to więc $$78 = 1{,}5 \cdot c.$$"
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak obliczyć $$c$$ z równania $$78 = 1,5 \cdot c$$?"
            choices={[
              { label: "\\text{Pomnożyć } 78 \\text{ przez } 1,5", value: "a" },
              { label: "\\text{Podzielić } 1,5 \\text{ przez } 78", value: "b" },
              { label: "\\text{Podzielić } 78 \\text{ przez } 1,5", value: "c" },
              { label: "\\text{Dodać } 1,5 \\text{ do } 78", value: "d" },
            ]}
            correctAnswer="c"
            explanation="Aby znaleźć $$c$$, należy podzielić obie strony równania przez $$1{,}5$$: $$c = \frac{78}{1{,}5}$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Ile wynosi 78 podzielone przez 1,5?"
            choices={[
              { label: "60", value: "a" },
              { label: "52", value: "b" },
              { label: "48", value: "c" },
              { label: "39", value: "d" },
            ]}
            correctAnswer="b"
            explanation="$$\frac{78}{1{,}5} = 52$$  Poprawna odpowiedź to $$52$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="78 = 1{,}5 \cdot c"
            steps={[
              { step: "78 = 1{,}5 \\cdot c" },
              { step: "c = \\frac{78}{1{,}5}" },
              { step: "c = 52" },
            ]}
            solutions={["52"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
