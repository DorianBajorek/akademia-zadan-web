"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trzywyrazowy ciąg arytmetyczny</h2>
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(m, 4, 9-3m)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="m"/> i określ monotoniczność ciągu</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              
            </p>
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
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zastosuj własność ciągu arytmetycznego do podanego ciągu
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "2m = 4 + (9-3m)", value: "a" },
                { label: "2·4 = m + (9-3m)", value: "b" },
                { label: "2(9-3m) = m + 4", value: "c" },
                { label: "4 = \\frac{m + 9-3m}{2}", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne równanie to: $$4 = \\frac{m + 9-3m}{2}$$ <br>
              Do własności ciągu $$b=\frac{a+c}{2}$$ podstawiamy: <br>
              $$a = m$$, $$b = 4$$, $$c = 9-3m$$ <br>"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="4 = \frac{m + 9-3m}{2}"/>
            </p>
            <ChoiceQuestion
              question="Wskaż poprawne rozwiązanie"
              choices={[
                { label: "m = -0.5", value: "a" },
                { label: "m = 0.5", value: "b" },
                { label: "m = 1", value: "c" },
                { label: "m = -1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$8 = 9 - 2m$$ <br>
              2. $$-1 = -2m$$ <br>
              3. $$2m = 1$$ <br>
              4. $$m = 0.5$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
             Dla <InlineMath math="m=0.5"/> nasz ciąg ma postać <InlineMath math="(0.5, 4, 7.5)"/>.
            </p>
            <ChoiceQuestion
              question="Jaka jest monotoniczność ciągu $$(0.5, 4, 7.5)$$?"
              choices={[
                { label: "\\text{Ciąg jest rosnący}", value: "a" },
                { label: "\\text{Ciąg jest malejący}", value: "b" },
                { label: "\\text{Ciąg jest stały}", value: "c" },
                { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ciąg jest rosnący, ponieważ: <br>
              $$0.5 < 4 < 7.5$$ <br>
              Różnica ciągu: $$r = 3.5$$ (dodatnia, więc ciąg rośnie)"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(m, 4, 9-3m) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "b = \\frac{a + c}{2} \\Rightarrow 4 = \\frac{m + (9-3m)}{2}",
              },
              {
                step: "8 = 9 - 2m",
              },
              {
                step: "m = 0.5",
              },
              {
                step: "\\text{Ciąg } (0.5, 4, 7.5) \\text{ jest rosnący (r = 3.5)}"
              }
            ]}
            solutions={["m = 0.5", "(0.5, 4, 7.5) \\text{ - ciąg rosnący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;