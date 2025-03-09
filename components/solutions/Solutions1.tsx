import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution1 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Rozwiązanie zadania 1</h1>
      
      <p className="text-lg mb-4">
        Obliczmy wartość logarytmu:  
        <BlockMath math="\log_{\sqrt{3}} 9" />
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Oznaczenie równania</h2>
      <p className="mb-2">
        Oznaczmy:
      </p>
      <BlockMath math="\sqrt{3}^x = 9" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprowadzenie do tej samej podstawy</h2>
      <p className="mb-2">
        Zapisujemy obie strony równania jako potęgi liczby 3:
      </p>
      <BlockMath math="\sqrt{3} = 3^{\frac{1}{2}}, \quad 9 = 3^2" /> {/* Ułamki zapisane jako \frac{}{} */}
      <p className="mb-2">
        Podstawiając do równania:
      </p>
      <BlockMath math="(3^{\frac{1}{2}})^x = 3^2" /> {/* Ułamki zapisane jako \frac{}{} */}

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie równania</h2>
      <p className="mb-2">
        Korzystając z własności potęg:
      </p>
      <BlockMath math="3^{\frac{1}{2} \cdot x} = 3^2" /> {/* Ułamki zapisane jako \frac{}{} */}
      <p className="mb-2">
        Ponieważ podstawy są równe, możemy porównać wykładniki:
      </p>
      <BlockMath math="\frac{1}{2} \cdot x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie równania</h2>
      <p className="mb-2">
        Mnożymy obie strony równania przez 2:
      </p>
      <BlockMath math="x = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        <InlineMath math="\log_{\sqrt{3}} 9 = 4" />
      </p>
    </div>
  );
};

export default Solution1;