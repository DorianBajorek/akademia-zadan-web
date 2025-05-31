"use client";

import { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Miejsce zerowe funkcji liniowej z tabeli
        </h2>
        <p className="text-lg text-gray-800 mt-4 mb-2">
          Dana jest funkcja liniowa <InlineMath math="f(x)" /> przedstawiona w tabeli:
        </p>
        <div className="flex flex-col items-center mb-4">
          <table className="border mb-4">
            <thead>
              <tr>
                <th className="border px-3 py-1">x</th>
                <th className="border px-3 py-1">-1</th>
                <th className="border px-3 py-1">1</th>
                <th className="border px-3 py-1">5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-1"><InlineMath math="f(x)" /></td>
                <td className="border px-3 py-1"><InlineMath math="\frac{1}{\sqrt{2}}" /></td>
                <td className="border px-3 py-1"><InlineMath math="\frac{3}{\sqrt{2}}" /></td>
                <td className="border px-3 py-1"><InlineMath math="\frac{7}{\sqrt{2}}" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-3">
          <strong>Oblicz miejsce zerowe tej funkcji.</strong>
        </div>

        {/* ETAP 1: Wybierz dwa punkty */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Które dwa punkty można wybrać, aby napisać równanie prostej?"
            choices={[
              { label: "(x_A, y_A) = (-1, \\frac{1}{\\sqrt{2}}), \\ (x_B, y_B) = (1, \\frac{3}{\\sqrt{2}})", value: "a" },
              { label: "(x_A, y_A) = (-1, \\frac{3}{\\sqrt{2}}), \\ (x_B, y_B) = (5, \\frac{7}{\\sqrt{2}})", value: "b" },
              { label: "(x_A, y_A) = (1, \\frac{3}{\\sqrt{2}}), \\ (x_B, y_B) = (-5, \\frac{7}{\\sqrt{2}})", value: "c" },
              { label: "(x_A, y_A) = (1, \\frac{1}{\\sqrt{2}}), \\ (x_B, y_B) = (5, \\frac{3}{\\sqrt{2}})", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Wybieramy dwa dowolne różne punkty z tabeli, np. $$A = (-1, \frac{1}{\sqrt{2}}), B = (1, \frac{3}{\sqrt{2}})$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Podstawienie do wzoru na prostą przez dwa punkty */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Podstaw wybrane punkty do wzoruna równanie prostej przechodzącej przez punkt $$A$$ i $$B$$:<br/> $$ (y - y_A)(x_B - x_A) - (y_B - y_A)(x - x_A) = 0 $$"
            choices={[
              { label: "(y - \\frac{1}{\\sqrt{2}}) (1 - (-1)) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - (-1)) = 0", value: "a" },
              { label: "(y - 1) (1 - (-1)) - (3 - 1) (x - (-1)) = 0", value: "b" },
              { label: "(y - \\frac{1}{\\sqrt{2}}) (2) - (\\frac{7}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0", value: "c" },
              { label: "(y - \\frac{1}{\\sqrt{2}}) (2) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - 1) = 0", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Podstawiamy:<br/> $$x_A = -1,\\ y_A = \\frac{1}{\\sqrt{2}},\\ x_B = 1,\\ y_B = \\frac{3}{\\sqrt{2}}$$.<br/>" +
              "Wzór: $$(y - \\frac{1}{\\sqrt{2}}) (1 - (-1)) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - (-1)) = 0$$"
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Podstawienie y=0 (szukamy miejsca zerowego) */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie równanie otrzymasz, podstawiając $$y=0$$ do poprzedniego wzoru?"
            choices={[
              { label: "(0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0", value: "a" },
              { label: "(0 + \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0", value: "b" },
              { label: "(0 - 1) \\cdot 2 - (3 - 1)(x + 1) = 0", value: "c" },
              { label: "(0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{7}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}})(x + 1) = 0", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Szukamy miejsca zerowego, czyli podstawiamy $y = 0$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Rozwiązanie równania dla x */}
        {completedStages.includes(3) && (
          <NumericQuestion
            question={
              "Wyznacz $x$ z równania:<br/>" +
              "$$ (0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0 $$"
            }
            correctAnswer="-2"
            explanation={
              "$$ ( -\\frac{1}{\\sqrt{2}} ) \\cdot 2 - ( \\frac{2}{\\sqrt{2}} ) (x + 1) = 0 $$<br/>" +
              "$$ -\\frac{2}{\\sqrt{2}} - \\frac{2}{\\sqrt{2}} (x + 1) = 0 $$<br/>" +
              "$$ -\\frac{2}{\\sqrt{2}} (x + 2) = 0 $$<br/>" +
              "Dzielimy przez $$-\\frac{2}{\\sqrt{2}}$$:<br/> $$x + 2 = 0$$<br/> $$x = -2$$"
            }
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="(y - y_A)(x_B - x_A) - (y_B - y_A)(x - x_A) = 0"
            steps={[
              { step: "\\text{Wybieramy punkty: }A = (-1, \\frac{1}{\\sqrt{2}}), B = (1, \\frac{3}{\\sqrt{2}})" },
              { step: "\\text{Podstawiamy do wzoru: }(y - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{2}{\\sqrt{2}}) (x + 1) = 0" },
              { step: "\\text{Podstawiamy }y=0 \\text{ :  }(-\\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{2}{\\sqrt{2}}) (x + 1) = 0" },
              { step: "\\text{Ostatecznie: }x + 2 = 0 \\implies x = -2" },
            ]}
            solutions={[
              "x = -2"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
