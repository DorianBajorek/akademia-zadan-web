"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { image } from "framer-motion/client";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie miary kąta na podstawie rysunku</h2>
        <p className="text-lg text-gray-800">Wyznacz miarę zaznaczonego kąta  <InlineMath math="\alpha" /></p>
         <img src="/steps-images/steps4000a.jpg" alt="Rysunek z kątem α" className="mx-auto my-4 w-full max-w-xl rounded-lg shadow-md" />
        
        <p className="text-lg text-gray-800">Na podstawie powyższego rysunku wyznacz miarę kąta  <InlineMath math="\alpha" />.</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Sprwdzenie jaka jest relacja między kątem <InlineMath math="\alpha" /> oraz kątem <InlineMath math="60^{\circ}" />
            </p>
            <ChoiceQuestion
              question="Czy kąt $$\alpha$$ jest oparty na tym samym łuku co kąt $$60^{\circ}$$?"
              choices={[
                { label: "\\text{TAK}", value: "a" },
                { label: "\\text{NIE}", value: "b" },
              ]}
              correctAnswer="a"
              explanation="Odpowiedź TAK. Widać to na rysunku zaznaczonym niżej, gdzie końce jednego kąta trafiają w te same miejsca na która trafia drugi kąt."
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps4000b.jpg"
            />
          </>
        )}

        {(completedStages.includes(1)) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Skorzystajmy z twierdzenia o kątach opisanych na tych samych łukach. Jeden z nich jest kątem wpisanym, a drugi kątem środkowym.
            </p>
            <ChoiceQuestion
              question="Które zdanie jest prawdziwe?"
              choices={[
                { label: "\\text{Kąt środkowy: } \\alpha \\text{, Kąt środkowy: }  60^{\\circ}", value: "a" },
                { label: "\\text{Kąt wpisany: } \\alpha \\text{, Kąt wpisany: }  60^{\\circ}", value: "b" },
                { label: "\\text{Kąt wpisany: } \\alpha \\text{, Kąt środkowy: }  60^{\\circ}", value: "c" },
                { label: "\\text{Kąt środkowy: } \\alpha \\text{, Kąt wpisany: }  60^{\\circ}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Kąt $$\alpha$$ ma swój wierzchołek na łuku okręgu a to oznacza, że jest kątem wpisany. Kąt $$60^{\circ}$$ ma swój wierzchołek na środku więc jest kątem środkowym."
              onComplete={() => handleStageComplete(2)}
              explanationImage="/steps-images/steps4000b.jpg"
            />
          </>
        )}

        {(completedStages.includes(2)) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wyznaczymy teraz kąt <InlineMath math="\alpha" />.
            </p>
            <ChoiceQuestion
              question="Jaka jest miara kąta $$\alpha$$?"
              choices={[
                { label: "\\alpha = 120^{\\circ}", value: "a" },
                { label: "\\alpha = 60^{\\circ}", value: "b" },
                { label: "\\alpha = 30^{\\circ}", value: "c" },
                { label: "\\alpha = 15^{\\circ}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Kąt środkowy jest dwa razy większy niż kąt wpisany który jest opart na tym samym łuku. Dzięki tej relacji możemy powiedzieć, że kąt $$\alpha$$ jest dwa razy mniejszy. Mamy więc $$\alpha = 30^{\circ}$$"
              onComplete={() => handleStageComplete(2)}
              explanationImage="/steps-images/steps4000c.png"
            />
          </>
        )}
        
        {completedStages.length === 3 && (
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
        )}
      </div>
    </div>
  );
};

export default Page;