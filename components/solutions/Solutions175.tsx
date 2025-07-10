import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równość <InlineMath math="(x\sqrt{2}-2)^{2}=(2+\sqrt{2})^2" />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> prawdziwa dla <InlineMath math="x = -\sqrt{2}" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> prawdziwa dla <InlineMath math="x = \sqrt{2}" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> prawdziwa dla <InlineMath math="x = -1" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> fałszywa dla każdej liczby <InlineMath math="x" />.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie równania</h2>
      <p className="mb-2">Rozważmy równanie:</p>
      <BlockMath math="(x\sqrt{2} - 2)^2 = (2 + \sqrt{2})^2" />
      <p className="mb-2">Możemy zapisać je jako:</p>
      <BlockMath math="(x\sqrt{2} - 2)^2 - (2 + \sqrt{2})^2 = 0" />
      <p className="mb-2">Korzystając ze wzoru na różnicę kwadratów:</p>
      <BlockMath math="[(x\sqrt{2} - 2) - (2 + \sqrt{2})][(x\sqrt{2} - 2) + (2 + \sqrt{2})] = 0" />
      <BlockMath math="[\sqrt{2}x - 4 - \sqrt{2}][\sqrt{2}x + \sqrt{2}] = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równań</h2>
      <p className="mb-2">Rozwiązujemy dwa równania:</p>
      <BlockMath math="\sqrt{2}x + \sqrt{2} = 0" />
      <BlockMath math="\sqrt{2}x = -\sqrt{2}" />
      <BlockMath math="x = -1" />

      <BlockMath math="\sqrt{2}x - 4 - \sqrt{2} = 0" />
      <BlockMath math="\sqrt{2}x = 4 + \sqrt{2}" />
      <BlockMath math="x = \frac{4 + \sqrt{2}}{\sqrt{2}} = 2\sqrt{2} + 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja odpowiedzi</h2>
      <p className="mb-2">Sprawdźmy odpowiedź:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Dla <InlineMath math="x = -1" />:{' '}
          <InlineMath math="(-1\cdot\sqrt{2} - 2)^2 = (-\sqrt{2} - 2)^2 = (2 + \sqrt{2})^2" /> -
          prawda
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równość jest prawdziwa dla <InlineMath math="x = -1" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
