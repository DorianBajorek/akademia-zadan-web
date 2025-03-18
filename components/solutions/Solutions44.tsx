import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution44 = () => {
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

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zamiana funkcji trygonometrycznych</h2>
      <p className="mb-2">
        Korzystamy z tożsamości trygonometrycznych, które pozwalają zamienić cosinus na sinus i odwrotnie:
      </p>
      <BlockMath math="\cos \theta = \sin(90^\circ - \theta)" />
      <BlockMath math="\sin \theta = \cos(90^\circ - \theta)" />
      <p className="mb-2">
        Zastosujmy te tożsamości do wyrażenia:
      </p>
      <BlockMath math="\cos 12^\circ = \sin(90^\circ - 12^\circ) = \sin 78^\circ" />
      <BlockMath math="\sin 12^\circ = \cos(90^\circ - 12^\circ) = \cos 78^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do wyrażenia</h2>
      <p className="mb-2">
        Po zamianie funkcji wyrażenie przyjmuje postać:
      </p>
      <BlockMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ = \sin^2 78^\circ + \cos^2 78^\circ" />
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Zastosowanie jedynki trygonometrycznej</h2>
      <p className="mb-2">
        Wiemy, że:
      </p>
      <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
      <p className="mb-2">
        Zauważmy, że:
      </p>
      <BlockMath math=" \sin^2 78^\circ + \cos^2 78^\circ = 1" />
      <p className="mb-2">
        W ten sposób uzyskujemy wynik bezpośrednio z jedynki trygonometrycznej.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\cos 12^\circ \cdot \sin 78^\circ + \sin 12^\circ \cdot \cos 78^\circ" /> jest równa <InlineMath math="1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution44;