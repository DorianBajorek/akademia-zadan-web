"use client";

import { useEffect, useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { useAuth } from "@/app/UserData";
import { solveProblem } from "@/service";

const SubtractionPage = () => {
  const { token } = useAuth();
  const taskId = "804";
  const [problemSolved, setProblemSolved] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 7 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log("Problem marked as completed"))
        .catch((err) => console.error("Problem completion failed", err));
    }
  }, [problemSolved, taskId, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Odejmowanie ułamków</h2>
        <p className="text-lg text-gray-800">Wykonaj odejmowanie:</p>
        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{\frac{3}{4} - \frac{2}{3}}{\frac{2}{3} - \frac{1}{2}}" />
        </div>

        {/* Etap 1 */}
       {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jaki jest wspólny mianownik dla ułamków $$\frac{3}{4}$$ i $$\frac{2}{3}$$?"
            choices={[
              { label: "24", value: "a" },
              { label: "6", value: "b" },
              { label: "8", value: "c" },
              { label: "12", value: "d" },
            ]}
            correctAnswer="d"
            explanation="$$12$$ to najmniejszy wspólny mianownik liczb $$4$$ i $$3$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* Etap 2 */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak przedstawić ułamki $$\frac{3}{4}$$ i $$\frac{2}{3}$$ z mianownikiem $$12$$?"
            choices={[
              { label: "\\frac{9}{12} \\text{ i } \\frac{8}{12}", value: "a" },
              { label: "\\frac{6}{12} \\text{ i } \\frac{6}{12}", value: "b" },
              { label: "\\frac{3}{12} \\text{ i } \\frac{2}{12}", value: "c" },
              { label: "\\frac{12}{12} \\text{ i } \\frac{12}{12}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="$$\frac{3}{4} = \frac{9}{12}, \frac{2}{3} = \frac{8}{12}$$"
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* Etap 3 */}
        {completedStages.includes(2) &&  (
          <ChoiceQuestion
            question="Ile wynosi $$\frac{9}{12} - \frac{8}{12}$$?"
            choices={[
              { label: "\\frac{17}{12}", value: "a" },
              { label: "\\frac{1}{12}", value: "b" },
              { label: "\\frac{1}{0}", value: "c" },
              { label: "\\frac{1}{24}", value: "d" },
            ]}
            correctAnswer="b"
            explanation="Odejmujemy liczniki: $$9 - 8 = 1$$, mianownik zostaje: $$\frac{1}{12}$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* Etap 4 */}
        {completedStages.includes(3) &&(
          <ChoiceQuestion
            question="Jaki jest wspólny mianownik dla ułamków $$\frac{2}{3}$$ i $$\frac{1}{2}$$?"
            choices={[
              { label: "3", value: "a" },
              { label: "12", value: "b" },
              { label: "6", value: "c" },
              { label: "2", value: "d" },
            ]}
            correctAnswer="c"
            explanation="$$6$$ to najmniejszy wspólny mianownik liczb $$3$$ i $$2$$."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* Etap 5 */}
        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Jak przedstawić ułamki $$\frac{2}{3}$$ i $$\frac{1}{2}$$ z mianownikiem 6?"
            choices={[
              { label: "\\frac{4}{6} \\text{ i } \\frac{3}{6}", value: "a" },
              { label: "\\frac{2}{6} \\text{ i } \\frac{1}{6}", value: "b" },
              { label: "\\frac{6}{6} \\text{ i } \\frac{6}{6}", value: "c" },
              { label: "\\frac{5}{6} \\text{ i } \\frac{4}{6}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="$$\frac{2}{3} = \frac{4}{6}, \frac{1}{2} = \frac{3}{6}$$"
            onComplete={() => handleStageComplete(5)}
          />
        )}

        {/* Etap 6 */}
        {completedStages.includes(5) &&  (
          <ChoiceQuestion
            question="Ile wynosi $$\frac{4}{6} - \frac{3}{6}$$?"
            choices={[
              { label: "\\frac{1}{12}", value: "a" },
              { label: "\\frac{7}{6}", value: "b" },
              { label: "\\frac{1}{0}", value: "c" },
              { label: "\\frac{1}{6}", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Odejmujemy liczniki: $$4 - 3 = 1$$, mianownik zostaje: $$\frac{1}{6}$$."
            onComplete={() => handleStageComplete(6)}
          />
        )}

        {/* Etap 7 */}
        {completedStages.includes(6) &&  (
          <ChoiceQuestion
            question="Jaki jest wynik dzielenia $$\frac{1}{12} : \frac{1}{6}$$?"
            choices={[
              { label: "\\frac{1}{12}", value: "a" },
              { label: "\\frac{1}{6}", value: "b" },
              { label: "2", value: "c" },
              { label: "\\frac{1}{2}", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Dzielenie ułamków: $$\frac{1}{12} : \frac{1}{6} = \frac{1}{12} \cdot \frac{6}{1} = \frac{6}{12} = \frac{1}{2}$$"
            onComplete={() => handleStageComplete(7)}
          />
        )}

        {/* Podsumowanie */}
        {completedStages.length === 7 && (
          <StudentNotes
            equation="\frac{\frac{3}{4} - \frac{2}{3}}{\frac{2}{3} - \frac{1}{2}}"
            steps={[
              {
                step: "\\frac{\\frac{3}{4} - \\frac{2}{3}}{\\frac{2}{3} - \\frac{1}{2}} = \\frac{\\frac{9}{12} - \\frac{8}{12}}{\\frac{4}{6} - \\frac{3}{6}} = \\frac{\\frac{1}{12}}{\\frac{1}{6}} = \\frac{1}{12} : \\frac{1}{6} = \\frac{1}{2}",
              },
            ]}
            solutions={["\\frac{1}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default SubtractionPage;
