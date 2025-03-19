import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest ciąg geometryczny <InlineMath math="(a_n)" />, określony dla <InlineMath math="n \geq 1" />. Wszystkie wyrazy tego ciągu są dodatnie i spełniony jest warunek:
        <BlockMath math="\frac{a_5}{a_3} = \frac{1}{9}" />
        Iloraz tego ciągu jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{\sqrt{3}}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sqrt{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie zależności między wyrazami</h2>
      <p className="mb-2">
        W ciągu geometrycznym każdy wyraz jest iloczynem poprzedniego wyrazu i ilorazu <InlineMath math="q" />. Mamy:
      </p>
      <BlockMath math="a_n = a_1 \cdot q^{n-1}" />
      <p className="mb-2">
        Zatem:
      </p>
      <BlockMath math="a_5 = a_1 \cdot q^{4}" />
      <BlockMath math="a_3 = a_1 \cdot q^{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do warunku</h2>
      <p className="mb-2">
        Z warunku zadania:
      </p>
      <BlockMath math="\frac{a_5}{a_3} = \frac{1}{9}" />
      <p className="mb-2">
        Podstawiamy wyrażenia na <InlineMath math="a_5" /> i <InlineMath math="a_3" />:
      </p>
      <BlockMath math="\frac{a_1 \cdot q^{4}}{a_1 \cdot q^{2}} = \frac{1}{9}" />
      <p className="mb-2">
        Upraszczamy:
      </p>
      <BlockMath math="q^{2} = \frac{1}{9}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="q^{2} = \frac{1}{9}" />
      <p className="mb-2">
        Ponieważ wszystkie wyrazy ciągu są dodatnie, iloraz <InlineMath math="q" /> również musi być dodatni. Zatem:
      </p>
      <BlockMath math="q = \frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloraz tego ciągu jest równy <InlineMath math="\frac{1}{3}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;