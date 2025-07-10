import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równość <InlineMath math="(2\sqrt{2}-a)^{2}=17-12\sqrt{2}" /> jest prawdziwa dla
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a=3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a=1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a=-2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a=-3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwinięcie lewej strony równania</h2>
      <p className="mb-2">
        Rozwińmy wyrażenie <InlineMath math="(2\sqrt{2}-a)^{2}" />:
      </p>
      <BlockMath math="(2\sqrt{2})^2 - 2 \cdot 2\sqrt{2} \cdot a + a^2 = 8 - 4a\sqrt{2} + a^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Porównanie z prawą stroną</h2>
      <p className="mb-2">Porównujemy rozwinięcie z prawą stroną równania:</p>
      <BlockMath math="8 - 4a\sqrt{2} + a^2 = 17 - 12\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Rozdzielenie na część wymierną i niewymierną
      </h2>
      <p className="mb-2">Tworzymy układ równań:</p>
      <BlockMath
        math="\begin{cases}
      8 + a^2 = 17 \\
      -4a = -12
      \end{cases}"
      />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie układu</h2>
      <p className="mb-2">Z drugiego równania:</p>
      <BlockMath math="-4a = -12 \implies a = 3" />
      <p className="mb-2">
        Sprawdźmy pierwsze równanie dla <InlineMath math="a = 3" />:
      </p>
      <BlockMath math="8 + 3^2 = 17 \implies 17 = 17" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja pozostałych odpowiedzi</h2>
      <p className="mb-2">
        Dla innych wartości <InlineMath math="a" /> równość nie jest spełniona:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Dla <InlineMath math="a=1" />:{' '}
          <InlineMath math="8 - 4\sqrt{2} + 1 = 9 - 4\sqrt{2} \neq 17-12\sqrt{2}" />
        </li>
        <li>
          Dla <InlineMath math="a=-2" />:{' '}
          <InlineMath math="8 + 8\sqrt{2} + 4 = 12 + 8\sqrt{2} \neq 17-12\sqrt{2}" />
        </li>
        <li>
          Dla <InlineMath math="a=-3" />:{' '}
          <InlineMath math="8 + 12\sqrt{2} + 9 = 17 + 12\sqrt{2} \neq 17-12\sqrt{2}" />
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równość jest prawdziwa dla <InlineMath math="a=3" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
