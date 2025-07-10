import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja kwadratowa <InlineMath math="f" /> określona wzorem{' '}
        <InlineMath math="f(x) = -2(x+1)(x-3)" /> jest malejąca w przedziale:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="[1, +\infty)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-\infty, 1]" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="(-\infty, -8]" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="[-8, +\infty)" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Postać iloczynowa funkcji kwadratowej
      </h2>
      <p className="mb-2">Funkcja dana jest w postaci iloczynowej:</p>
      <BlockMath math="f(x) = -2(x+1)(x-3)" />
      <p className="mb-2">
        Miejsca zerowe funkcji to <InlineMath math="x = -1" /> i <InlineMath math="x = 3" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie wierzchołka paraboli</h2>
      <p className="mb-2">
        Współrzędna <InlineMath math="x" /> wierzchołka paraboli znajduje się dokładnie w środku
        między miejscami zerowymi:
      </p>
      <BlockMath math="x_w = \frac{-1 + 3}{2} = 1" />
      <p className="mb-2">
        Ponieważ współczynnik przy <InlineMath math="x^2" /> jest ujemny (
        <InlineMath math="a = -2" />
        ), parabola jest skierowana ramionami w dół.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Monotoniczność funkcji</h2>
      <p className="mb-2">Dla funkcji kwadratowej skierowanej ramionami w dół:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          Funkcja jest rosnąca w przedziale <InlineMath math="(-\infty, x_w]" />
        </li>
        <li>
          Funkcja jest malejąca w przedziale <InlineMath math="[x_w, +\infty)" />
        </li>
      </ul>
      <p className="mb-2">
        W naszym przypadku <InlineMath math="x_w = 1" />, więc:
      </p>
      <BlockMath math="f(x) \text{ jest malejąca w } [1, +\infty)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Funkcja jest malejąca w przedziale <InlineMath math="[1, +\infty)" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
