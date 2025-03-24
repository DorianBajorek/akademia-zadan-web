import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W zestawie <InlineMath math="\underbrace{2, 2, 2, \ldots, 2}_{m \text{ liczb}}, \underbrace{4, 4, 4, \ldots, 4}_{m \text{ liczb}}" /> jest <InlineMath math="2m" /> liczb (<InlineMath math="m \geq 1" />), w tym <InlineMath math="m" /> liczb <InlineMath math="2" /> i <InlineMath math="m" /> liczb <InlineMath math="4" />. Odchylenie standardowe tego zestawu liczb jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{1}{\sqrt{2}}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sqrt{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie średniej arytmetycznej</h2>
      <p className="mb-2">
        Średnia arytmetyczna zestawu liczb jest dana wzorem:
      </p>
      <BlockMath math="\mu = \frac{\sum x_i}{n}" />
      <p className="mb-2">
        W naszym przypadku:
      </p>
      <BlockMath math="\mu = \frac{m \cdot 2 + m \cdot 4}{2m} = \frac{2m + 4m}{2m} = \frac{6m}{2m} = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie wariancji</h2>
      <p className="mb-2">
        Wariancja jest średnią kwadratów odchyleń od średniej:
      </p>
      <BlockMath math="\sigma^2 = \frac{\sum (x_i - \mu)^2}{n}" />
      <p className="mb-2">
        Dla naszego zestawu:
      </p>
      <BlockMath math="\sigma^2 = \frac{m \cdot (2 - 3)^2 + m \cdot (4 - 3)^2}{2m} = \frac{m \cdot 1 + m \cdot 1}{2m} = \frac{2m}{2m} = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie odchylenia standardowego</h2>
      <p className="mb-2">
        Odchylenie standardowe jest pierwiastkiem kwadratowym z wariancji:
      </p>
      <BlockMath math="\sigma = \sqrt{\sigma^2} = \sqrt{1} = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Odchylenie standardowe tego zestawu liczb jest równe <InlineMath math="1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;