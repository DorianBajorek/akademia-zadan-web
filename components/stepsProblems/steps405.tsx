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
          title="Trzywyrazowy ciąg geometryczny"
          description="Trzywyrazowy ciąg $$(4, m, m-1)$$ jest geometryczny. Wyznacz wartość $$m$$ i określ monotoniczność ciągu."
          equation="(4, m, m-1)"
        />
        
        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Warunek na ciąg geometryczny
              </StepDescription>
              <ChoiceQuestion
                question="Jeśli trzywyrazowy ciąg $$(a,b,c)$$ jest geometryczny, to które równanie jest spełnione?"
                choices={[
                  { label: "a·b·c=0", value: "a" },
                  { label: "b^2 = a·c", value: "b" },
                  { label: "b = \\frac{a+c}{2}", value: "c" },
                  { label: "c^2 = a·b", value: "d" },
                ]}
                correctAnswer="b"
                explanation="Z definicji ciągu geometrycznego wiemy, że $$b^2 = a·c$$"
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/warunek_ciag_geometryczny.png"}
              />
            </div>
          )}
          
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zastosowanie warunku do naszego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne dla ciągu (4, m, m-1)?"
                choices={[
                  { label: "m^2 = 4·(m-1)", value: "a" },
                  { label: "4^2 = m·(m-1)", value: "b" },
                  { label: "(m-1)^2 = 4·m", value: "c" },
                  { label: "m = \\frac{4 + (m-1)}{2}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawne równanie to: $$m^2 = 4·(m-1)$$ <br>
                Z własności ciągu: $$b^2 = a·c$$ <br>
                Gdzie: <br>
                $$a = 4, b = m, c = m-1$$ <br>"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształcenie równania do postaci kwadratowej
              </StepDescription>
              <ChoiceQuestion
                question="Jak wygląda poprawne przekształcenie równania $$m^2 = 4(m-1)$$?"
                choices={[
                  { label: "m^2 - 4m + 4 = 0", value: "a" },
                  { label: "m^2 + 4m - 4 = 0", value: "b" },
                  { label: "m^2 - 4m - 4 = 0", value: "c" },
                  { label: "m^2 - 4m + 1 = 0", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Kolejne kroki rozwiązania: <br>
                1. $$m^2 = 4(m-1)$$ <br>
                2. $$m^2 = 4m - 4$$ <br>
                3. $$m^2 - 4m + 4 = 0$$ <br>"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiązanie równania kwadratowego
              </StepDescription>
              <NumericQuestion
                question="Rozwiąż równanie $$m^2 - 4m + 4 = 0$$. Podaj wartość m"
                correctAnswer="2"
                explanation="Rozwiązanie: <br>
                $$m^2 - 4m + 4 = 0$$ <br>
                $$Δ = (-4)^2 - 4·1·4 = 16 - 16 = 0$$ <br>
                $$m = \frac{4}{2} = 2$$ <br>
                Równanie ma jedno podwójne rozwiązanie."
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Wyznaczenie pełnego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest pełny ciąg dla m=2?"
                choices={[
                  { label: "(4, 2, 1)", value: "a" },
                  { label: "(4, 2, 0)", value: "b" },
                  { label: "(4, 2, 2)", value: "c" },
                  { label: "(4, 2, -1)", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Dla m=2 ciąg wygląda następująco: <br>
                $$(4, 2, 2-1) = (4, 2, 1)$$ <br>
                Iloraz ciągu: $$q = \frac{2}{4} = \frac{1}{2}$$"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}
          
          {completedStages.includes(5) && (
            <div>
              <StepDescription stepNumber={6}>
                Określenie monotoniczności ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest monotoniczność ciągu (4, 2, 1)?"
                choices={[
                  { label: "\\text{Ciąg jest rosnący}", value: "a" },
                  { label: "\\text{Ciąg jest malejący}", value: "b" },
                  { label: "\\text{Ciąg jest stały}", value: "c" },
                  { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Ciąg jest malejący, ponieważ: <br>
                $$4 > 2 > 1$$ <br>
                Iloraz ciągu: $$q = \frac{1}{2}$$ (dodatni i mniejszy od 1, więc ciąg maleje)"
                onComplete={() => handleStageComplete(6)}
              />
            </div>
          )}
          
          {completedStages.length === 6 && (
            <div className="mt-8">
              <StudentNotes
                equation="(4, m, m-1) \rightarrow \text{ciąg geometryczny}"
                steps={[
                  {
                    step: "b^2 = a·c \\Rightarrow m^2 = 4·(m-1)",
                  },
                  {
                    step: "m^2 - 4m + 4 = 0",
                  },
                  {
                    step: "Δ = 0 \\Rightarrow m_{0} = \\frac{4}{2} = 2",
                  },
                  {
                    step: "\\text{Pełny ciąg: } (4, 2, 1)",
                  },
                  {
                    step: "\\text{Iloraz: } q = \\frac{1}{2}",
                  },
                  {
                    step: "\\text{Ciąg jest malejący}"
                  }
                ]}
                solutions={["m = 2", "(4, 2, 1) \\text{ - ciąg malejący}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;