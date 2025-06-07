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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Funkcja ostatniej cyfry kwadratu</h2>
        <p className="text-lg text-gray-800 mt-4">
          Funkcja <InlineMath math="f" />, określona dla wszystkich liczb całkowitych dodatnich, przyporządkowuje liczbie <InlineMath math="x" /> ostatnią cyfrę jej kwadratu. Określ wielkość zbioru wartości funkcji <InlineMath math="f" />.
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Co to jest zbiór wartości funkcji?"
              choices={[
                { label: "\\text{Zbiór wszystkich argumentów funkcji}", value: "a" },
                { label: "\\text{Zbiór wszystkich wyników funkcji dla jej argumentów}", value: "b" },
                { label: "\\text{Zbiór wszystkich możliwych par (argument, wartość)}", value: "c" },
                { label: "\\text{Zbiór wszystkich funkcji o podobnych właściwościach}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: Zbiór wszystkich wyników funkcji dla jej argumentów. <br>Zbiór wartości funkcji to wszystkie możliwe wyniki, które funkcja może zwrócić dla różnych argumentów z jej dziedziny."
              onComplete={() => handleStageComplete(0)}
            />
          </>
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <>
            <ChoiceQuestion
              question="Jakie mogą być ostatnie cyfry kwadratów liczb całkowitych dodatnich?"
              choices={[
                { label: "0, 1, 4, 5, 6, 9", value: "a" },
                { label: "0, 1, 2, 4, 5, 6, 7, 8, 9", value: "b" },
                { label: "1, 4, 9", value: "c" },
                { label: "0, 2, 4, 6, 8", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne odpowiedź to $$0, 1, 4, 5, 6, 9$$. <br>Można to sprawdzić obliczając kwadraty liczb od $$0$$ do $$9$$ i obserwując ich ostatnie cyfry.
              <br> $$0^2 = 0$$ <br>
              $$1^2 = 1$$ <br>
              $$2^2 = 4$$ <br>
              $$3^2 = 9$$ <br>
              $$4^2 = 16$$ <br>
              $$5^2 = 25$$ <br>
              $$6^2 = 36$$ <br>
              $$7^2 = 49$$ <br>
              $$8^2 = 64$$ <br>
              $$9^2 = 81$$ <br>
                <br>Ostatnie cyfry to: $$0, 1, 4, 9, 6, 5, 6, 9, 4, 1$$. <br>"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Ile różnych wartości zawiera zbiór wartości funkcji f?"
              choices={[
                { label: "6", value: "a" },
                { label: "9", value: "b" },
                { label: "3", value: "c" },
                { label: "5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$6$$. <br>Zbiór wartości to $${0, 1, 4, 5, 6, 9}$$, który zawiera $$6$$ różnych elementów."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x) = \text{ostatnia cyfra } x^2"
            steps={[
              { step: "\\text{Definicja: Zbiór wartości funkcji to wszystkie możliwe wyniki funkcji}" },
              { step: "\\text{Sprawdź ostatnie cyfry kwadratów liczb 0-9:}" },
              { step: "0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36, 7^2=49, 8^2=64, 9^2=81" },
              { step: "\\text{Ostatnie cyfry: } 0,1,4,9,6,5,6,9,4,1" },
              { step: "\\text{Unikalne wartości: } \\{0,1,4,5,6,9\\}" },
              { step: "\\text{Liczba wartości: } 6" }
            ]}
            solutions={["\\text{Zbiór wartości} = {0,1,4,5,6,9}", "\\text{Liczba wartości} = 6"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;