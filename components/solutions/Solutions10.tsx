import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution10 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Obliczmy wartość wyrażenia:  
        <BlockMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ" />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\cos 20^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\sin 20^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\tg 20^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sin 20^\circ \cdot \cos 20^\circ" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyciągnięcie wspólnego czynnika przed nawias</h2>
      <p className="mb-2">
        Zauważamy, że <InlineMath math="\sin 20^\circ" /> jest wspólnym czynnikiem obu składników. Wyciągamy go przed nawias:
      </p>
      <BlockMath math="\sin 20^\circ (\sin^2 20^\circ + \cos^2 20^\circ)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zastosowanie jedynki trygonometrycznej</h2>
      <p className="mb-2">
        Wiemy, że jedynka trygonometryczna mówi:
      </p>
      <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
      <p className="mb-2">
        Podstawiając <InlineMath math="\theta = 20^\circ" />, otrzymujemy:
      </p>
      <BlockMath math="\sin^2 20^\circ + \cos^2 20^\circ = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy jedynkę trygonometryczną do wyrażenia:
      </p>
      <BlockMath math="\sin 20^\circ \cdot 1 = \sin 20^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia <InlineMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ" /> jest równa <InlineMath math="\sin 20^\circ" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution10;