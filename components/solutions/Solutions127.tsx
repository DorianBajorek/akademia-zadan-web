import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiony jest fragment paraboli będącej wykresem funkcji kwadratowej{' '}
        <InlineMath math="f" />. Wierzchołkiem tej paraboli jest punkt{' '}
        <InlineMath math="W = (2, -4)" />. Liczby <InlineMath math="0" /> i <InlineMath math="4" />{' '}
        to miejsca zerowe funkcji <InlineMath math="f" />. Największa wartość funkcji{' '}
        <InlineMath math="f" /> w przedziale <InlineMath math="\langle 1, 4 \rangle" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="0" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie wzoru funkcji kwadratowej
      </h2>
      <p className="mb-2">
        Mając miejsca zerowe <InlineMath math="x_1 = 0" /> i <InlineMath math="x_2 = 4" />, funkcję
        można zapisać w postaci iloczynowej:
      </p>
      <BlockMath math="f(x) = a(x - 0)(x - 4) = ax(x - 4)" />
      <p className="mb-2">
        Współczynnik <InlineMath math="a" /> wyznaczamy korzystając z wierzchołka{' '}
        <InlineMath math="W = (2, -4)" />:
      </p>
      <BlockMath math="f(2) = a \cdot 2 \cdot (2 - 4) = -4" />
      <BlockMath math="a \cdot 2 \cdot (-2) = -4" />
      <BlockMath math="-4a = -4 \implies a = 1" />
      <p className="mb-2">Ostateczny wzór funkcji:</p>
      <BlockMath math="f(x) = x(x - 4) = x^2 - 4x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Analiza przedziału <InlineMath math="\langle 1, 4 \rangle" />
      </h2>
      <p className="mb-2">
        W przedziale zamkniętym funkcja kwadratowa osiąga wartość największą na jednym z końców
        przedziału lub w wierzchołku (jeśli należy do przedziału).
      </p>
      <p className="mb-2">Obliczamy wartości funkcji w punktach:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Dla <InlineMath math="x = 1" />: <InlineMath math="f(1) = 1^2 - 4 \cdot 1 = -3" />
        </li>
        <li>
          Dla <InlineMath math="x = 4" />: <InlineMath math="f(4) = 4^2 - 4 \cdot 4 = 0" />
        </li>
        <li>
          Dla <InlineMath math="x = 2" /> (wierzchołek): <InlineMath math="f(2) = -4" />
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wyznaczenie wartości największej</h2>
      <p className="mb-2">Porównując otrzymane wartości:</p>
      <BlockMath math="f(1) = -3, \quad f(2) = -4, \quad f(4) = 0" />
      <p className="mb-2">
        Największa wartość w przedziale <InlineMath math="\langle 1, 4 \rangle" /> to{' '}
        <InlineMath math="0" />, osiągana dla <InlineMath math="x = 4" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Największa wartość funkcji w podanym przedziale wynosi <InlineMath math="0" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
