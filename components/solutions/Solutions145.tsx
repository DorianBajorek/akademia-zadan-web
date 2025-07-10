import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution145 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Promień kuli i promień podstawy stożka są równe 5. Pole powierzchni kuli jest równe polu
        powierzchni całkowitej stożka. Długość tworzącej stożka jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="10" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="5" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="15" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie pola powierzchni kuli</h2>
      <p className="mb-2">Pole powierzchni kuli obliczamy ze wzoru:</p>
      <BlockMath math="P_{\text{kuli}} = 4\pi r^2" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="r = 5" />:
      </p>
      <BlockMath math="P_{\text{kuli}} = 4\pi \cdot 5^2 = 100\pi" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie pola powierzchni całkowitej stożka
      </h2>
      <p className="mb-2">Pole powierzchni całkowitej stożka obliczamy ze wzoru:</p>
      <BlockMath math="P_{\text{stożka}} = \pi r^2 + \pi r l" />
      <p className="mb-2">
        Gdzie <InlineMath math="r" /> to promień podstawy, a <InlineMath math="l" /> to długość
        tworzącej stożka. Podstawiamy <InlineMath math="r = 5" />:
      </p>
      <BlockMath math="P_{\text{stożka}} = \pi \cdot 5^2 + \pi \cdot 5 \cdot l = 25\pi + 5\pi l" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Porównanie pól powierzchni</h2>
      <p className="mb-2">Zgodnie z treścią zadania pola powierzchni są równe:</p>
      <BlockMath math="100\pi = 25\pi + 5\pi l" />
      <p className="mb-2">
        Odejmujemy <InlineMath math="25\pi" /> od obu stron:
      </p>
      <BlockMath math="75\pi = 5\pi l" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="5\pi" />:
      </p>
      <BlockMath math="l = 15" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość tworzącej stożka jest równa <InlineMath math="15" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution145;
