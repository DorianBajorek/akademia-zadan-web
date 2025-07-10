import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution5 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie:
        <BlockMath math="\frac{x+1}{(x+2)(x-3)} = 0" />w zbiorze liczb rzeczywistych.
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> nie ma rozwiązania
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> ma dokładnie jedno rozwiązanie: <InlineMath math="-1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> ma dokładnie dwa rozwiązania: <InlineMath math="-2" />{' '}
            oraz <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> ma dokładnie trzy rozwiązania: <InlineMath math="-1" />,{' '}
            <InlineMath math="-2" /> oraz <InlineMath math="3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie dziedziny</h2>
      <p className="mb-2">
        Dziedzina równania to zbiór liczb rzeczywistych, dla których mianownik nie jest równy zero.
        Mianownik równania to:
      </p>
      <BlockMath math="(x + 2)(x - 3)" />
      <p className="mb-2">Mianownik jest różny od zera, gdy:</p>
      <BlockMath math="x + 2 \neq 0 \quad \text{oraz} \quad x - 3 \neq 0" />
      <p className="mb-2">Rozwiązujemy nierówności:</p>
      <BlockMath math="x \neq -2 \quad \text{oraz} \quad x \neq 3" />
      <p className="mb-2">Zatem dziedzina równania to:</p>
      <BlockMath math="\mathbb{R} \setminus \{-2, 3\}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Mnożenie przez mianownik</h2>
      <p className="mb-2">Aby rozwiązać równanie, mnożymy obie strony przez mianownik:</p>
      <BlockMath math="\frac{x+1}{(x+2)(x-3)} \cdot (x+2)(x-3) = 0 \cdot (x+2)(x-3)" />
      <p className="mb-2">Po uproszczeniu otrzymujemy:</p>
      <BlockMath math="x + 1 = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="x + 1 = 0" />
      <p className="mb-2">Otrzymujemy:</p>
      <BlockMath math="x = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 4: Sprawdzenie rozwiązania w dziedzinie
      </h2>
      <p className="mb-2">
        Sprawdzamy, czy rozwiązanie <InlineMath math="x = -1" /> należy do dziedziny:
      </p>
      <BlockMath math="-1 \neq -2 \quad \text{oraz} \quad -1 \neq 3" />
      <p className="mb-2">
        Zatem <InlineMath math="x = -1" /> jest poprawnym rozwiązaniem.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma dokładnie jedno rozwiązanie: <InlineMath math="-1" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution5;
