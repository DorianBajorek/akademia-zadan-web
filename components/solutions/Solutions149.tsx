import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Cena roweru po obniżce o <InlineMath math="15\%" /> była równa <InlineMath math="850" /> zł. Przed obniżką ten rower kosztował:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="865,00" /> zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="850,15" /> zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="1000,00" /> zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="977,50" /> zł</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Ustalenie relacji między ceną przed i po obniżce</h2>
      <p className="mb-2">
        Oznaczmy cenę przed obniżką jako <InlineMath math="x" />. Po obniżce o <InlineMath math="15\%" /> cena wynosi <InlineMath math="85\%" /> ceny początkowej, czyli:
      </p>
      <BlockMath math="0,85x = 850" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie ceny przed obniżką</h2>
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć <InlineMath math="x" />:
      </p>
      <BlockMath math="x = \frac{850}{0,85}" />
      <p className="mb-2">
        Obliczamy:
      </p>
      <BlockMath math="x = 1000" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Przed obniżką rower kosztował <InlineMath math="1000,00" /> zł (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;