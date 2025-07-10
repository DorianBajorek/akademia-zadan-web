import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Obwód trójkąta <InlineMath math="ABC" />, przedstawionego na rysunku, jest równy
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-40-36.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="(3 + \frac{\sqrt{3}}{2})a" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="(2 + \frac{\sqrt{2}}{2})a" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="(3 + \sqrt{3})a" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="(2 + \sqrt{2})a" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza trójkąta ABC</h2>
      <p className="mb-2">Z rysunku i podanych informacji wynika, że:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Trójkąt <InlineMath math="ABC" /> jest prostokątny w z kątem prostym przy wierzchołku{' '}
          <InlineMath math="B" />
        </li>
        <li>
          Kąt <InlineMath math="\angle CAB = 30^\circ" />
        </li>
        <li>
          Długość przyprostokątnej <InlineMath math="BC = a" />
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie długości pozostałych boków
      </h2>
      <p className="mb-2">
        W trójkącie prostokątnym o kątach <InlineMath math="30^\circ, 60^\circ, 90^\circ" />:
      </p>
      <BlockMath math="\frac{BC}{AC} = \sin 30^\circ = \frac{1}{2}" />
      <BlockMath math="AC = \frac{BC}{\sin 30^\circ} = \frac{a}{0.5} = 2a" />
      <BlockMath math="\frac{AB}{AC} = \cos 30^\circ = \frac{\sqrt{3}}{2}" />
      <BlockMath math="AB = AC \cdot \cos 30^\circ = 2a \cdot \frac{\sqrt{3}}{2} = a\sqrt{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie obwodu</h2>
      <p className="mb-2">
        Obwód trójkąta <InlineMath math="ABC" /> wynosi:
      </p>
      <BlockMath math="L = AC + BC + AB = 2a + a + a\sqrt{3} = (3 + \sqrt{3})a" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Obwód trójkąta <InlineMath math="ABC" /> wynosi <InlineMath math="(3 + \sqrt{3})a" />{' '}
        (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
