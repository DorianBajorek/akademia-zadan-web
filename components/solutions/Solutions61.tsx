import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution61 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ" /> jest
        równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\cos 20^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\sin 20^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\tg 20^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sin 20^\circ \cdot \cos 20^\circ" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyciągnięcie sinusa przed nawias</h2>
      <p className="mb-2">
        Wyciągamy <InlineMath math="\sin 20^\circ" /> przed nawias:
      </p>
      <BlockMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ = \sin 20^\circ (\sin^2 20^\circ + \cos^2 20^\circ)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Zastosowanie jedynki trygonometrycznej
      </h2>
      <p className="mb-2">Z jedynki trygonometrycznej wiemy, że:</p>
      <BlockMath math="\sin^2 20^\circ + \cos^2 20^\circ = 1" />
      <p className="mb-2">Podstawiamy to do wyrażenia:</p>
      <BlockMath math="\sin 20^\circ (\sin^2 20^\circ + \cos^2 20^\circ) = \sin 20^\circ \cdot 1 = \sin 20^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\sin^3 20^\circ + \cos^2 20^\circ \cdot \sin 20^\circ" /> jest
        równa <InlineMath math="\sin 20^\circ" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution61;
