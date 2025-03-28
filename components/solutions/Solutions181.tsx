import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono fragment wykresu funkcji wykładniczej <InlineMath math="f" /> określonej wzorem <InlineMath math="f(x) = a^x" />. Punkt <InlineMath math="A = (1, 2)" /> należy do tego wykresu funkcji. Podstawa <InlineMath math="a" /> potęgi jest równa
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-36-07.png" 
            alt="Wykres funkcji wykładniczej" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="-\frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Podstawienie punktu do wzoru funkcji</h2>
      <p className="mb-2">
        Skoro punkt <InlineMath math="A = (1, 2)" /> należy do wykresu funkcji <InlineMath math="f(x) = a^x" />, to spełnia on równanie:
      </p>
      <BlockMath math="2 = a^1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Z równania <InlineMath math="2 = a^1" /> wynika, że:
      </p>
      <BlockMath math="a = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja założeń</h2>
      <p className="mb-2">
        Dla funkcji wykładniczej <InlineMath math="f(x) = a^x" /> podstawa <InlineMath math="a" /> musi spełniać warunki:
      </p>
      <BlockMath math="a > 0 \quad \text{oraz} \quad a \neq 1" />
      <p className="mb-2">
        Wartość <InlineMath math="a = 2" /> spełnia te warunki, ponieważ <InlineMath math="2 > 0" /> i <InlineMath math="2 \neq 1" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Podstawa <InlineMath math="a" /> jest równa <InlineMath math="2" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;