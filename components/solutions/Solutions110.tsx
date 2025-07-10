import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Prosta przechodząca przez punkty <InlineMath math="A = (3, -2)" /> i{' '}
        <InlineMath math="B = (-1, 6)" /> jest określona równaniem:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="y = -2x + 4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="y = -2x - 8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="y = 2x + 8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="y = 2x - 4" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Obliczenie współczynnika kierunkowego (a)
      </h2>
      <p className="mb-2">
        Współczynnik kierunkowy <InlineMath math="a" /> prostej przechodzącej przez punkty{' '}
        <InlineMath math="A = (x_1, y_1)" /> i <InlineMath math="B = (x_2, y_2)" /> obliczamy ze
        wzoru:
      </p>
      <BlockMath math="a = \frac{y_2 - y_1}{x_2 - x_1}" />
      <p className="mb-2">
        Podstawiamy współrzędne punktów <InlineMath math="A = (3, -2)" /> i{' '}
        <InlineMath math="B = (-1, 6)" />:
      </p>
      <BlockMath math="a = \frac{6 - (-2)}{-1 - 3} = \frac{8}{-4} = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie równania prostej</h2>
      <p className="mb-2">
        Równanie prostej w postaci kierunkowej to <InlineMath math="y = ax + b" />. Znamy już
        współczynnik <InlineMath math="a = -2" />. Aby wyznaczyć <InlineMath math="b" />,
        podstawiamy współrzędne jednego z punktów, np. <InlineMath math="A = (3, -2)" />:
      </p>
      <BlockMath math="-2 = -2 \cdot 3 + b" />
      <BlockMath math="-2 = -6 + b" />
      <BlockMath math="b = -2 + 6 = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Zapisanie równania prostej</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="a = -2" /> i <InlineMath math="b = 4" /> do równania:
      </p>
      <BlockMath math="y = -2x + 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie prostej to <InlineMath math="y = -2x + 4" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
