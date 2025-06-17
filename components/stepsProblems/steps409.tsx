"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Trzywyrazowy ciąg arytmetyczny"
          description="Trzywyrazowy ciąg $$(k, 2k+3, 36)$$ jest arytmetyczny. Wyznacz wartość $$k$$ i określ monotoniczność ciągu."
          equation="(k, 2k+3, 36)"
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
                explanation="Z definicji ciągu arytmetycznego wiemy, że środkowy wyraz jest średnią arytmetyczną wyrazów sąsiednich: $$b = \frac{a+c}{2}$$"
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
                question="Które równanie jest poprawne dla ciągu $$(k, 2k+3, 36)$$?"
                choices={[
                  { label: `2k+3 = \\frac{2k + 36}{2}`, value: "a" },
                  { label: `2k+3 = \\frac{k + 36}{2}`, value: "b" },
                  { label: `2k+3 = \\frac{36 - k}{2}`, value: "c" },
                  { label: `\\frac{2k+3}{2} = \\frac{k + 36}{4}`, value: "d" }
                ]}
                correctAnswer="b"
                explanation={`Poprawne równanie to: $$2k+3 = \\frac{k + 36}{2}$$ <br>
                Gdzie: <br>
                $$a = k$$, $$b = 2k+3$$, $$c = 36$$ <br>
                Z własności ciągu: $$b = \\frac{a + c}{2}$$`}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {/* Krok 3 - Rozwiązanie równania */}
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Rozwiązanie równania
              </StepDescription>
              <ChoiceQuestion
                question="Rozwiązaniem równania $$2k+3 = \frac{k + 36}{2}$$ jest:"
                choices={[
                  { label: "k = 9", value: "a" },
                  { label: "k = 10", value: "b" },
                  { label: "k = 11", value: "c" },
                  { label: "k = 12", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Kolejne kroki rozwiązania: <br>
                1. $$4k + 6 = k + 36$$ <br>
                2. $$4k - k = 36 - 6$$ <br>
                3. $$3k = 30$$ <br>
                4. $$k = 10$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {/* Krok 4 - Monotoniczność ciągu */}
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Monotoniczność ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest monotoniczność ciągu $$(10, 23, 36)$$?"
                choices={[
                  { label: "\\text{Ciąg jest rosnący}", value: "a" },
                  { label: "\\text{Ciąg jest malejący}", value: "b" },
                  { label: "\\text{Ciąg jest stały}", value: "c" },
                  { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Ciąg jest rosnący, ponieważ: <br>
                $$10 < 23 < 36$$ <br>
                Różnica ciągu: $$r = 13$$ (dodatnia, więc ciąg rośnie)"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}
          
          {/* Podsumowanie */}
          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="(k, 2k+3, 36) \rightarrow \text{ciąg arytmetyczny}"
                steps={[
                  { step: "b = \\frac{a + c}{2} \\Rightarrow 2k+3 = \\frac{k + 36}{2}" },
                  { step: "4k + 6 = k + 36" },
                  { step: "3k = 30 \\Rightarrow k = 10" },
                  { step: "\\text{Ciąg } (10, 23, 36) \\text{ jest rosnący (r = 13)}" }
                ]}
                solutions={[
                  "k = 10", 
                  "(10, 23, 36) \\text{ - ciąg rosnący}"
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