import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{2}{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{2}{9}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{9}{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozpoznanie wzoru</h2>
      <p className="mb-2">
        Wyrażenie <InlineMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ" /> przypomina wzór na sinus sumy kątów:
      </p>
      <BlockMath math="\sin(A + B) = \sin A \cdot \cos B + \cos A \cdot \sin B" />
      <p className="mb-2">
        Możemy więc zastosować ten wzór, aby uprościć wyrażenie.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zastosowanie wzoru</h2>
      <p className="mb-2">
        Przyjmujemy <InlineMath math="A = 12^\circ" /> i <InlineMath math="B = 78^\circ" />. Wtedy:
      </p>
      <BlockMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ = \sin(12^\circ + 78^\circ)" />
      <BlockMath math="= \sin(90^\circ)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie wartości</h2>
      <p className="mb-2">
        Wartość <InlineMath math="\sin(90^\circ)" /> jest znana i wynosi:
      </p>
      <BlockMath math="\sin(90^\circ) = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Intuicja</h2>
      <p className="mb-2">
        Kluczowe w tym zadaniu było rozpoznanie, że wyrażenie można uprościć za pomocą wzoru na sinus sumy kątów. Dzięki temu zamiast obliczać każdy składnik osobno, mogliśmy skorzystać z gotowego wzoru i szybko uzyskać wynik.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ" /> jest równa <InlineMath math="1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;