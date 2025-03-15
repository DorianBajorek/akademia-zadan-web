import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution6 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest wielomian <InlineMath math="W(x) = 3x^3 + 6x^2 + 9x" />. Oceń prawdziwość podanych zdań:
      </div>
      <h4 className="text-xl font-semibold mt-4 mb-2">Pytanie 1: Wielomian <InlineMath math="W" /> jest iloczynem wielomianów <InlineMath math="F(x) = 3x" /> i <InlineMath math="G(x) = x^2 + 2x + 3" />.</h4>
      <h2 className="text-xl font-semibold mt-4 mb-2">Pytanie 2: Liczba <InlineMath math="-1" /> jest rozwiązaniem równania <InlineMath math="W(x) = 0" />.</h2>


      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> 1. Prawda, 2. Prawda</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> 1. Prawda, 2. Fałsz</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> 1. Fałsz, 2. Prawda</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> 1. Fałsz, 2. Fałsz</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Pytanie 1: Wielomian <InlineMath math="W" /> jest iloczynem wielomianów <InlineMath math="F(x) = 3x" /> i <InlineMath math="G(x) = x^2 + 2x + 3" />.</h2>
      <p className="mb-2">
        Sprawdzamy, czy <InlineMath math="W(x) = F(x) \cdot G(x)" />:
      </p>
      <BlockMath math="F(x) \cdot G(x) = 3x \cdot (x^2 + 2x + 3) = 3x^3 + 6x^2 + 9x" />
      <p className="mb-2">
        To dokładnie równa się <InlineMath math="W(x)" />, więc zdanie jest <strong>prawdziwe</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Pytanie 2: Liczba <InlineMath math="-1" /> jest rozwiązaniem równania <InlineMath math="W(x) = 0" />.</h2>
      <p className="mb-2">
        Sprawdzamy, czy <InlineMath math="W(-1) = 0" />:
      </p>
      <BlockMath math="W(-1) = 3(-1)^3 + 6(-1)^2 + 9(-1) = -3 + 6 - 9 = -6" />
      <p className="mb-2">
        Ponieważ <InlineMath math="W(-1) \neq 0" />, liczba <InlineMath math="-1" /> nie jest rozwiązaniem równania. Zdanie jest <strong>fałszywe</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Odpowiedź to <strong>B</strong>: 1. Prawda, 2. Fałsz.
      </p>
    </div>
  );
};

export default Solution6;