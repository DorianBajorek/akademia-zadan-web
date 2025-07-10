import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution188 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiona jest prosta <InlineMath math="k" />, przechodząca przez punkt{' '}
        <InlineMath math="A = (2, -3)" /> i przez początek układu współrzędnych, oraz zaznaczony
        jest kąt <InlineMath math="\alpha" /> nachylenia tej prostej do osi <InlineMath math="Ox" />
        . Zatem:
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-13_23-41-21.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\text{tg } \alpha = -\frac{2}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\text{tg } \alpha = -\frac{3}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\text{tg } \alpha = \frac{2}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\text{tg } \alpha = \frac{3}{2}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie współczynnika kierunkowego prostej
      </h2>
      <p className="mb-2">
        Prosta przechodzi przez punkt <InlineMath math="A = (2, -3)" /> i początek układu
        współrzędnych <InlineMath math="(0, 0)" />. Współczynnik kierunkowy <InlineMath math="a" />{' '}
        prostej obliczamy ze wzoru:
      </p>
      <BlockMath math="a = \frac{y_2 - y_1}{x_2 - x_1} = \frac{0 - (-3)}{0 - 2} = \frac{3}{-2} = -\frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie tangensa kąta nachylenia
      </h2>
      <p className="mb-2">
        Tangens kąta nachylenia prostej do osi <InlineMath math="Ox" /> jest równy współczynnikowi
        kierunkowemu prostej:
      </p>
      <BlockMath math="\text{tg } \alpha = a = -\frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Tangens kąta nachylenia prostej do osi <InlineMath math="Ox" /> wynosi{' '}
        <InlineMath math="-\frac{3}{2}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution188;
