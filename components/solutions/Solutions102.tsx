import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie <InlineMath math="x(x - 2) = (x - 2)^2" /> w zbiorze liczb rzeczywistych
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> nie ma rozwiązań
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> ma dokładnie jedno rozwiązanie:{' '}
            <InlineMath math="x = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> ma dokładnie jedno rozwiązanie:{' '}
            <InlineMath math="x = 0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> ma dwa różne rozwiązania: <InlineMath math="x = 1" /> i{' '}
            <InlineMath math="x = 2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przekształcenie równania</h2>
      <p className="mb-2">Rozpoczynamy od przeniesienia wszystkich wyrazów na jedną stronę:</p>
      <BlockMath math="x(x - 2) - (x - 2)^2 = 0" />
      <BlockMath math="(x - 2)(x - (x - 2)) = 0" />
      <BlockMath math="(x - 2)(2) = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Otrzymujemy proste równanie:</p>
      <BlockMath math="2(x - 2) = 0" />
      <BlockMath math="x - 2 = 0" />
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja rozwiązania</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 2" /> do oryginalnego równania:
      </p>
      <BlockMath math="2(2 - 2) = (2 - 2)^2" />
      <BlockMath math="0 = 0" />
      <p className="mb-2">Równanie jest spełnione.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma dokładnie jedno rozwiązanie: <InlineMath math="x = 2" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
