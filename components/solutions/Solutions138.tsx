import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dane są punkty o współrzędnych <InlineMath math="A = (-2, 5)" /> oraz{' '}
        <InlineMath math="B = (4, -1)" />. Średnica okręgu wpisanego w kwadrat o boku{' '}
        <InlineMath math="AB" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="12" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="6" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="6\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="2\sqrt{6}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Obliczenie długości boku <InlineMath math="AB" />
      </h2>
      <p className="mb-2">
        Długość odcinka <InlineMath math="AB" /> obliczamy ze wzoru na odległość między dwoma
        punktami:
      </p>
      <BlockMath math="|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}" />
      <p className="mb-2">
        Podstawiamy współrzędne punktów <InlineMath math="A = (-2, 5)" /> i{' '}
        <InlineMath math="B = (4, -1)" />:
      </p>
      <BlockMath math="|AB| = \sqrt{(4 - (-2))^2 + (-1 - 5)^2}" />
      <BlockMath math="|AB| = \sqrt{6^2 + (-6)^2}" />
      <BlockMath math="|AB| = \sqrt{36 + 36} = \sqrt{72} = 6\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie średnicy okręgu wpisanego w kwadrat
      </h2>
      <p className="mb-2">
        Średnica okręgu wpisanego w kwadrat jest równa długości boku kwadratu. Zatem:
      </p>
      <BlockMath math="\text{Średnica} = |AB| = 6\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Średnica okręgu wpisanego w kwadrat o boku <InlineMath math="AB" /> jest równa{' '}
        <InlineMath math="6\sqrt{2}" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
