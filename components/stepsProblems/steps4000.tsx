"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Kąt w okręgu"
          description="Wyznacz miarę kąte $$\alpha$$."
          imageUrl="/steps-images/steps4000a.jpg"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Sprawdzenie relacji między kątem <InlineMath math="\alpha" /> a kątem <InlineMath math="60^{\circ}" />
              </StepDescription>
              <ChoiceQuestion
                question="Czy kąt $$\alpha$$ jest oparty na tym samym łuku co kąt $$60^{\circ}$$?"
                choices={[
                  { label: "\\text{TAK}", value: "a" },
                  { label: "\\text{NIE}", value: "b" },
                ]}
                correctAnswer="a"
                explanation="Odpowiedź TAK. Widać to na rysunku zaznaczonym niżej, gdzie końce jednego kąta trafiają w te same miejsca na które trafia drugi kąt."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps4000b.jpg"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Twierdzenie o kątach opisanych na tych samych łukach
              </StepDescription>
              <ChoiceQuestion
                question="Które zdanie jest prawdziwe?"
                choices={[
                  { label: "\\text{Kąt środkowy: } \\alpha \\text{, Kąt środkowy: }  60^{\\circ}", value: "a" },
                  { label: "\\text{Kąt wpisany: } \\alpha \\text{, Kąt wpisany: }  60^{\\circ}", value: "b" },
                  { label: "\\text{Kąt wpisany: } \\alpha \\text{, Kąt środkowy: }  60^{\\circ}", value: "c" },
                  { label: "\\text{Kąt środkowy: } \\alpha \\text{, Kąt wpisany: }  60^{\\circ}", value: "d" },
                ]}
                correctAnswer="d"
                explanation="Kąt $$\alpha$$ ma swój wierzchołek na łuku okręgu, co oznacza, że jest kątem wpisanym. Kąt $$60^{\circ}$$ ma swój wierzchołek w środku, więc jest kątem środkowym."
                onComplete={() => handleStageComplete(2)}
                explanationImage="/steps-images/steps4000b.jpg"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wyznaczanie miary kąta <InlineMath math="\alpha" />
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest miara kąta $$\alpha$$?"
                choices={[
                  { label: "\\alpha = 120^{\\circ}", value: "a" },
                  { label: "\\alpha = 60^{\\circ}", value: "b" },
                  { label: "\\alpha = 30^{\\circ}", value: "c" },
                  { label: "\\alpha = 15^{\\circ}", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Kąt środkowy jest dwa razy większy niż kąt wpisany oparty na tym samym łuku. Dzięki tej relacji możemy powiedzieć, że kąt $$\alpha$$ jest dwa razy mniejszy. Mamy więc $$\alpha = 30^{\circ}$$"
                onComplete={() => handleStageComplete(3)}
                explanationImage="/steps-images/steps4000c.png"
              />
            </div>
          )}
          
          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[
                  {
                    step: "",
                    image: "/steps-images/steps4000c.png"
                  },
                ]}
                solutions={["\\alpha = 30^{\\circ}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;