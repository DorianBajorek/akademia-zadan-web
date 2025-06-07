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
          <InlineMath math="(24, 6, a-1)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="a"/> i określ monotoniczność ciągu</p>
        
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
                { label: "2\\cdot 24 = 6 + (a-1)", value: "a" },
                { label: "6 = \\frac{24 + a - 1}{2} ", value: "b" },
                { label: "2(a-1) = 24 + 6", value: "c" },
                { label: "2 \\cdot 6 = 24 + (a-1)", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne równanie to: $$6 = \\frac{24 + a - 1}{2} $$ <br>
              Z własności ciągu: $$b = \frac{a + c}{2}$$ <br>
              Gdzie: <br>
              $$a = 24$$, $$b = 6$$, $$c = a-1$$ "
             
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
             Rozwiąż równanie <InlineMath math="6 = \frac{24 + a - 1}{2}"/>
            </p>
            <ChoiceQuestion
              question="Wskaż poprawne rozwiązanie"
              choices={[
                { label: "a=-11", value: "a" },
                { label: "a=11", value: "b" },
                { label: "a =1", value: "c" },
                { label: "a=-1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$6 = \frac{24 + a - 1}{2}$$ <br>
              2. $$12 = 24 + a - 1$$ <br>
              3. $$12 = 23 + a$$ <br>
              4. $$a = 12 - 23$$ <br>
              5. $$a = -11$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź poprawność rozwiązania
            </p>
            <NumericQuestion
              question="Podaj wartość a"
              correctAnswer="-11"
              explanation="Ostateczne rozwiązanie: <br>
              $$a = -11$$ <br>
              Sprawdzenie: <br>
              Dla a = -11 ciąg to (24, 6, -12) <br>
              Różnica: 6 - 24 = -18 i -12 - 6 = -18 <br>
              Różnica jest stała, więc ciąg jest arytmetyczny."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )} */}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Dla <InlineMath math="a=-11"/> nasz ciąg ma postać <InlineMath math="(24,6,-12)"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest monotoniczność ciągu (24, 6, -12)?"
              choices={[
                { label: "\\text{Ciąg jest rosnący}", value: "a" },
                { label: "\\text{Ciąg jest malejący}", value: "b" },
                { label: "\\text{Ciąg jest stały}", value: "c" },
                { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ciąg jest malejący, ponieważ: <br>
              $$24 > 6 > -12$$ <br>
              Różnica ciągu: $$r = -18$$ (ujemna, więc ciąg maleje)"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(24, 6, a-1) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "b = \\frac{a+c}{2} \\Rightarrow  6 = \\frac{24 + a - 1}{2}",
              },
              {
                step: "12 = 24 + a - 1",
              },
              {
                step: "a = 12 - 23 = -11",
              },
              {
                step: "\\text{Ciąg } (24, 6, -12) \\text{ jest malejący (r = -18)}"
              }
            ]}
            solutions={["a = -11", "(24, 6, -12) \\text{ - ciąg malejący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;