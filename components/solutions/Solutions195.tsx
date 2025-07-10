import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ze zbioru dwudziestu czterech kolejnych liczb naturalnych od <InlineMath math="1" /> do{' '}
        <InlineMath math="24" /> losujemy jedną liczbę. Niech <InlineMath math="A" /> oznacza
        zdarzenie, że wylosowana liczba będzie dzielnikiem liczby <InlineMath math="24" />. Wtedy
        prawdopodobieństwo zdarzenia <InlineMath math="A" /> jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{4}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{1}{8}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{1}{6}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie dzielników liczby 24</h2>
      <p className="mb-2">
        Dzielniki liczby <InlineMath math="24" /> to:
      </p>
      <BlockMath math="1, 2, 3, 4, 6, 8, 12, 24" />
      <p className="mb-2">Jest ich 8.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie prawdopodobieństwa</h2>
      <p className="mb-2">
        Prawdopodobieństwo zdarzenia <InlineMath math="A" /> jest dane wzorem:
      </p>
      <BlockMath math="P(A) = \frac{\text{liczba dzielników liczby } 24}{\text{liczba wszystkich możliwych wyników}}" />
      <p className="mb-2">Podstawiamy wartości:</p>
      <BlockMath math="P(A) = \frac{8}{24} = \frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawdopodobieństwo zdarzenia <InlineMath math="A" /> jest równe{' '}
        <InlineMath math="\frac{1}{3}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
