import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dane są dwa okręgi: okrąg o środku w punkcie <InlineMath math="O" /> i promieniu{' '}
        <InlineMath math="5" /> oraz okrąg o środku w punkcie <InlineMath math="P" /> i promieniu{' '}
        <InlineMath math="3" />. Odcinek <InlineMath math="OP" /> ma długość{' '}
        <InlineMath math="16" />. Prosta <InlineMath math="AB" /> jest styczna do tych okręgów w
        punktach <InlineMath math="A" /> i <InlineMath math="B" />. Ponadto prosta{' '}
        <InlineMath math="AB" /> przecina odcinek <InlineMath math="OP" /> w punkcie{' '}
        <InlineMath math="K" /> (zobacz rysunek). Wtedy
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="|OK| = 6" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="|OK| = 8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="|OK| = 10" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="|OK| = 12" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_22-08-01_qHx07qI_thbW4qH.png"
          alt="Dwa okręgi"
          className="rounded-lg"
          width={400}
          height={400}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza geometryczna sytuacji</h2>
      <p className="mb-2">Mamy dwa okręgi:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Okrąg większy: środek <InlineMath math="O" />, promień <InlineMath math="5" />
        </li>
        <li>
          Okrąg mniejszy: środek <InlineMath math="P" />, promień <InlineMath math="3" />
        </li>
      </ul>
      <p className="mb-2">
        Odcinek <InlineMath math="OP" /> ma długość <InlineMath math="16" />. Prosta styczna{' '}
        <InlineMath math="AB" /> dotyka obu okręgów odpowiednio w punktach <InlineMath math="A" /> i{' '}
        <InlineMath math="B" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wykorzystanie podobieństwa trójkątów
      </h2>
      <p className="mb-2">
        Trójkąty <InlineMath math="OAK" /> i <InlineMath math="PBK" /> są podobne (oba są
        prostokątne i mają wspólny kąt przy wierzchołku <InlineMath math="K" />
        ). Zatem:
      </p>
      <BlockMath math="\frac{|OK|}{|PK|} = \frac{|OA|}{|PB|} = \frac{5}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Oznaczenie długości odcinków</h2>
      <p className="mb-2">Oznaczmy:</p>
      <BlockMath math="|OK| = x" />
      <BlockMath math="|PK| = 16 - x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Ułożenie równania</h2>
      <p className="mb-2">Korzystając z podobieństwa:</p>
      <BlockMath math="\frac{x}{16 - x} = \frac{5}{3}" />
      <BlockMath math="3x = 5(16 - x)" />
      <BlockMath math="3x = 80 - 5x" />
      <BlockMath math="8x = 80" />
      <BlockMath math="x = 10" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja</h2>
      <p className="mb-2">
        Sprawdźmy, czy dla <InlineMath math="|OK| = 10" /> zachodzi podobieństwo:
      </p>
      <BlockMath math="\frac{10}{6} = \frac{5}{3}" />
      <p className="mb-2">Co jest prawdą.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość odcinka <InlineMath math="|OK|" /> wynosi <InlineMath math="10" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
