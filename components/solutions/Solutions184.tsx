import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Jeśli <InlineMath math="m = \sin 50^\circ" />, to:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="m = \sin 40^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="m = \cos 40^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="m = \cos 50^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="m = \tan 50^\circ" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wykorzystanie zależności między funkcjami trygonometrycznymi
      </h2>
      <p className="mb-2">Wiemy, że:</p>
      <BlockMath math="\sin \theta = \cos (90^\circ - \theta)" />
      <p className="mb-2">Zatem:</p>
      <BlockMath math="\sin 50^\circ = \cos (90^\circ - 50^\circ) = \cos 40^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wnioski</h2>
      <p className="mb-2">Z powyższej zależności wynika, że:</p>
      <BlockMath math="m = \sin 50^\circ = \cos 40^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to <InlineMath math="m = \cos 40^\circ" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
