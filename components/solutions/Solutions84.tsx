import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W równoległoboku <InlineMath math="ABCD" />, przedstawionym na rysunku, kąt{' '}
        <InlineMath math="\alpha" /> ma miarę <InlineMath math="70^\circ" />. Wtedy kąt{' '}
        <InlineMath math="\beta" /> ma miarę
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="80^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="70^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="60^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="50^\circ" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_14-22-01.png"
          alt="Równoległobok ABCD"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Własności kątów w równoległoboku</h2>
      <p className="mb-2">W równoległoboku:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Suma kątów przy każdym boku wynosi <InlineMath math="180^\circ" />
        </li>
        <li>Kąty przeciwległe są równe</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2:Suma kątów w czworokącie</h2>
      <p className="mb-2">
        Suma miar kątów w czworokącie wynosi <InlineMath math="360^\circ" />. W czworokącie
        składającym się z punktów <InlineMath math="D" />, <InlineMath math="B" /> i dwóch spodków
        wysokości opusczonych z punktu <InlineMath math="B" /> możemy zapisać
        <BlockMath math="360^\circ = 90^\circ+90^\circ+\beta + \angle ADC" />
        <BlockMath math="180^\circ = \beta + \angle ADC" />
        <BlockMath math="\beta = 180^\circ - \angle ADC" />
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Kąty przy jednym boku</h2>
      <p className="mb-2">
        Kąty <InlineMath math="\alpha=70^\circ" /> i <InlineMath math="\angle ADC" /> leżą przy
        jednym ramieniu, więc
        <BlockMath math="70^\circ+ \angle ADC=180^\circ" />
        <BlockMath math="70^\circ=180^\circ -\angle ADC" />
        <BlockMath math="70^\circ= \beta" />
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Kąt <InlineMath math="\beta" /> ma miarę <InlineMath math="70^\circ" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
