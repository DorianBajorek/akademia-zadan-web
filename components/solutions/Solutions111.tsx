import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest trójkąt prostokątny o kątach ostrych <InlineMath math="\alpha" /> i{' '}
        <InlineMath math="\beta" />. Wyrażenie <InlineMath math="2\cos \alpha - \sin \beta" /> jest
        równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sin \beta" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\cos \alpha" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Zależności w trójkącie prostokątnym
      </h2>
      <p className="mb-2">
        W trójkącie prostokątnym suma miar kątów ostrych wynosi <InlineMath math="90^\circ" />,
        czyli:
      </p>
      <BlockMath math="\alpha + \beta = 90^\circ" />
      <p className="mb-2">Z tego wynika, że:</p>
      <BlockMath math="\beta = 90^\circ - \alpha" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wykorzystanie tożsamości trygonometrycznych
      </h2>
      <p className="mb-2">Korzystamy z tożsamości trygonometrycznych:</p>
      <BlockMath math="\sin(90^\circ - \alpha) = \cos \alpha" />
      <BlockMath math="\cos(90^\circ - \alpha) = \sin \alpha" />
      <p className="mb-2">Zatem:</p>
      <BlockMath math="\sin \beta = \sin(90^\circ - \alpha) = \cos \alpha" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Obliczenie wyrażenia <InlineMath math="2\cos \alpha - \sin \beta" />
      </h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="\sin \beta = \cos \alpha" /> do wyrażenia:
      </p>
      <BlockMath math="2\cos \alpha - \sin \beta = 2\cos \alpha - \cos \alpha = \cos \alpha" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wyrażenie <InlineMath math="2\cos \alpha - \sin \beta" /> jest równe{' '}
        <InlineMath math="\cos \alpha" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
