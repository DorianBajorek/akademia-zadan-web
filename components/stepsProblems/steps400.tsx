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
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg  </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
        <InlineMath math="(2m-5, 4, 9)"/> 
        </p>
        <p className="text-lg text-gray-800">  jest arytmetyczny. Wyznacz wartość  <InlineMath math="m"/> i określ monotiniczność ciągu</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              
            </p>
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
              question="Które równanie  jest poprawne?"
              choices={[
                { label: "2m-5=\\frac{4+9}{2}", value: "a" },
                { label: "4=\\frac{2m+5+9}{2}", value: "b" },
                { label: "9=\\frac{4+2m-5}{2}", value: "c" },
                { label: "4 = \\frac{2m-5+9}{2}", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$4 = \frac{2m-5+9}{2}$$. <br>
              Dlaczego? <br>
              $$a=2m-5, b=4, c=9$$ <br>
              $$b = \frac{a+c}{2}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość równanie  <InlineMath math="4 = \frac{2m-5+9}{2}"/>
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "8=2m+4", value: "a" },
                { label: "8=2m-4", value: "b" },
                { label: "4=2m-14", value: "c" },
                { label: "4=m+4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$8=2m+4$$. <br>
              $$4 = \frac{2m-5+9}{2}$$ <br> 
              $$4 = \frac{2m+4}{2}$$ <br> 
              $$8=2m+4 $$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
        <>
            <p className="text-lg text-gray-700 mt-6">
            
            </p>
            <NumericQuestion
            question="Rozwiąż równanie $$8=2m+4$$. Podaj wartość m"
            correctAnswer="2"
            explanation="Poprawne rozwiązanie to $$m = 2$$. <br>
            Skoro $$8=2m+4$$, to $$4=2m$$ i dzieląc przez dwa otrzymujemy $$m=2$$"
            onComplete={() => handleStageComplete(4)}
            />
        </>
        )}


{completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość równanie  <InlineMath math="4 = \frac{2m-5+9}{2}"/>
            </p>
            <ChoiceQuestion
              question="Oblicz brakujący wyraz ciągu i wskaż czy ciąg jest rosnący czy malejący"
              choices={[
                { label: "(-1,4,9) \\rightarrow \\text{ciąg rosnący}", value: "a" },
                { label: "(-1,4,9) \\rightarrow \\text{ciąg malejący}", value: "b" },
                { label: "(1,4,9) \\rightarrow \\text{ciąg rosnący}", value: "c" },
                { label: "(1,4,9) \\rightarrow \\text{ciąg malejący}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$(-1,4,9)$$ i ciąg rosnący. <br>
              Jeśli $$m=2$$ to $$2m-5=-1$$ i nasz ciągo to $$(-1,4,9)$$. <br> 
              Spełnione są nierówności $$-1<4<9$$, więc ciąg jest rosnący. <br> "
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(2m-5,4,9) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "a=2m-5, b=4, c=9, b=\\frac{a+c}{2}",
              },
              {
                step: "4=\\frac{2m-5+9}{2}",
              },
              {
                step: "8=2m+4",
              },
              {
                step: "m=2 \\text{ i ciąg } (-1,4,9) \\text{ jest rosnący}"
              }
            ]}
            solutions={["m=2 \\text{ i ciąg } (-1,4,9) \\text{ jest rosnący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;