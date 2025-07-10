import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Przekątna sześcianu ma długość <InlineMath math="4\sqrt{3}" />. Pole powierzchni tego
        sześcianu jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> 96
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="24\sqrt{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> 192
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="16\sqrt{3}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Związek między przekątną a krawędzią sześcianu
      </h2>
      <p className="mb-2">
        Przekątna sześcianu <InlineMath math="d" /> jest związana z długością krawędzi{' '}
        <InlineMath math="a" /> wzorem:
      </p>
      <BlockMath math="d = a\sqrt{3}" />
      <p className="mb-2">Podstawiamy znaną przekątną:</p>
      <BlockMath math="4\sqrt{3} = a\sqrt{3}" />
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć długość krawędzi <InlineMath math="a" />:
      </p>
      <BlockMath math="a = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie pola powierzchni sześcianu
      </h2>
      <p className="mb-2">Pole powierzchni sześcianu obliczamy ze wzoru:</p>
      <BlockMath math="P = 6a^2" />
      <p className="mb-2">
        Podstawiamy długość krawędzi <InlineMath math="a = 4" />:
      </p>
      <BlockMath math="P = 6 \cdot 4^2 = 6 \cdot 16 = 96" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole powierzchni tego sześcianu jest równe <InlineMath math="96" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
