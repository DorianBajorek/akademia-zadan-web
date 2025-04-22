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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trzywyrazowy ciąg arytmetyczny</h2>
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(27, 9, a-1)"/> 
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
                { label: "2·27 = 9 + (a-1)", value: "a" },
                { label: "2·9 = 27 + (a-1)", value: "b" },
                { label: "2(a-1) = 27 + 9", value: "c" },
                { label: "9 = \\frac{27 + a - 1}{2}", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne równanie to: $$9 = \frac{27 + a - 1}{2}$$ <br>
              Z własności ciągu: $$b = \frac{a+c}{2}$$ <br>
              Gdzie: <br>
              $$a = 27, b = 9, c = a-1$$ <br>
              "
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
             Przekształć  równanie <InlineMath math="9 = \frac{27 + a - 1}{2}"/>
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "18 = 26 + a", value: "a" },
                { label: "a = 18 - 26", value: "b" },
                { label: "a = -8", value: "c" },
                { label: "\\text{Wszystkie powyższe}", value: "a" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$9 = \frac{27 + a - 1}{2}$$ <br>
              2. $$9 = \frac{26 + a}{2}$$ <br>
              3. $$18 = 26+a$$ <br>"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równananie <InlineMath math="18 = 26+a"/>
            </p>
            <NumericQuestion
              question="Podaj wartość a"
              correctAnswer="-8"
              explanation="Ostateczne rozwiązanie: <br>
              $$a = -8$$ <br>
              $$a=18-26$$ <br>
              $$a=-8$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
             Dla <InlineMath math="a=-8"/> nasz ciąg ma postać <InlineMath math="(27,9,-9)"/>. 
            </p>
            <ChoiceQuestion
              question="Wskaż monotoniczność ciągu"
              choices={[
                { label: "\\text{Ciąg jest rosnący}", value: "a" },
                { label: "\\text{Ciąg jest malejący}", value: "b" },
                { label: "\\text{Ciąg jest stały}", value: "c" },
                { label: "\\text{Ciąg nie jest monotoniczny}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ciąg jest malejący, ponieważ: <br>
              $$27 > 9 > -9$$ <br>
              Różnica ciągu: $$r = -18$$ (ujemna, więc ciąg maleje)"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(27, 9, a-1) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "2y = x + z \\Rightarrow 2·9 = 27 + (a-1)",
              },
              {
                step: "18 = 27 + a - 1",
              },
              {
                step: "a = 18 - 26 = -8",
              },
              {
                step: "\\text{Ciąg } (27, 9, -9) \\text{ jest malejący (r = -18)}"
              }
            ]}
            solutions={["a = -8", "(27, 9, -9) \\text{ - ciąg malejący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;