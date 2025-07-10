import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W pudełku jest <InlineMath math="50" /> kuponów, wśród których jest <InlineMath math="15" />{' '}
        kuponów przegrywających, a pozostałe kupony są wygrywające. Z tego pudełka w sposób losowy
        wyciągamy jeden kupon. Prawdopodobieństwo zdarzenia polegającego na tym, że wyciągniemy
        kupon wygrywający, jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{15}{50}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{50}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{15}{50}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{35}{50}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Określenie liczby kuponów wygrywających
      </h2>
      <p className="mb-2">
        W pudełku jest <InlineMath math="50" /> kuponów, w tym <InlineMath math="15" /> kuponów
        przegrywających. Zatem liczba kuponów wygrywających wynosi:
      </p>
      <BlockMath math="50 - 15 = 35" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie prawdopodobieństwa</h2>
      <p className="mb-2">
        Prawdopodobieństwo zdarzenia \( A \) polegającego na wyciągnięciu kuponu wygrywającego jest
        dane wzorem:
      </p>
      <BlockMath math="P(A) = \frac{\text{liczba kuponów wygrywających}}{\text{liczba wszystkich kuponów}}" />
      <p className="mb-2">Podstawiamy wartości:</p>
      <BlockMath math="P(A) = \frac{35}{50}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyniku</h2>
      <p className="mb-2">Ułamek można uprościć, dzieląc licznik i mianownik przez 5:</p>
      <BlockMath math="\frac{35}{50} = \frac{7}{10}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawdopodobieństwo wyciągnięcia kuponu wygrywającego wynosi{' '}
        <InlineMath math="\frac{35}{50}" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
