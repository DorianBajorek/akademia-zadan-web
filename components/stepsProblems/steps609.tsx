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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wartości wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Przekształć ujemne wykładniki na dodatnie:
            </p>
            <ChoiceQuestion
              question="Jak przekształcić wyrażenie z ujemnymi wykładnikami?"
              choices={[
                { label: "3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2", value: "a" },
                { label: "3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-9)^2", value: "b" },
                { label: "3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2", value: "c" },
                { label: "3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-9)^2", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenia:
              $$3^{-1} = \frac{1}{3}$$
              $$(-\frac{1}{9})^{-2} = (-9)^2$$ (odwracamy ułamek i zmieniamy znak wykładnika)"
              onComplete={() => handleStageComplete(1)}
               img="/steps-images/ujemnyWykladnik.png"
=======
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Prostopadłość prostych</h2>
        <p className="text-lg text-gray-800">Proste <InlineMath math="k"/> oraz <InlineMath math="l"/> są określone równaniami:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="k: y = (m + 1)x + 7"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="l: y = -2x + 7"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Proste <InlineMath math="k"/> oraz <InlineMath math="l"/> są prostopadłe, gdy liczba <InlineMath math="m"/> jest równa:</p>
        
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
                { label: "\\text{Wyrazy wolne są równe}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/proste_prostopadle.png"}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Oblicz wartość mianownika:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$(-9)^2$$?"
              choices={[
                { label: "-81", value: "a" },
                { label: "81", value: "b" },
                { label: "18", value: "c" },
                { label: "-18", value: "d" },
              ]}
              correctAnswer="b"
              explanation="$$(-9)^2 = (-9) \cdot (-9) = 81$$ (minus razy minus daje plus)"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/definicjaPotegi.png"
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
                { label: `(m + 1) \\cdot (-2) = 1`, value: "a" },
                { label: `(m + 1) \\cdot (-2) = -1`, value: "b" },
                { label: `(m + 1) + (-2) = -1`, value: "c" },
                { label: `(m + 1) = -2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$(m + 1) \\cdot (-2) = -1$$ <br>
              Wynika to z warunku prostopadłości: iloczyn współczynników kierunkowych musi być równy -1. <br> 
              Współczynnik kierunkowy prostej k to $$(m+1)$$, a współczynnik kierunkowy prostej $$l$$ to $$-2$$.  `}
              onComplete={() => handleStageComplete(2)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wstaw obliczone wartości i uprość wyrażenie:
            </p>
            <ChoiceQuestion
              question="Jak uprościć wyrażenie $$\frac{\frac{1}{3}}{81} \cdot 81$$?"
              choices={[
                { label: "\\frac{1}{3}", value: "a" },
                { label: "3", value: "b" },
                { label: "1", value: "c" },
                { label: "81", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{\frac{1}{3}}{81} \cdot 81 = \frac{1}{3} \cdot \frac{81}{81} = \frac{1}{3}$$"
=======
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="(m + 1) \cdot (-2) = -1"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -\\frac{1}{2}", value: "a" },
                { label: "m = \\frac{1}{2}", value: "b" },
                { label: "m = -3", value: "c" },
                { label: "m = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$(m + 1) \cdot (-2) = -1$$ <br>
              2. Dzielimy obie strony przez -2: <br>
              $$m + 1 = \frac{-1}{-2} = \frac{1}{2}$$ <br>
              3. Odejmujemy 1 od obu stron: <br>
              $$m = \frac{1}{2} - 1 = -\frac{1}{2}$$"
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81"
            steps={[
              {
                step: "\\frac{3^{-1}}{(-\\frac{1}{9})^{-2}} \\cdot 81 = \\frac{\\frac{1}{3}}{(-9)^{2}} \\cdot 81 = \\frac{\\frac{1}{3}}{81} \\cdot 81 = \\frac{1}{3}",
              }
            ]}
            solutions={["\\frac{1}{3}"]}
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
                { label: "C. m = -3", value: "c" },
                { label: "D. m = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnym rozwiązaniem jest $$m = -\frac{1}{2}$$, co odpowiada opcji A."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste } k \text{ i } l \text{ są prostopadłe} \newline k: y = (m + 1)x + 7 \newline l: y = -2x + 7"
            steps={[
              { step: "\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1" },
              { step: "(m + 1) \\cdot (-2) = -1" },
              { step: "m + 1 = \\frac{1}{2}" },
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