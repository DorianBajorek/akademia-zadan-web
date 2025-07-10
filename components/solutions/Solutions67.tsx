import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution67 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Różnica <InlineMath math="0,(3) - \frac{23}{33}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-0,(39)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-\frac{39}{100}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="-0,36" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="-\frac{4}{11}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Przekształcenie liczby 0,(3) na ułamek
      </h2>
      <p className="mb-2">
        Liczba <InlineMath math="0,\overline{3}" /> to ułamek <InlineMath math="\frac{1}{3}" />.
        Można to pokazać w następujący sposób:
      </p>
      <BlockMath math="x = 0,(3)" />
      <BlockMath math="10x = 3,(3)" />
      <BlockMath math="10x - x = 3,(3) - 0,(3)" />
      <BlockMath math="9x = 3" />
      <BlockMath math="x = \frac{3}{9} = \frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie różnicy</h2>
      <p className="mb-2">Obliczamy różnicę:</p>
      <BlockMath math="\frac{1}{3} - \frac{23}{33}" />
      <p className="mb-2">Sprowadzamy ułamki do wspólnego mianownika:</p>
      <BlockMath math="\frac{1}{3} = \frac{11}{33}" />
      <p className="mb-2">Zatem:</p>
      <BlockMath math="\frac{11}{33} - \frac{23}{33} = -\frac{12}{33}" />
      <p className="mb-2">
        Ułamek <InlineMath math="-\frac{12}{33}" /> można uprościć:
      </p>
      <BlockMath math="-\frac{12}{33} = -\frac{4}{11}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Różnica <InlineMath math="0,(3) - \frac{23}{33}" /> jest równa{' '}
        <InlineMath math="-\frac{4}{11}" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution67;
