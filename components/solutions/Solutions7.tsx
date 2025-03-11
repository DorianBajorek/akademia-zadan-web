import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution7 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja liniowa <InlineMath math="f" /> jest określona wzorem:  
        <BlockMath math="f(x) = (-2k + 3)x + k - 1" />
        gdzie <InlineMath math="k \in \mathbb{R}" />. Funkcja <InlineMath math="f" /> jest malejąca dla każdej liczby <InlineMath math="k" /> należącej do przedziału:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(\infty, 1)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(\infty, -\frac{3}{2})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(1, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(\frac{3}{2}, +\infty)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek malejącej funkcji liniowej</h2>
      <p className="mb-2">
        Funkcja liniowa <InlineMath math="f(x) = ax + b" /> jest malejąca, gdy współczynnik kierunkowy <InlineMath math="a" /> jest ujemny. W naszym przypadku:
      </p>
      <BlockMath math="a = -2k + 3" />
      <p className="mb-2">
        Aby funkcja była malejąca, musi zachodzić:
      </p>
      <BlockMath math="-2k + 3 < 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie nierówności</h2>
      <p className="mb-2">
        Rozwiązujemy nierówność:
      </p>
      <BlockMath math="-2k + 3 < 0" />
      <p className="mb-2">
        Odejmujemy 3 od obu stron:
      </p>
      <BlockMath math="-2k < -3" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="-2" /> (pamiętając o zmianie znaku nierówności):
      </p>
      <BlockMath math="k > \frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Funkcja <InlineMath math="f" /> jest malejąca dla każdej liczby <InlineMath math="k" /> należącej do przedziału <InlineMath math="(\frac{3}{2}, +\infty)" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution7;