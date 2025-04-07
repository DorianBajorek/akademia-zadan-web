"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="100^5 \cdot (0,1)^{-6}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 10:
            </p>
            <ChoiceQuestion
              question="Które przekształcenia są poprawne dla liczb 100 i 0,1?"
              choices={[
                { label: "100 = 10^3, 0,1 = 10^{-2}", value: "a" },
                { label: "100 = 10^1, 0,1 = 10^{0}", value: "b" },
                { label: "100 = 10^2, 0,1 = 10^{-1}", value: "c" },
                { label: "100 = 10^4, 0,1 = 10^{-1}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenia to $$100 = 10^2$$ i $$0,1 = 10^{-1}$$, ponieważ: $$10^2 = 100$$ i $$10^{-1} = 0,1$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
=======
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Prostopadłość prostych</h2>
        <p className="text-lg text-gray-800">Proste o równaniach:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = 2mx - m^2 - 1"/> 
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = 4m^2x + m^2 + 1"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">są prostopadłe dla:</p>
        
        {/* Krok 1 - Warunek prostopadłości prostych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Kiedy dwie proste są prostopadłe?
            </p>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były prostopadłe?"
              choices={[
                { label: "\\text{Iloczyn współczynników kierunkowych wynosi -1}", value: "a" },
                { label: "\\text{Współczynniki kierunkowe są równe}", value: "b" },
                { label: "\\text{Suma współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Wyrazy wolne są przeciwne}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
              onComplete={() => handleStageComplete(1)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie <InlineMath math="100^5" />:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "100^5 = (10^2)^5 = 10^{2 \\cdot 5} = 10^{10}", value: "a" },
                { label: "100^5 = (10^2)^5 = 10^{2 + 5} = 10^{7}", value: "b" },
                { label: "100^5 = (10^2)^5 = 10^{5} = 10^{5}", value: "c" },
                { label: "100^5 = (10^2)^5 = 10^{2 - 5} = 10^{-3}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie: $$100^5 = (10^2)^5 = 10^{2 \cdot 5} = 10^{10}$$ (potęga potęgi - mnożymy wykładniki)"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz warunek prostopadłości dla podanych prostych
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2m \\cdot 4m^2 = 1`, value: "a" },
                { label: `2m \\cdot 4m^2 = -1`, value: "b" },
                { label: `2m + 4m^2 = -1`, value: "c" },
                { label: `2m = 4m^2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2m \\cdot 4m^2 = -1$$ <br>
              Wynika to z warunku prostopadłości: $$a_{1} \\cdot {a_2} = -1$$ <br> 
              Odczytujemy z równań prostych $$a_{1}=2m$$ i $$a_{2}=4m^2$$`}
              onComplete={() => handleStageComplete(2)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie <InlineMath math="(0,1)^{-6}" />:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{(-1) \\cdot (-6)} = 10^{6}", value: "a" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 - 6} = 10^{-7}", value: "b" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 + 6} = 10^{5}", value: "c" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{1 - 6} = 10^{-5}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie: $$(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}$$ (mnożymy wykładniki: $$-1 \cdot -6 = 6$$)"
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2m \cdot 4m^{2}=-1"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -\\frac{1}{2}", value: "a" },
                { label: "m = \\frac{1}{2}", value: "b" },
                { label: "m = 1", value: "c" },
                { label: "m = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$8m^3 = -1$$ <br>
              2. Dzielimy obie strony przez 8: <br>
              $$m^3 = -\frac{1}{8}$$ <br>
              3. Pierwiastkujemy obustronnie: <br>
              $$m = \sqrt[3]{-\frac{1}{8}} = -\frac{1}{2}$$"
              onComplete={() => handleStageComplete(3)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla $$10^{10} \cdot 10^{6}$$"
              choices={[
                { label: "10^{10} \\cdot 10^{6} = 10^{10 \\cdot 6} = 10^{60}", value: "a" },
                { label: "10^{10} \\cdot 10^{6} = 10^{10 - 6} = 10^{4}", value: "b" },
                { label: "10^{10} \\cdot 10^{6} = 10^{6 - 10} = 10^{-4}", value: "c" },
                { label: "10^{10} \\cdot 10^{6} = 10^{10 + 6} = 10^{16}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie: $$10^{10} \cdot 10^{6} = 10^{10 + 6} = 10^{16}$$ (dodajemy wykładniki)"
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 4 - Weryfikacja rozwiązań */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych opcji jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "A. m = -\\frac{1}{2}", value: "a" },
                { label: "B. m = \\frac{1}{2}", value: "b" },
                { label: "C. m = 1", value: "c" },
                { label: "D. m = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Jedynym poprawnym rozwiązaniem jest m = -1/2, co odpowiada opcji A."
              onComplete={() => handleStageComplete(4)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.length === 4 && (
          <StudentNotes
            equation="100^5 \cdot (0,1)^{-6}"
            steps={[
              {
                step: "100 = 10^2, \\quad 0,1 = 10^{-1}",
              },
              {
                step: "100^5 = (10^2)^5 = 10^{10}",
              },
              {
                step: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}",
              },
              {
                step: "10^{10} \\cdot 10^{6} = 10^{16}",
              }
            ]}
            solutions={["10^{16}"]}
=======
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste} \newline y = 2mx - m^2 - 1  \newline y = 4m^2x + m^2 + 1 \newline \text{są prostopadłe}"
            steps={[
              { step: "\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1" },
              { step: "2m \\cdot 4m^2 = -1" },
              { step: "8m^3 = -1" },
              { step: "m^3 = -\\frac{1}{8}" },
              { step: "m = -\\frac{1}{2}" },
            ]}
            solutions={[
              "m = -\\frac{1}{2} \\text{ (Odpowiedź A)}", 
            ]}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
          />
        )}
      </div>
    </div>
  );
};

export default Page;