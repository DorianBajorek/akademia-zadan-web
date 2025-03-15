import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dane są dwa okręgi: okrąg o środku w punkcie <InlineMath math="O" /> i promieniu 5 oraz okrąg o środku w punkcie <InlineMath math="P" /> i promieniu 3. Odcinek <InlineMath math="OP" /> ma długość 16. Prosta <InlineMath math="AB" /> jest styczna do tych okręgów w punktach <InlineMath math="A" /> i <InlineMath math="B" />. Ponadto prosta <InlineMath math="AB" /> przecina odcinek <InlineMath math="OP" /> w punkcie <InlineMath math="K" /> (zobacz rysunek). Wtedy:
      </div>

      <div className="mb-6 flex justify-center">
        <img src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-12_22-08-01.png" className="rounded-lg" 
            width={300} 
            height={300}  />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="|OK| = 6" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="|OK| = 8" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="|OK| = 10" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="|OK| = 12" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zastosowanie twierdzenia o stycznych</h2>
      <p className="mb-2">
        Prosta <InlineMath math="AB" /> jest styczna do obu okręgów, więc odległość od punktu <InlineMath math="K" /> do każdego z okręgów jest równa długości stycznej. Możemy użyć twierdzenia o stycznych, aby znaleźć długość <InlineMath math="|OK|" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości odcinka</h2>
      <p className="mb-2">
        Niech <InlineMath math="|OK| = x" />. Wtedy <InlineMath math="|PK| = 16 - x" />. Z twierdzenia o stycznych mamy:
      </p>
      <BlockMath math="\frac{x}{16 - x} = \frac{5}{3}" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="3x = 5(16 - x)" />
      <BlockMath math="3x = 80 - 5x" />
      <BlockMath math="8x = 80" />
      <BlockMath math="x = 10" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość odcinka <InlineMath math="|OK|" /> wynosi <InlineMath math="10" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;