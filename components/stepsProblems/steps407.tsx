"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Trzywyrazowy ciąg arytmetyczny"
          description="Trzywyrazowy ciąg $$(k^2, 2k^2, 4k-1)$$ jest arytmetyczny. Wyznacz wartość $$k$$."
          equation="(k², 2k², 4k-1)"
        />
        
        <div className="mt-8 space-y-8">
          {/* Krok 1 - Warunek ciągu arytmetycznego */}
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Warunek na ciąg arytmetyczny
              </StepDescription>
              <ChoiceQuestion
                question="Jeśli trzywyrazowy ciąg $$(a,b,c)$$ jest arytmetyczny, to które równanie jest spełnione?"
                choices={[
                  { label: "a+b+c=0", value: "a" },
                  { label: "b-c=2a", value: "b" },
                  { label: "b = \\frac{a+c}{2}", value: "c" },
                  { label: "2c=a+b", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Z definicji ciągu arytmetycznego wiemy, że $$a_n=\frac{a_{n-1} +a_{n+1}}{2}$$ czyli $$b = \frac{a+c}{2}$$"
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/warunek_ciag_arytmetyczny.png"}
              />
            </div>
          )}
          
          {/* Krok 2 - Zastosowanie warunku */}
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zastosowanie warunku do naszego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne?"
                choices={[
                  { label: `2(k^2) = 2k^2 - (4k-1)`, value: "a" },
                  { label: `2k^2 = \\frac{k^2 - 4k+1}{2}`, value: "b" },
                  { label: `2k^2 = \\frac{k^2 - 4k-1}{2}`, value: "c" },
                  { label: `2k^2 = \\frac{k^2 + 4k-1}{2}`, value: "d" }
                ]}
                correctAnswer="d"
                explanation={`Poprawne równanie to: $$2k^2 = \\frac{k^2 + 4k-1}{2}$$ <br>
                Gdzie: <br>
                $$a = k^2$$, $$b = 2k^2$$, $$c = 4k-1$$ <br>
                Z własności ciągu $$b = \\frac{a + c}{2}$$ czyli  $$2k^2 = \\frac{k^2 + 4k-1}{2}$$`}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {/* Krok 3 - Przekształcenie do postaci kwadratowej */}
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształcenie równania
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawnym przekształceniem?"
                choices={[
                  { label: "2k^2 -4k+1=0", value: "a" },
                  { label: "3k^{2} - 4k + 1 = 0", value: "b" },
                  { label: "3k^{2} - 4k + 1 = 0", value: "c" },
                  { label: "\\text{Wszystkie powyższe}", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Kolejne kroki: <br>
                1. $$4k^2 = 2k^2 + 4k - 1$$ <br>
                2. Przenosimy wszystkie wyrazy na lewą stronę: <br>
                $$4k^2 - 2k^2 - 4k + 1 = 0$$ <br>
                3. Upraszczamy: <br>
                $$3k^2 - 4k + 1 = 0$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {/* Krok 4 - Obliczanie wyróżnika */}
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Obliczanie wyróżnika równania
              </StepDescription>
              <ChoiceQuestion
                question="Wskaż poprawny wyróżnik równania"
                choices={[
                  { label: "\\Delta = 8", value: "a" },
                  { label: "\\Delta = 4", value: "b" },
                  { label: "\\Delta = 6", value: "c" },
                  { label: "\\Delta = 0", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Wzór na wyróżnik: $$\Delta = b^2 - 4ac$$ <br>
                Obliczenia: <br>
                1. $$\Delta = (-4)^2 - 4·3·1 = 16 - 12 = 4$$ <br>
                2. $$\sqrt{\Delta} = 2$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}
          
          {/* Krok 5 - Obliczanie pierwiastków */}
          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Obliczanie pierwiastków równania
              </StepDescription>
              <ChoiceQuestion
                question="Jakie są rozwiązania równania?"
                choices={[
                  { label: "k_{1} = 1, k_{2}=\\frac{1}{3}", value: "a" },
                  { label: "k_{1} = -1, k_{2}= \\frac{1}{3}", value: "b" },
                  { label: "k_{1} = -\\frac{1}{3}, k_{2} = 1", value: "c" },
                  { label: "k_{1}=-1, k_{2}=-\\frac{1}{3}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Wzór na pierwiastki: $$k = \frac{-b \pm \sqrt{Δ}}{2a}$$ <br>
                Obliczenia: <br>
                $$k_1 = \frac{4 + 2}{6}$$ <br>
                $$k_1 = \frac{6}{6} = 1$$ <br>
                $$k_2 = \frac{4-2}{6}$$ <br>
                $$k_2 = \frac{2}{6} = \frac{1}{3}$$"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}
          
          {/* Podsumowanie */}
          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="(k², 2k², 4k-1) → \text{ciąg arytmetyczny}"
                steps={[
                  { step: "\\text{Zastosowano warunek: } b = \\frac{a + c}{2}" },
                  { step: "2k^{2} = \\frac{k^{2} + (4k-1)}{2}" },
                  { step: "4k^{2} = k^{2} + 4k - 1" },
                  { step: "3k^{2} - 4k + 1 = 0" },
                  { step: "\\Delta = 16 - 12 = 4" },
                  { step: "k_1 = \\frac{4 + 2}{6} → k_{1}=1" },
                  { step: "k_2 = \\frac{4 - 2}{6} → k_{2}=\\frac{1}{3}" },
                ]}
                solutions={[
                  "k_{1}=1",
                  "k_{2}=\\frac{1}{3}", 
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;