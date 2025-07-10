import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution112 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkt <InlineMath math="B" /> jest obrazem punktu <InlineMath math="A = (-3, 5)" /> w
        symetrii względem początku układu współrzędnych. Długość odcinka <InlineMath math="AB" />{' '}
        jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="2\sqrt{34}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{34}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="12" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie współrzędnych punktu
        <InlineMath math="B" />{' '}
      </h2>
      <p className="mb-2">
        W symetrii względem początku układu współrzędnych, współrzędne punktu{' '}
        <InlineMath math="B" /> są przeciwne do współrzędnych punktu <InlineMath math="A" />:
      </p>
      <BlockMath math="B = (3, -5)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie długości odcinka <InlineMath math="AB" />{' '}
      </h2>
      <p className="mb-2">
        Długość odcinka <InlineMath math="AB" /> obliczamy ze wzoru na odległość między dwoma
        punktami:
      </p>
      <BlockMath math="|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}" />
      <p className="mb-2">
        Podstawiamy współrzędne punktów <InlineMath math="A = (-3, 5)" /> i{' '}
        <InlineMath math="B = (3, -5)" />:
      </p>
      <BlockMath math="|AB| = \sqrt{(3 - (-3))^2 + (-5 - 5)^2} = \sqrt{6^2 + (-10)^2} = " />
      <BlockMath math="= \sqrt{36 + 100} = \sqrt{136} = 2\sqrt{34}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość odcinka <InlineMath math="AB" /> jest równa <InlineMath math="2\sqrt{34}" />{' '}
        (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution112;
