import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono fragment wykresu funkcji kwadratowej{' '}
        <InlineMath math="f(x) = ax^2 + bx + c" />, której miejsca zerowe to:{' '}
        <InlineMath math="-3" /> i <InlineMath math="1" />. Współczynnik <InlineMath math="c" /> we
        wzorze funkcji <InlineMath math="f" /> jest równy
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-35-13.png"
          alt="Wykres funkcji kwadratowej"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="4" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Postać iloczynowa funkcji kwadratowej
      </h2>
      <p className="mb-2">
        Mając miejsca zerowe funkcji kwadratowej <InlineMath math="x_1 = -3" /> i{' '}
        <InlineMath math="x_2 = 1" />, możemy zapisać jej wzór w postaci iloczynowej:
      </p>
      <BlockMath math="f(x) = a(x - x_1)(x - x_2) = a(x + 3)(x - 1)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwinięcie postaci iloczynowej</h2>
      <p className="mb-2">Rozwijamy wzór funkcji do postaci ogólnej:</p>
      <BlockMath math="f(x) = a(x^2 + 2x - 3) = ax^2 + 2ax - 3a" />
      <p className="mb-2">
        Porównując z postacią ogólną <InlineMath math="f(x) = ax^2 + bx + c" />, widzimy, że:
      </p>
      <BlockMath math="c = -3a" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Wyznaczenie współczynnika <InlineMath math="a" />
      </h2>
      <p className="mb-2">
        Z wykresu odczytujemy punkt <InlineMath math="W = (-1, 4)" />, który jest wierzchołkiem
        paraboli. Podstawiamy współrzędne wierzchołka do wzoru funkcji:
      </p>
      <BlockMath math="f(-1) = a(-1)^2 + 2a(-1) - 3a = 4" />
      <BlockMath math="a - 2a - 3a = 4" />
      <BlockMath math="-4a = 4" />
      <BlockMath math="a = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 4: Obliczenie współczynnika <InlineMath math="c" />
      </h2>
      <p className="mb-2">
        Podstawiamy wartość <InlineMath math="a = -1" /> do wzoru na <InlineMath math="c" />:
      </p>
      <BlockMath math="c = -3a = -3(-1) = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Współczynnik <InlineMath math="c" /> jest równy <InlineMath math="3" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
