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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trzywyrazowy ciąg arytmetyczny</h2>
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(12, 6, 2m-1)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="m"/> i określ monotoniczność ciągu</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <ChoiceQuestion
              question="Jeśli trzywyrazowy ciąg (a,b,c) jest arytmetyczny, to które równanie jest spełnione?"
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
              Korzystając z własności ciągu arytmetycznego zapisz odpowiednie równanie
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "12=\\frac{6+2m-1}{2}", value: "a" },
                { label: "6=\\frac{12+2m-1}{2}", value: "b" },
                { label: "2m-1=\\frac{12+6}{2}", value: "c" },
                { label: "6 = \\frac{12+2m-1}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$6 = \frac{12+2m-1}{2}$$. <br>
              Dlaczego? <br>
              $$a=12, b=6, c=2m-1$$ <br>
              $$b = \frac{a+c}{2}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        


{completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość równanie <InlineMath math="6 = \frac{11+2m-1}{2}"/>
            </p>
            <ChoiceQuestion
              question="Rozwiąż równanie $$12=11+2m$$. Wskaż prawidłową odpowiedź?"
              choices={[
                { label: "m=23", value: "a" },
                { label: "m=\\frac{1}{2}", value: "b" },
                { label: "m=-\\frac{1}{2}", value: "c" },
                { label: "m=1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne rozwiązanie to $$m=\frac{1}{2}$$. <br>
              $$12=11+2m$$ <br> 
              $$1=2m$$ <br> 
              $$m=\frac{1}{2}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wyrazy ciągu i wskaż jego monotoniczność
            </p>
            <ChoiceQuestion
              question="Oblicz wyrazy ciągu i wskaż czy ciąg jest rosnący czy malejący"
              choices={[
                { label: "(12,6,0) \\rightarrow \\text{ciąg malejący}", value: "a" },
                { label: "(12,6,0) \\rightarrow \\text{ciąg rosnący}", value: "b" },
                { label: "(12,6,1) \\rightarrow \\text{ciąg malejący}", value: "c" },
                { label: "(12,6,1) \\rightarrow \\text{ciąg rosnący}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$(12,6,0)$$ i ciąg malejący. <br>
              Jeśli $$m=\frac{1}{2}$$ to: <br>
              $$2m-1=0$$ <br>
              Otrzymujemy ciąg $$(12,6,0)$$. <br>
              Spełnione są nierówności $$12>6>0$$, więc ciąg jest malejący."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(12,6,2m-1) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "a=12, b=6, c=2m-1, b=\\frac{a+c}{2}",
              },
              {
                step: "6=\\frac{12+2m-1}{2}",
              },
              {
                step: "12=11+2m",
              },
              {
                step: "m=0.5 \\text{ i ciąg } (12,6,0) \\text{ jest malejący}"
              }
            ]}
            solutions={["m=0.5 \\text{ i ciąg } (12,6,0) \\text{ jest malejący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;