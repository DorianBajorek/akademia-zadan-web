import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution9 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg <InlineMath math="(a_n)" /> jest określony wzorem{' '}
        <InlineMath math="a_n = (-1)^n \cdot (n - 5)" /> dla każdej liczby naturalnej{' '}
        <InlineMath math="n \geq 1" />. Oceń prawdziwość podanych zdań:
        <h4 className="text-xl font-semibold mt-4 mb-2">
          Pytanie 1: Pierwszy wyraz ciągu jest dwa razy większy od trzeciego wyrazu tego ciągu.
        </h4>
        <h4 className="text-xl font-semibold mt-4 mb-2">
          Pytanie 2: Wszystkie wyrazy ciągu są dodatnie.
        </h4>
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> 1. Prawda, 2. Prawda
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> 1. Prawda, 2. Fałsz
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> 1. Fałsz, 2. Prawda
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> 1. Fałsz, 2. Fałsz
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Pytanie 1: Pierwszy wyraz ciągu jest dwa razy większy od trzeciego wyrazu tego ciągu.
      </h2>
      <p className="mb-2">Obliczamy pierwszy i trzeci wyraz ciągu:</p>
      <BlockMath math="a_1 = (-1)^1 \cdot (1 - 5) = -1 \cdot (-4) = 4" />
      <BlockMath math="a_3 = (-1)^3 \cdot (3 - 5) = -1 \cdot (-2) = 2" />
      <p className="mb-2">
        Sprawdzamy, czy <InlineMath math="a_1 = 2 \cdot a_3" />:
      </p>
      <BlockMath math="4 = 2 \cdot 2" />
      <p className="mb-2">
        To prawda, więc zdanie jest <strong>prawdziwe</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Pytanie 2: Wszystkie wyrazy ciągu są dodatnie.
      </h2>
      <p className="mb-2">Sprawdzamy kilka początkowych wyrazów:</p>
      <BlockMath math="a_1 = 4" />
      <BlockMath math="a_2 = (-1)^2 \cdot (2 - 5) = 1 \cdot (-3) = -3" />
      <p className="mb-2">
        Już drugi wyraz jest ujemny, więc nie wszystkie wyrazy są dodatnie. Zdanie jest{' '}
        <strong>fałszywe</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Odpowiedź to <strong>B</strong>: 1. Prawda, 2. Fałsz.
      </p>
    </div>
  );
};

export default Solution9;
