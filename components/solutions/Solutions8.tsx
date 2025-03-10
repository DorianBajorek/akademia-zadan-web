import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution8 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Rozwiązanie zadania 8</h1>
      
      <div className="text-lg mb-4">
        Dany jest równoległobok o bokach długości <InlineMath math="3" /> i <InlineMath math="4" /> oraz o kącie między nimi o mierze <InlineMath math="120^\circ" />. Pole tego równoległoboku jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="12" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="12\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="6" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="6\sqrt{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na pole równoległoboku</h2>
      <p className="mb-2">
        Pole równoległoboku można obliczyć za pomocą wzoru:
      </p>
      <BlockMath math="P = a \cdot b \cdot \sin(\theta)" />
      <p className="mb-2">
        Gdzie:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><InlineMath math="a" /> i <InlineMath math="b" /> to długości boków równoległoboku,</li>
        <li><InlineMath math="\theta" /> to kąt między tymi bokami.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie danych</h2>
      <p className="mb-2">
        Dla danego równoległoboku:
      </p>
      <BlockMath math="a = 3, \quad b = 4, \quad \theta = 120^\circ" />
      <p className="mb-2">
        Podstawiamy do wzoru:
      </p>
      <BlockMath math="P = 3 \cdot 4 \cdot \sin(120^\circ)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie sinusa kąta 120°</h2>
      <p className="mb-2">
        Wartość <InlineMath math="\sin(120^\circ)" /> wynosi:
      </p>
      <BlockMath math="\sin(120^\circ) = \sin(180^\circ - 60^\circ) = \sin(60^\circ) = \frac{\sqrt{3}}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie pola</h2>
      <p className="mb-2">
        Podstawiamy wartość sinusa do wzoru:
      </p>
      <BlockMath math="P = 3 \cdot 4 \cdot \frac{\sqrt{3}}{2} = 6\sqrt{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole równoległoboku wynosi <InlineMath math="6\sqrt{3}" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution8;