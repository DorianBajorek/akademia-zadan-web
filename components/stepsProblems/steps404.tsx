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
          description="Trzywyrazowy ciąg $$(4, a, 36)$$ jest geometryczny. Wyznacz wartość $$a$$ i określ monotoniczność ciągu."
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
                question="Które równanie jest poprawne?"
                choices={[
                  { label: "a^2 = 4·36", value: "a" },
                  { label: "36^2 = 4·a", value: "b" },
                  { label: "4^2 = a·36", value: "c" },
                  { label: "a^2 = 4 + 36", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawne równanie to: $$a^2 = 4·36$$ <br>
                Z własności ciągu: $$b^2 = a·c$$ <br>
                Gdzie: <br>
                $$a = 4, b = a, c = 36$$ <br>"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Uproszczenie równania
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "a^2 = 144", value: "a" },
                  { label: "a = 4 + 36", value: "b" },
                  { label: "a = 4·36", value: "c" },
                  { label: "a^2 = 40", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Kolejne kroki rozwiązania: <br>
                1. $$a^2 = 4·36$$ <br>
                2. $$a^2 = 144$$ <br>"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiązanie równania
              </StepDescription>
              <NumericQuestion
                question="Rozwiąż równanie $$a^2 = 144$$. Podaj wszystkie możliwe wartości a (oddzielone przecinkami, od największej do najmniejszej)"
                correctAnswer="12,-12"
                explanation="Ostateczne rozwiązanie: <br>
                $$a^2 = 144$$ <br>
                $$a = 12$$ lub $$a = -12$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Określenie monotoniczności ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest pełny ciąg i jego monotoniczność dla a=12?"
                choices={[
                  { label: "\\text{Ciąg jest rosnący}", value: "a" },
                  { label: "\\text{Ciąg jest malejący}", value: "b" },
                  { label: "\\text{Ciąg jest stały}", value: "c" },
                  { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Dla a=12 ciąg jest rosnący, ponieważ: <br>
                $$4 < 12 < 36$$ <br>
                Iloraz ciągu: $$q = 3$$ (dodatni i większy od 1, więc ciąg rośnie)"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}
          
          {completedStages.includes(5) && (
            <div>
              <StepDescription stepNumber={6}>
                Określenie monotoniczności ciągu dla drugiego rozwiązania
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest pełny ciąg i jego monotoniczność dla a=-12?"
                choices={[
                  { label: "\\text{Ciąg jest rosnący}", value: "a" },
                  { label: "\\text{Ciąg jest malejący}", value: "b" },
                  { label: "\\text{Ciąg nie jest monotoniczny}", value: "c" },
                  { label: "\\text{Ciąg jest stały}", value: "d" }
                ]}
                correctAnswer="c"
                explanation="Dla a=-12 ciąg nie jest monotoniczny, ponieważ: <br>
                $$4 > -12 < 36$$ <br>
                Iloraz ciągu: $$q = -3$$ (ujemny, więc ciąg nie jest monotoniczny)"
                onComplete={() => handleStageComplete(6)}
              />
            </div>
          )}
          
          {completedStages.length === 6 && (
            <div className="mt-8">
              <StudentNotes
                equation="(4, a, 36) \rightarrow \text{ciąg geometryczny}"
                steps={[
                  {
                    step: "b^2 = a·c \\Rightarrow a^2 = 4·36",
                  },
                  {
                    step: "a^2 = 144",
                  },
                  {
                    step: "a = 12 \\quad \\text{lub} \\quad a = -12",
                  },
                  {
                    step: "\\text{Dla } a=12: \\text{ ciąg } (4, 12, 36) \\text{ rosnący (q = 3)}"
                  },
                  {
                    step: "\\text{Dla } a=-12: \\text{ ciąg } (4, -12, 36) \\text{ niemonotoniczny (q = -3)}"
                  }
                ]}
                solutions={["a = 12 \\quad \\text{lub} \\quad a = -12", "(4, 12, 36) \\text{ - rosnący}", "(4, -12, 36) \\text{ - niemonotoniczny}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;