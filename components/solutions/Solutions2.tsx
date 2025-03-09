import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution2 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Rozwiązanie zadania 2</h1>
      
      <div className="text-lg mb-4">
        Obliczmy wartość wyrażenia:  
        <BlockMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ" />
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
        <InlineMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ = \sin 20^\circ" />
      </p>
    </div>
  );
};

export default Solution2;