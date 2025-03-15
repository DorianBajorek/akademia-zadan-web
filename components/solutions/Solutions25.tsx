import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dla każdego kąta ostrego <InlineMath math="\alpha" /> wyrażenie <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha" /> jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sin^2 \alpha" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\sin^6 \alpha \cdot \cos^2 \alpha" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sin^4 \alpha + 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sin^2 \alpha \cdot (\sin \alpha + \cos \alpha) \cdot (\sin \alpha - \cos \alpha)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozłożenie wyrażenia na czynniki</h2>
      <p className="mb-2">
        Zauważamy, że wyrażenie <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha" /> można zapisać jako:
      </p>
      <BlockMath math="\sin^2 \alpha (\sin^2 \alpha + \cos^2 \alpha)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zastosowanie jedynki trygonometrycznej</h2>
      <p className="mb-2">
        Wiemy, że <InlineMath math="\sin^2 \alpha + \cos^2 \alpha = 1" /> (jedynka trygonometryczna). Podstawiamy to do wyrażenia:
      </p>
      <BlockMath math="\sin^2 \alpha \cdot 1 = \sin^2 \alpha" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Intuicja</h2>
      <p className="mb-2">
        Kluczowe w tym zadaniu było rozpoznanie, że wyrażenie można uprościć poprzez wyciągnięcie <InlineMath math="\sin^2 \alpha" /> przed nawias i zastosowanie jedynki trygonometrycznej. Dzięki temu wyrażenie znacznie się upraszcza.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Dla każdego kąta ostrego <InlineMath math="\alpha" /> wyrażenie <InlineMath math="\sin^4 \alpha + \sin^2 \alpha \cdot \cos^2 \alpha" /> jest równe <InlineMath math="\sin^2 \alpha" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;