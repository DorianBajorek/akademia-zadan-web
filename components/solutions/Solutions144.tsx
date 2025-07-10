import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\log_{\sqrt{3}} 3" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Zapisanie logarytmu w postaci potęgowej
      </h2>
      <p className="mb-2">
        Logarytm <InlineMath math="\log_{\sqrt{3}} 3" /> oznacza, że szukamy wykładnika{' '}
        <InlineMath math="x" />, dla którego:
      </p>
      <BlockMath math="(\sqrt{3})^x = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Przekształcenie pierwiastka do postaci potęgi
      </h2>
      <p className="mb-2">
        Pierwiastek <InlineMath math="\sqrt{3}" /> można zapisać jako{' '}
        <InlineMath math="3^{\frac{1}{2}}" />. Zatem równanie przyjmuje postać:
      </p>
      <BlockMath math="(3^{\frac{1}{2}})^x = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie równania</h2>
      <p className="mb-2">
        Korzystając z własności potęg <InlineMath math="(a^m)^n = a^{m \cdot n}" />, otrzymujemy:
      </p>
      <BlockMath math="3^{\frac{1}{2} \cdot x} = 3^1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Porównanie wykładników</h2>
      <p className="mb-2">Ponieważ podstawy są równe, możemy porównać wykładniki:</p>
      <BlockMath math="\frac{1}{2} \cdot x = 1" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\log_{\sqrt{3}} 3" /> jest równa <InlineMath math="2" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
