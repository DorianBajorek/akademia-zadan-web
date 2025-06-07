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
          <InlineMath math="(k, 2k+3, 36)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="k"/> i określ monotoniczność ciągu</p>
        
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
                { label: `2k = (2k+3) + 36`, value: "a" },
                { label: `2k+3 = \\frac{k + 36}{2}`, value: "b" },
                { label: `2·36 = k + (2k+3)`, value: "c" },
                { label: `2k+3 = \\frac{k}{2} + 36`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2k+3 = \\frac{k + 36}{2}$$ <br>
              Gdzie: <br>
              $$a = k$$, $$b = 2k+3$$, $$c = 36$$ <br>
              Z własności ciągu: $$b = \\frac{a + c}{2}$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2k+3 = \frac{k + 36}{2}"/> i wskaż prawidłową odpowiedź
            </p>
            <ChoiceQuestion
              question="Które równanie jest równoważne naszemu równaniu"
              choices={[
                { label: "k = 9", value: "a" },
                { label: "k = 10", value: "b" },
                { label: "k  = 11 ", value: "c" },
                { label: "k=12", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$4k + 6 = k + 36$$ <br>
              2. $$4k - k = 36 - 6$$ <br>
              3. $$3k = 30$$ <br>
              4. $$k = 10$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
      

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Dla <InlineMath math="k=10"/> nasz ciąg ma postać <InlineMath math="(10,23,36)"/>.
            </p>
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
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(k, 2k+3, 36) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "b = \\frac{a + c}{2} \\Rightarrow 2k+3 = \\frac{k + 36}{2}",
              },
              {
                step: "4k + 6 = k + 36",
              },
              {
                step: "3k = 30 \\Rightarrow k = 10",
              },
              {
                step: "\\text{Ciąg } (10, 23, 36) \\text{ jest rosnący (r = 13)}"
              }
            ]}
            solutions={["k = 10", "(10, 23, 36) \\text{ - ciąg rosnący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;