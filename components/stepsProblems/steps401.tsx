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
          <InlineMath math="(5m, 4+2m, m)"/> 
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
              Korzystając z własności ciągu arytmetycznego zapisz odpowiednie równanie
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "5m=\\frac{4+2m+m}{2}", value: "a" },
                { label: "4+2m=\\frac{5m+m}{2}", value: "b" },
                { label: "m=\\frac{5m+4+2m}{2}", value: "c" },
                { label: "4+2m = \\frac{5m+5m}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$4+2m = \frac{5m+m}{2}$$. <br>
              Dlaczego? <br>
              $$a=5m, b=4+2m, c=m$$ <br>
              $$b = \frac{a+c}{2}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość równanie <InlineMath math="4+2m = \frac{5m+m}{2}"/>
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "8+4m=6m", value: "a" },
                { label: "4+2m=6m", value: "b" },
                { label: "8+2m=6m", value: "c" },
                { label: "4+4m=6m", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$8+4m=6m$$. <br>
              $$4+2m = \frac{5m+m}{2}$$ <br>
              $$4+2m = \frac{6m}{2}$$ <br> 
              $$8+4m = 6m$$ <br>"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <NumericQuestion
              question="Rozwiąż równanie $$8+4m=6m$$. Podaj wartość m"
              correctAnswer="4"
              explanation="Poprawne rozwiązanie to $$m = 4$$. <br>
              Skoro $$8+4m=6m$$, to $$8=2m$$ i dzieląc przez dwa otrzymujemy $$m=4$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wyrazy ciągu i wskaż jego monotoniczność
            </p>
            <ChoiceQuestion
              question="Oblicz wyrazy ciągu i wskaż czy ciąg jest rosnący czy malejący"
              choices={[
                { label: "(20,12,4) \\rightarrow \\text{ciąg malejący}", value: "a" },
                { label: "(20,12,4) \\rightarrow \\text{ciąg rosnący}", value: "b" },
                { label: "(9,12,4) \\rightarrow \\text{ciąg malejący}", value: "c" },
                { label: "(9,12,4) \\rightarrow \\text{ciąg rosnący}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$(20,12,4)$$ i ciąg malejący. <br>
              Jeśli $$m=4$$ to: <br>
              $$5m=20$$, $$4+2m=12$$, $$m=4$$ <br>
              Otrzymujemy ciąg $$(20,12,4)$$. <br>
              Spełnione są nierówności $$20>12>4$$, więc ciąg jest malejący."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(5m,4+2m,m) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "a=5m, b=4+2m, c=m, b=\\frac{a+c}{2}",
              },
              {
                step: "4+2m=\\frac{5m+m}{2}",
              },
              {
                step: "8+4m=6m",
              },
              {
                step: "m=4 \\text{ i ciąg } (20,12,4) \\text{ jest malejący}"
              }
            ]}
            solutions={["m=4 \\text{ i ciąg } (20,12,4) \\text{ jest malejący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;