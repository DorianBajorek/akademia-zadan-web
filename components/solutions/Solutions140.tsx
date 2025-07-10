import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution140 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Promień kuli i promień podstawy stożka są równe <InlineMath math="4" />. Pole powierzchni
        kuli jest równe polu powierzchni całkowitej stożka. Długość tworzącej stożka jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="16" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="12" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie pola powierzchni kuli</h2>
      <p className="mb-2">Pole powierzchni kuli obliczamy ze wzoru:</p>
      <BlockMath math="P_{\text{kuli}} = 4\pi r^2" />
      <p className="mb-2">
        Podstawiając <InlineMath math="r = 4" />:
      </p>
      <BlockMath math="P_{\text{kuli}} = 4\pi \cdot 4^2 = 64\pi" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie pola powierzchni całkowitej stożka
      </h2>
      <p className="mb-2">Pole powierzchni całkowitej stożka obliczamy ze wzoru:</p>
      <BlockMath math="P_{\text{stożka}} = \pi r (r + l)" />
      <p className="mb-2">
        Gdzie <InlineMath math="r" /> to promień podstawy, a <InlineMath math="l" /> to długość
        tworzącej stożka. Podstawiając <InlineMath math="r = 4" />:
      </p>
      <BlockMath math="P_{\text{stożka}} = \pi \cdot 4 (4 + l) = 4\pi (4 + l)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Porównanie pól powierzchni</h2>
      <p className="mb-2">
        Z treści zadania wiemy, że pole powierzchni kuli jest równe polu powierzchni całkowitej
        stożka:
      </p>
      <BlockMath math="64\pi = 4\pi (4 + l)" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="4\pi" />:
      </p>
      <BlockMath math="16 = 4 + l" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="l = 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość tworzącej stożka jest równa <InlineMath math="12" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution140;
