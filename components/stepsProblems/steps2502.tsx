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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie nierówności z ułamkami</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{1}{2}x + \frac{1}{3} < \frac{2}{3}x - \frac{1}{6}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: Najlepiej w nierównościach z ułamkami pozbyć się ułamków. Można to zrobić mnożąc obie strony nierówności przez wspolny mianownik wszystkich ułamków (najlepiej najmniejszym jaki możliwy).
            </p>
            <ChoiceQuestion
              question="Jaki jest najmniejszy wspólny mianownik?"
              choices={[
                { label: "6", value: "a" },
                { label: "12", value: "b" },
                { label: "3", value: "c" },
                { label: "2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Liczba $$6$$ jest najmniejszą liczbą, którą można podzielić przez $$2$$ oraz $$3$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: pomnóż obie strony nierówności przez  <InlineMath math="6"/> aby pozbyć się ułamków:
            </p>
            <ChoiceQuestion
              question="Jak wygląda nierówność po pomnożeniu przez 6?"
              choices={[
                { label: "2x + 3 < 4x - 2", value: "a" },
                { label: "6x + 6 < 12x - 6", value: "b" },
                { label: "3x + 2 < 4x - 1", value: "c" },
                { label: "x + 2 < 2x + 1", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$3x + 2 < 4x - 1$$. <br>
                Obliczenia:<br>
                $$6 \cdot \frac{1}{2}x = 3x$$<br>
                $$6 \cdot \frac{1}{3} = 2$$<br>
                $$6 \cdot \frac{2}{3}x = 4x$$<br>
                $$6 \cdot (-\frac{1}{6}) = -1$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: przenieś wyrażenia z x na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "3x - 4x < -1 - 2", value: "a" },
                { label: "3x + 4x < -1 + 2", value: "b" },
                { label: "-3x - 4x < 1 - 2", value: "c" },
                { label: "3x - 4x < 1 + 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$3x - 4x < -1 - 2$$. <br>
                Przenosimy $$4x$$ na lewą stronę (zmieniając znak na minus) i $$2$$ na prawą stronę (zmieniając znak na minus)."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czwarty krok: uprość obie strony nierówności:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczona nierówność?"
              choices={[
                { label: "x < 3", value: "a" },
                { label: "7x < 1", value: "b" },
                { label: "-7x < -1", value: "c" },
                { label: "-x < -3", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne uproszczenie to $$-x < -3$$. <br>
                Obliczenia:<br>
                Lewa strona: $$3x - 4x = -x$$<br>
                Prawa strona: $$-1 - 2 = -3$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Piąty krok: pomnóż obie strony przez -1 (pamiętaj o zmianie znaku nierówności!):
            </p>
            <ChoiceQuestion
              question="Jakie jest ostateczne rozwiązanie?"
              choices={[
                { label: "x > 3", value: "a" },
                { label: "x < 3", value: "b" },
                { label: "x > -3", value: "c" },
                { label: "x < -3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x > 3$$. <br>
                Mnożymy obie strony przez -1 i zmieniamy znak nierówności:<br>
                $$-x < -3$$<br>
                $$x > 3$$"
                explanationImage="/steps-images/nierownosc-liniowa3.png"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="\frac{1}{2}x + \frac{1}{3} < \frac{2}{3}x - \frac{1}{6}"
            steps={[
              {
                step: "\\frac{1}{2}x + \\frac{1}{3} < \\frac{2}{3}x - \\frac{1}{6} /\\cdot6",
              },
              {
                step: "3x + 2 < 4x - 1",
              },
              {
                step: "3x - 4x < -1 - 2",
              },
              {
                step: "-x < -3",
              },
              {
                step: "x > 3",
                image: "/steps-images/nierownosc-liniowa3.png",
              },
            ]}
            solutions={["x \\in (3, ∞)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;