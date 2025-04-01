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
          <InlineMath math="(1, 4, a+5)"/> 
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
              Korzystając z własności ciągu arytmetycznego zapisz odpowiednie równanie
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "1=\\frac{4+a+5}{2}", value: "a" },
                { label: "4=\\frac{1+a+5}{2}", value: "b" },
                { label: "a+5=\\frac{1+4}{2}", value: "c" },
                { label: "4 = \\frac{1-a+5}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$4 = \frac{1+a+5}{2}$$. <br>
               Z własności ciągu arytmetycznego: $$y = \frac{x+z}{2}$$ <br>
              Gdzie: <br>
              $$x=1$$, $$y=4$$, $$z=a+5$$ <br>"
             
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość równanie <InlineMath math="4 = \frac{1+a+5}{2}"/>
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "8=6+a", value: "a" },
                { label: "4=3+a", value: "b" },
                { label: "2=a-6", value: "c" },
                { label: "4=6+a", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$8=6+a$$. <br>
              $$4 = \frac{6+a}{2}$$ <br>
              Mnożąc obie strony przez 2: $$8=6+a$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <NumericQuestion
              question="Rozwiąż równanie $$8=6+a$$. Podaj wartość a"
              correctAnswer="2"
              explanation="Poprawne rozwiązanie to $$a = 2$$. <br>
              $$8=6+a$$ <br>
              $$a=8-6$$ <br>
              $$a=2$$"
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
              question="Jaki jest pełny ciąg i jego monotoniczność?"
              choices={[
                { label: "(1,4,7) \\rightarrow \\text{rosnący}", value: "a" },
                { label: "(1,4,7) \\rightarrow \\text{malejący}", value: "b" },
                { label: "(1,4,3) \\rightarrow \\text{rosnący}", value: "c" },
                { label: "(1,4,3) \\rightarrow \\text{malejący}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Dla $$a=2$$ otrzymujemy ciąg $$(1,4,7)$$. <br>
              Różnica ciągu: $$r=4-1=3$$ <br>
              Kolejne wyrazy: $$1 < 4 < 7$$ <br>
              Ciąg jest rosnący."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(1,4,a+5) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "x=1, y=4, z=a+5, y=\\frac{x+z}{2}",
              },
              {
                step: "4=\\frac{1+a+5}{2}",
              },
              {
                step: "8=6+a",
              },
              {
                step: "a=2 \\text{ i ciąg } (1,4,7) \\text{ jest rosnący}"
              }
            ]}
            solutions={["a=2", "(1,4,7) \\text{ - ciąg rosnący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;