import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Prosta <InlineMath math="k" /> jest styczna w punkcie <InlineMath math="A" /> do okręgu o środku <InlineMath math="O" />. Punkt <InlineMath math="B" /> leży na tym okręgu i miara kąta <InlineMath math="\angle AOB" /> jest równa <InlineMath math="80^\circ" />. Przez punkty <InlineMath math="O" /> i <InlineMath math="B" /> poprowadzono prostą, która przecina prostą <InlineMath math="k" /> w punkcie <InlineMath math="C" />. Miara kąta <InlineMath math="\angle BAC" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="10^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="30^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="40^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="50^\circ" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza własności stycznej</h2>
      <p className="mb-2">
        Ponieważ prosta <InlineMath math="k" /> jest styczna do okręgu w punkcie <InlineMath math="A" />, to promień <InlineMath math="OA" /> jest prostopadły do prostej <InlineMath math="k" />. Oznacza to, że:
      </p>
      <BlockMath math="\angle OAC = 90^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wykorzystanie własności trójkąta równoramiennego</h2>
      <p className="mb-2">
        Trójkąt <InlineMath math="AOB" /> jest równoramienny, ponieważ <InlineMath math="OA" /> i <InlineMath math="OB" /> są promieniami okręgu. Zatem:
      </p>
      <BlockMath math="\angle OAB = \angle OBA = \frac{180^\circ - 80^\circ}{2} = 50^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie kąta <InlineMath math="\angle BAC" /></h2>
      <p className="mb-2">
        Kąt <InlineMath math="\angle BAC" /> jest różnicą między kątem prostym <InlineMath math="\angle OAC" /> a kątem <InlineMath math="\angle OAB" />:
      </p>
      <BlockMath math="\angle BAC = \angle OAC - \angle OAB = 90^\circ - 50^\circ = 40^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miara kąta <InlineMath math="\angle BAC" /> wynosi <InlineMath math="40^\circ" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;