import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W rombie o boku długości <InlineMath math="6\sqrt{2}" /> kąt rozwarty ma miarę <InlineMath math="150^\circ" />. Iloczyn długości przekątnych tego rombu jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="24" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="72" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="36" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="36\sqrt{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wykorzystanie wzoru na pole rombu</h2>
      <p className="mb-2">
        Pole rombu można obliczyć na dwa sposoby:
      </p>
      <BlockMath math="\text{Pole} = a^2 \cdot \sin(\alpha)" />
      <BlockMath math="\text{Pole} = \frac{d_1 \cdot d_2}{2}" />
      <p className="mb-2">
        Gdzie <InlineMath math="a" /> to długość boku, <InlineMath math="\alpha" /> to kąt rozwarty, a <InlineMath math="d_1" /> i <InlineMath math="d_2" /> to długości przekątnych.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie pola rombu</h2>
      <p className="mb-2">
        Podstawiamy wartości do wzoru na pole:
      </p>
      <BlockMath math="\text{Pole} = (6\sqrt{2})^2 \cdot \sin(150^\circ)" />
      <p className="mb-2">
        Obliczamy:
      </p>
      <BlockMath math="(6\sqrt{2})^2 = 36 \cdot 2 = 72" />
      <BlockMath math="\sin(150^\circ) = \frac{1}{2}" />
      <p className="mb-2">
        Zatem:
      </p>
      <BlockMath math="\text{Pole} = 72 \cdot \frac{1}{2} = 36" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie iloczynu przekątnych</h2>
      <p className="mb-2">
        Z drugiego wzoru na pole rombu:
      </p>
      <BlockMath math="\text{Pole} = \frac{d_1 \cdot d_2}{2}" />
      <p className="mb-2">
        Podstawiamy wartość pola:
      </p>
      <BlockMath math="36 = \frac{d_1 \cdot d_2}{2}" />
      <p className="mb-2">
        Mnożymy obie strony przez 2:
      </p>
      <BlockMath math="d_1 \cdot d_2 = 72" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloczyn długości przekątnych tego rombu jest równy <InlineMath math="72" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;