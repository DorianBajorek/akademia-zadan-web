import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wykresem funkcji kwadratowej <InlineMath math="f(x) = 3x^2 + bx + c" /> jest parabola o
        wierzchołku w punkcie <InlineMath math="W = (-3, 2)" />. Wzór tej funkcji w postaci
        kanonicznej to:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="f(x) = 3(x - 3)^2 + 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="f(x) = 3(x + 3)^2 + 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="f(x) = (x - 3)^2 + 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="f(x) = (x + 3)^2 + 2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Postać kanoniczna funkcji kwadratowej
      </h2>
      <p className="mb-2">
        Postać kanoniczna funkcji kwadratowej o współczynniku <InlineMath math="a" /> i wierzchołku
        w punkcie <InlineMath math="W = (p, q)" /> dana jest wzorem:
      </p>
      <BlockMath math="f(x) = a(x - p)^2 + q" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie danych</h2>
      <p className="mb-2">Z treści zadania mamy:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          współczynnik <InlineMath math="a = 3" />,
        </li>
        <li>
          wierzchołek <InlineMath math="W = (-3, 2)" />, czyli <InlineMath math="p = -3" /> i{' '}
          <InlineMath math="q = 2" />.
        </li>
      </ul>
      <p className="mb-2">Podstawiamy te wartości do wzoru:</p>
      <BlockMath math="f(x) = 3(x - (-3))^2 + 2 = 3(x + 3)^2 + 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">Po podstawieniu otrzymujemy postać kanoniczną:</p>
      <BlockMath math="f(x) = 3(x + 3)^2 + 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to <InlineMath math="f(x) = 3(x + 3)^2 + 2" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
