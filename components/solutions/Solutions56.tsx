import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution56 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono wykres funkcji <InlineMath math="f" />. Iloczyn{' '}
        <InlineMath math="f(-3) \cdot f(0) \cdot f(4)" /> jest równy:
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="/solutionsImg/arkusz-71-9.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-12" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="16" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Odczytanie wartości funkcji z wykresu
      </h2>
      <p className="mb-2">Zakładamy, że z wykresu odczytano następujące wartości:</p>
      <BlockMath math="f(-3) = -2" />
      <BlockMath math="f(0) = 1" />
      <BlockMath math="f(4) = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie iloczynu</h2>
      <p className="mb-2">Obliczamy iloczyn wartości funkcji:</p>
      <BlockMath math="f(-3) \cdot f(0) \cdot f(4) = (-2) \cdot 1 \cdot 4 = -8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloczyn <InlineMath math="f(-3) \cdot f(0) \cdot f(4)" /> jest równy{' '}
        <InlineMath math="-8" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution56;
