import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution134 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest romb o boku długości 4 i kącie rozwartym <InlineMath math="150^\circ" />. Pole tego rombu jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="8" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="12" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="8\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="16" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na pole rombu</h2>
      <p className="mb-2">
        Pole rombu można obliczyć za pomocą wzoru:
      </p>
      <BlockMath math="P = a^2 \cdot \sin(\alpha)" />
      <p className="mb-2">
        gdzie <InlineMath math="a" /> to długość boku rombu, a <InlineMath math="\alpha" /> to miara kąta ostrego lub rozwartego.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sinusa kąta</h2>
      <p className="mb-2">
        Kąt rozwarty rombu wynosi <InlineMath math="150^\circ" />. Obliczamy <InlineMath math="\sin(150^\circ)" />:
      </p>
      <BlockMath math="\sin(150^\circ) = \sin(180^\circ - 30^\circ) = \sin(30^\circ) = \frac{1}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pola rombu</h2>
      <p className="mb-2">
        Podstawiamy wartości do wzoru na pole rombu:
      </p>
      <BlockMath math="P = 4^2 \cdot \frac{1}{2} = 16 \cdot \frac{1}{2} = 8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole rombu jest równe <InlineMath math="8" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution134;