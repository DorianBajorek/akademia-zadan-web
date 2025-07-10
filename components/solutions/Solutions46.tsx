import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution46 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Boki równoległoboku mają długości 6 i 10, a kąt rozwarty między tymi bokami ma miarę{' '}
        <InlineMath math="120^\circ" />. Pole tego równoległoboku jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="30\sqrt{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="30" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="60\sqrt{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="60" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na pole równoległoboku</h2>
      <p className="mb-2">Pole równoległoboku można obliczyć za pomocą wzoru:</p>
      <BlockMath math="P = a \cdot b \cdot \sin(\alpha)" />
      <p className="mb-2">
        gdzie <InlineMath math="a" /> i <InlineMath math="b" /> to długości boków, a{' '}
        <InlineMath math="\alpha" /> to miara kąta między nimi.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sinusa kąta</h2>
      <p className="mb-2">
        Kąt rozwarty między bokami wynosi <InlineMath math="120^\circ" />. Obliczamy{' '}
        <InlineMath math="\sin(120^\circ)" />:
      </p>
      <BlockMath math="\sin(120^\circ) = \sin(180^\circ - 60^\circ) = \sin(60^\circ) = \frac{\sqrt{3}}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pola</h2>
      <p className="mb-2">Podstawiamy wartości do wzoru na pole równoległoboku:</p>
      <BlockMath math="P = 6 \cdot 10 \cdot \frac{\sqrt{3}}{2} = 60 \cdot \frac{\sqrt{3}}{2} = 30\sqrt{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole równoległoboku jest równe <InlineMath math="30\sqrt{3}" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution46;
