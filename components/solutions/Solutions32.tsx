import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dodatnie liczby <InlineMath math="x" /> i <InlineMath math="y" /> spełniają warunek <InlineMath math="2x = 3y" />. Wynika stąd, że wartość wyrażenia  
        <BlockMath math="\frac{x^2 + y^2}{xy}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{2}{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{13}{6}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{6}{13}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{3}{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyrażenie jednej zmiennej przez drugą</h2>
      <p className="mb-2">
        Z warunku <InlineMath math="2x = 3y" /> możemy wyrazić <InlineMath math="x" /> przez <InlineMath math="y" />:
      </p>
      <BlockMath math="x = \frac{3}{2}y" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = \frac{3}{2}y" /> do wyrażenia <InlineMath math="\frac{x^2 + y^2}{xy}" />:
      </p>
      <BlockMath math="\frac{\left(\frac{3}{2}y\right)^2 + y^2}{\left(\frac{3}{2}y\right) \cdot y}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Upraszczamy wyrażenie:
      </p>
      <BlockMath math="\frac{\frac{9}{4}y^2 + y^2}{\frac{3}{2}y^2} = \frac{\frac{13}{4}y^2}{\frac{3}{2}y^2}" />
      <BlockMath math="= \frac{13}{4} \div \frac{3}{2} = \frac{13}{4} \cdot \frac{2}{3} = \frac{13}{6}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia <InlineMath math="\frac{x^2 + y^2}{xy}" /> jest równa <InlineMath math="\frac{13}{6}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;