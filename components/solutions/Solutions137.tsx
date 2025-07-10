import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiony jest fragment wykresu funkcji liniowej <InlineMath math="f" />. Na
        wykresie tej funkcji leżą punkty <InlineMath math="A = (0, 4)" /> i{' '}
        <InlineMath math="B = (2, 2)" />. Obrazem prostej <InlineMath math="AB" /> w symetrii
        względem początku układu współrzędnych jest wykres funkcji <InlineMath math="g" />{' '}
        określonej wzorem
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="g(x) = x + 4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="g(x) = x - 4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="g(x) = -x - 4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="g(x) = -x + 4" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_22-06-19.png"
          alt="Wykres funkcji f"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie wzoru funkcji f</h2>
      <p className="mb-2">
        Funkcja <InlineMath math="f" /> jest liniowa i przechodzi przez punkty{' '}
        <InlineMath math="A = (0, 4)" /> i <InlineMath math="B = (2, 2)" />. Jej wzór to:
      </p>
      <BlockMath math="f(x) = ax + b" />
      <p className="mb-2">
        Podstawiamy punkt <InlineMath math="A" />:
      </p>
      <BlockMath math="4 = a \cdot 0 + b \implies b = 4" />
      <p className="mb-2">
        Podstawiamy punkt <InlineMath math="B" />:
      </p>
      <BlockMath math="2 = a \cdot 2 + 4 \implies 2a = -2 \implies a = -1" />
      <BlockMath math="f(x) = -x + 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Symetria względem początku układu</h2>
      <p className="mb-2">
        Obrazem funkcji <InlineMath math="f" /> w symetrii względem początku układu jest funkcja{' '}
        <InlineMath math="g(x) = -f(-x)" />:
      </p>
      <BlockMath math="g(x) = -(-(-x) + 4) = -(x + 4) = -x - 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja odpowiedzi</h2>
      <p className="mb-2">
        Sprawdźmy poprawność przekształcenia dla punktu <InlineMath math="A" />:
      </p>
      <BlockMath math="A' = (0, -4)" />
      <BlockMath math="g(0) = -0 - 4 = -4" />
      <p className="mb-2">
        Dla punktu <InlineMath math="B" />:
      </p>
      <BlockMath math="B' = (-2, -2)" />
      <BlockMath math="g(-2) = -(-2) - 4 = 2 - 4 = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Obrazem prostej <InlineMath math="AB" /> jest wykres funkcji{' '}
        <InlineMath math="g(x) = -x - 4" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
