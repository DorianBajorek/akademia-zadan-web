import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest trójkąt o bokach długości: <InlineMath math="2\sqrt{5}" />,{' '}
        <InlineMath math="3\sqrt{5}" />, <InlineMath math="4\sqrt{5}" />. Trójkątem podobnym do tego
        trójkąta jest trójkąt, którego boki mają długości:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> 10, 15, 20
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> 20, 45, 80
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{2}" />,{' '}
            <InlineMath math="\sqrt{3}" />, <InlineMath math="\sqrt{4}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\sqrt{5}" />,{' '}
            <InlineMath math="2\sqrt{5}" />, <InlineMath math="3\sqrt{5}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Sprawdzenie proporcji boków</h2>
      <p className="mb-2">
        Trójkąty są podobne, jeśli stosunki długości odpowiadających sobie boków są równe. Dla
        trójkąta o bokach <InlineMath math="2\sqrt{5}" />, <InlineMath math="3\sqrt{5}" />,{' '}
        <InlineMath math="4\sqrt{5}" /> stosunki długości boków wynoszą:
      </p>
      <BlockMath math="2 : 3 : 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie odpowiedzi A</h2>
      <p className="mb-2">Dla trójkąta o bokach 10, 15, 20 stosunki długości boków wynoszą:</p>
      <BlockMath math="10 : 15 : 20 = 2 : 3 : 4" />
      <p className="mb-2">
        Stosunki są takie same jak w wyjściowym trójkącie, więc trójkąt ten jest podobny.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Sprawdzenie pozostałych odpowiedzi
      </h2>
      <p className="mb-2">
        Dla odpowiedzi B, C i D stosunki długości boków nie są równe <InlineMath math="2 : 3 : 4" />
        , więc trójkąty te nie są podobne do wyjściowego trójkąta.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Trójkąt o bokach 10, 15, 20 jest podobny do wyjściowego trójkąta (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
