import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution51 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Podstawą graniastosłupa prostego jest romb o przekątnych długości 7 cm i 10 cm. Wysokość
        tego graniastosłupa jest krótsza od dłuższej przekątnej rombu o 2 cm. Wtedy objętość
        graniastosłupa jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="560 \text{ cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="280 \text{ cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="280 \text{ cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="560 \text{ cm}^3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie pola podstawy</h2>
      <p className="mb-2">Pole rombu można obliczyć za pomocą wzoru:</p>
      <BlockMath math="P = \frac{d_1 \cdot d_2}{2}" />
      <p className="mb-2">
        gdzie <InlineMath math="d_1" /> i <InlineMath math="d_2" /> to długości przekątnych.
        Podstawiamy wartości:
      </p>
      <BlockMath math="P = \frac{7 \cdot 10}{2} = 35 \text{ cm}^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie wysokości graniastosłupa
      </h2>
      <p className="mb-2">
        Wysokość graniastosłupa jest krótsza od dłuższej przekątnej rombu o 2 cm:
      </p>
      <BlockMath math="h = 10 \text{ cm} - 2 \text{ cm} = 8 \text{ cm}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie objętości</h2>
      <p className="mb-2">Objętość graniastosłupa obliczamy ze wzoru:</p>
      <BlockMath math="V = P \cdot h" />
      <p className="mb-2">Podstawiamy wartości:</p>
      <BlockMath math="V = 35 \text{ cm}^2 \cdot 8 \text{ cm} = 280 \text{ cm}^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Objętość graniastosłupa jest równa <InlineMath math="280 \text{ cm}^3" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution51;
