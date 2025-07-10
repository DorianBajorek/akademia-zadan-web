import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution78 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dla każdego kąta ostrego <InlineMath math="\alpha" /> iloczyn{' '}
        <InlineMath math="\frac{\cos\alpha}{1-\sin^2\alpha} \cdot \frac{1-\cos^2\alpha}{\sin\alpha}" />{' '}
        jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sin \alpha" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\tan \alpha" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\cos \alpha" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sin^2\alpha" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uproszczenie wyrażenia</h2>
      <p className="mb-2">Rozpoczynamy od uproszczenia wyrażenia:</p>
      <BlockMath math="\frac{\cos\alpha}{1-\sin^2\alpha} \cdot \frac{1-\cos^2\alpha}{\sin\alpha}" />
      <p className="mb-2">
        Wiemy, że <InlineMath math="1 - \sin^2\alpha = \cos^2\alpha" /> oraz{' '}
        <InlineMath math="1 - \cos^2\alpha = \sin^2\alpha" /> z jedynki trygonometrycznej.
        Podstawiamy te tożsamości:
      </p>
      <BlockMath math="\frac{\cos\alpha}{\cos^2\alpha} \cdot \frac{\sin^2\alpha}{\sin\alpha}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Dalsze uproszczenie</h2>
      <p className="mb-2">
        Upraszczamy ułamki (licznik z mianownikiem w pierwszym i drugim ułamku skracamy):
      </p>
      <BlockMath math="\frac{1}{\cos\alpha} \cdot \sin\alpha" />
      <p className="mb-2">Co daje:</p>
      <BlockMath math="\frac{\sin\alpha}{\cos\alpha} = \tan\alpha" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloczyn jest równy <InlineMath math="\tan \alpha" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution78;
