"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sprawdzanie rozwiązania układu równań z ułamkami</h2>
        <p className="text-lg text-gray-800">Sprawdź czy para liczb  <InlineMath math="(x, y) = (\frac{1}{2}, \frac{1}{3})" /> jest rozwiązaniem układu równań:</p>
        
        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\begin{cases} \frac{1}{2}x + \frac{1}{3}y = \frac{1}{2} \\ 4x - 6y = 0 \end{cases}" />
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
                Krok 1: Podstaw <InlineMath math="x = \frac{1}{2}, y =\frac{1}{3}" /> do pierwszego równania:
            </p>
            <ChoiceQuestion
              question="Czy pierwsze równanie jest spełnione?"
              choices={[
                { label: "\\text{Tak, bo } \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{1}{4} + \\frac{1}{9} = \\frac{13}{36} = \\frac{1}{2}", value: "a" },
                { label: "\\text{Tak, bo } \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{1}{4} + \\frac{1}{9} = \\frac{13}{36} ≠ \\frac{1}{2}", value: "b" },
                { label: "\\text{Nie, bo } \\frac{1}{2} + \\frac{1}{3} = \\frac{13}{36} ≠ \\frac{1}{2}", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x=\frac{1}{2}$$ i $$y=\frac{1}{3}$$ do pierwszego równania:<br><br>
                $$\frac{1}{2}·\frac{1}{2} + \frac{1}{3}·\frac{1}{3} = \frac{1}{4} + \frac{1}{9} = \frac{13}{36}$$<br><br>
                $$\frac{13}{36} ≠ \frac{1}{2}$$ (bo $$\frac{1}{2} = \frac{18}{36}$$)<br><br>
                Równość nie jest prawdziwa, więc pierwsze równanie nie jest spełnione."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Podstaw <InlineMath math="x = \frac{1}{2}, y =\frac{1}{3}" /> do drugiego równania:
            </p>
            <ChoiceQuestion
              question="Czy drugie równanie jest spełnione?"
              choices={[
                { label: "\\text{Tak, bo } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 2 - 2 = 0", value: "a" },
                { label: "\\text{Nie, bo } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 2 + 2 = 4 ≠ 0", value: "b" },
                { label: "\\text{Nie, bo } 4·\\frac{1}{2} + 6·\\frac{1}{3} = 2 + 2 = 4 ≠ 0", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x=\frac{1}{2}$$ i $$y=\frac{1}{3}$$ do drugiego równania:<br><br>
                $$4·\frac{1}{2} - 6·\frac{1}{3} = 2 - 2 = 0$$<br><br>
                Równość jest prawdziwa, więc drugie równanie jest spełnione."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wyciągnij wniosek:
            </p>
            <ChoiceQuestion
              question="Czy para $$(\frac{1}{2}, \frac{1}{3})$$ jest rozwiązaniem układu równań?"
              choices={[
                { label: "\\text{Nie, bo nie spełnia obu równań}", value: "a" },
                { label: "\\text{Nie, bo spełnia tylko pierwsze równanie}", value: "b" },
                { label: "\\text{Nie, bo spełnia tylko drugie równanie}", value: "c" },
                { label: "\\text{Tak, bo spełnia oba równania}", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Para liczb jest rozwiązaniem układu równań tylko wtedy, gdy spełnia oba równania jednocześnie.<br>
                W naszym przypadku pierwsze równanie nie jest spełnione, więc $$(\frac{1}{2}, \frac{1}{3})$$ nie jest rozwiązaniem."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\begin{cases} 
              \frac{1}{2}x + \frac{1}{3}y = \frac{1}{2} \\ 
              4x - 6y = 0 
              \end{cases}"
            steps={[
              {
                step: "\\text{Sprawdzenie pierwszego równania}: \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{13}{36} ≠ \\frac{1}{2} ✗",
              },
              {
                step: "\\text{Sprawdzenie drugiego równania: } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 0 → 2-2=0 ✓",
              }
            ]}
            solutions={["\\text{To rówanine nie jest spełnione pzez parę } (\\frac{1}{2}, \\frac{1}{3})"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;