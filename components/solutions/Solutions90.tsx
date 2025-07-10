import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution133 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Sześciowyrazowy ciąg liczbowy <InlineMath math="(1, 2, 2x, x + 2, 5, 6)" /> jest
        niemalejący. Mediana wyrazów tego ciągu jest równa 4. Wynika stąd, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="x = 1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = \frac{3}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="x = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="x = \frac{8}{3}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uporządkowanie ciągu</h2>
      <p className="mb-2">
        Ciąg jest niemalejący, więc wyrazy są ułożone w kolejności od najmniejszego do największego:
      </p>
      <BlockMath math="1, 2, 2x, x + 2, 5, 6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie mediany</h2>
      <p className="mb-2">
        Mediana sześciowyrazowego ciągu to średnia arytmetyczna trzeciego i czwartego wyrazu:
      </p>
      <BlockMath math="\text{Mediana} = \frac{2x + (x + 2)}{2} = \frac{3x + 2}{2}" />
      <p className="mb-2">Zgodnie z treścią zadania mediana wynosi 4:</p>
      <BlockMath math="\frac{3x + 2}{2} = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="3x + 2 = 8" />
      <BlockMath math="3x = 6" />
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 4: Sprawdzenie warunku niemalejącego ciągu
      </h2>
      <p className="mb-2">
        Dla <InlineMath math="x = 2" /> ciąg wygląda następująco:
      </p>
      <BlockMath math="1, 2, 4, 4, 5, 6" />
      <p className="mb-2">Ciąg jest niemalejący, więc warunek jest spełniony.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wynika stąd, że <InlineMath math="x = 2" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution133;
