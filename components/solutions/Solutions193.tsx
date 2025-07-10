import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest stożek o wysokości <InlineMath math="4" /> i średnicy podstawy{' '}
        <InlineMath math="12" />. Objętość tego stożka jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="576\pi" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="192\pi" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="144\pi" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="48\pi" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie promienia podstawy</h2>
      <p className="mb-2">
        Średnica podstawy stożka wynosi <InlineMath math="12" />, więc promień{' '}
        <InlineMath math="r" /> jest równy:
      </p>
      <BlockMath math="r = \frac{12}{2} = 6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wzór na objętość stożka</h2>
      <p className="mb-2">Objętość stożka jest dana wzorem:</p>
      <BlockMath math="V = \frac{1}{3} \pi r^2 h" />
      <p className="mb-2">Gdzie:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <InlineMath math="r" /> — promień podstawy,
        </li>
        <li>
          <InlineMath math="h" /> — wysokość stożka.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie objętości</h2>
      <p className="mb-2">Podstawiamy dane do wzoru:</p>
      <BlockMath math="V = \frac{1}{3} \pi \cdot 6^2 \cdot 4" />
      <p className="mb-2">Obliczamy:</p>
      <BlockMath math="V = \frac{1}{3} \pi \cdot 36 \cdot 4 = \frac{1}{3} \pi \cdot 144 = 48\pi" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Objętość stożka jest równa <InlineMath math="48\pi" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
