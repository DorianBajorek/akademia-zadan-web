import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Pole powierzchni całkowitej graniastosłupa prawidłowego czworokątnego, w którym wysokość
        jest <InlineMath math="3" /> razy dłuższa od krawędzi podstawy, jest równe{' '}
        <InlineMath math="140" />. Zatem krawędź podstawy tego graniastosłupa jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt{10}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="3\sqrt{10}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{42}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3\sqrt{42}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Oznaczenia</h2>
      <p className="mb-2">Oznaczmy:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <InlineMath math="a" /> — długość krawędzi podstawy,
        </li>
        <li>
          <InlineMath math="h = 3a" /> — wysokość graniastosłupa.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Pole powierzchni całkowitej</h2>
      <p className="mb-2">
        Pole powierzchni całkowitej graniastosłupa prawidłowego czworokątnego składa się z:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>dwóch pól podstaw (kwadratów),</li>
        <li>czterech pól ścian bocznych (prostokątów).</li>
      </ul>
      <p className="mb-2">Zatem:</p>
      <BlockMath math="P_c = 2 \cdot a^2 + 4 \cdot a \cdot h" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="h = 3a" />:
      </p>
      <BlockMath math="P_c = 2a^2 + 4 \cdot a \cdot 3a = 2a^2 + 12a^2 = 14a^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Z treści zadania wiemy, że <InlineMath math="P_c = 140" />:
      </p>
      <BlockMath math="14a^2 = 140" />
      <p className="mb-2">Dzielimy obie strony przez 14:</p>
      <BlockMath math="a^2 = 10" />
      <p className="mb-2">
        Obliczamy <InlineMath math="a" />:
      </p>
      <BlockMath math="a = \sqrt{10}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Krawędź podstawy tego graniastosłupa jest równa <InlineMath math="\sqrt{10}" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
