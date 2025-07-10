import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W ciągu arytmetycznym <InlineMath math="(a_n)" />, określonym dla{' '}
        <InlineMath math="n \geq 1" />, dane są: <InlineMath math="a_1 = 5" />,{' '}
        <InlineMath math="a_2 = 11" />. Wtedy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a_{14} = 71" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a_{12} = 71" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a_{11} = 71" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a_{10} = 71" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie różnicy ciągu</h2>
      <p className="mb-2">
        W ciągu arytmetycznym różnica między kolejnymi wyrazami jest stała i oznaczamy ją przez{' '}
        <InlineMath math="r" />. Mamy:
      </p>
      <BlockMath math="a_2 = a_1 + r" />
      <p className="mb-2">Podstawiamy dane:</p>
      <BlockMath math="11 = 5 + r" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="r = 6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wzór na n -ty wyraz ciągu</h2>
      <p className="mb-2">Wzór na n -ty wyraz ciągu arytmetycznego jest dany wzorem:</p>
      <BlockMath math="a_n = a_1 + (n - 1) \cdot r" />
      <p className="mb-2">Podstawiamy znane wartości:</p>
      <BlockMath math="a_n = 5 + (n - 1) \cdot 6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Obliczenie wyrazu <InlineMath math="a_{12}" />
      </h2>
      <p className="mb-2">
        Chcemy sprawdzić, dla którego wyrazu <InlineMath math="a_{12} = 71" /> . Podstawiamy do
        wzoru:
      </p>
      <BlockMath math="71 = 5 + (n - 1) \cdot 6" />
      <p className="mb-2">Odejmujemy 5 od obu stron:</p>
      <BlockMath math="66 = (n - 1) \cdot 6" />
      <p className="mb-2">Dzielimy obie strony przez 6:</p>
      <BlockMath math="n - 1 = 11" />
      <p className="mb-2">Dodajemy 1 do obu stron:</p>
      <BlockMath math="n = 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Wnioski</h2>
      <p className="mb-2">
        Wyraz <InlineMath math="a_{12}" /> jest równy 71.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to <InlineMath math="a_{12} = 71" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
