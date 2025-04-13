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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie środka przekątnej rombu</h2>
        <p className="text-lg text-gray-800">Dane są końce przekątnej rombu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="A = (1, -3)"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="C = (-2, 4)"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Środek przekątnej <InlineMath math="BD"/> tego rombu ma współrzędne:</p>
        
        {/* Krok 1 - Obliczenie środka przekątnej AC */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak obliczyć środek odcinka AC?
            </p>
            <ChoiceQuestion
              question="Który wzór jest poprawny do obliczenia środka odcinka?"
              choices={[
                { label: "\\left( \\frac{x_A + x_C}{2}, \\frac{y_A + y_C}{2} \\right)", value: "a" },
                { label: "\\left( \\frac{x_A - x_C}{2}, \\frac{y_A - y_C}{2} \\right)", value: "b" },
                { label: "\\left( x_A + x_C, y_A + y_C \\right)", value: "c" },
                { label: "\\left( \\frac{x_C - x_A}{2}, \\frac{y_C - y_A}{2} \\right)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Środek odcinka obliczamy jako średnią arytmetyczną współrzędnych końców: $$S = \\left( \\frac{1 + (-2)}{2}, \\frac{-3 + 4}{2} \\right) = \\left( -\\frac{1}{2}, \\frac{1}{2} \\right)$$"
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/dlugosc_odcinka.png"
            />
          </>
        )}
        
        {/* Krok 2 - Właściwości rombu */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaka jest właściwość przekątnych w rombie?
            </p>
            <ChoiceQuestion
              question="Które stwierdzenie jest prawdziwe?"
              choices={[
                { label: "Przekątne rombu przecinają się w swoich środkach pod kątem prostym", value: "a" },
                { label: "Przekątne rombu są równej długości", value: "b" },
                { label: "Środki przekątnych rombu pokrywają się z jego wierzchołkami", value: "c" },
                { label: "Przekątne rombu są równoległe", value: "d" }
              ]}
              correctAnswer="a"
              explanation="W rombie przekątne przecinają się w swoich środkach pod kątem prostym, więc środek przekątnej BD pokrywa się ze środkiem przekątnej AC."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Wybór właściwej odpowiedzi */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych odpowiedzi jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwe współrzędne środka przekątnej BD:"
              choices={[
                { label: "A. \\left( -\\frac{1}{2}, \\frac{1}{2} \\right)", value: "a" },
                { label: "B. \\left( \\frac{1}{2}, -\\frac{3}{2} \\right)", value: "b" },
                { label: "C. (-1, 2)", value: "c" },
                { label: "D. (-1, 1)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Środek przekątnej BD musi być taki sam jak środek przekątnej AC, który obliczyliśmy jako $$\\left( -\\frac{1}{2}, \\frac{1}{2} \\right)$$. Poprawna odpowiedź to A."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\\text{Środek przekątnej rombu } ABCD \\text{ o końcach przekątnej } A = (1, -3) \\text{ i } C = (-2, 4)"
            steps={[
              { step: "\\text{Obliczenie środka AC: } S = \\left( \\frac{1 + (-2)}{2}, \\frac{-3 + 4}{2} \\right) = \\left( -\\frac{1}{2}, \\frac{1}{2} \\right)" },
              { step: "\\text{Właściwość rombu: środki przekątnych pokrywają się}" },
              { step: "\\text{Środek BD musi być taki sam jak środek AC}" },
            ]}
            solutions={[
              "\\left( -\\frac{1}{2}, \\frac{1}{2} \\right) \\text{ (Odpowiedź A)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;