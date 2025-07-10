import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Przyprostokątna <InlineMath math="AC" /> trójkąta prostokątnego <InlineMath math="ABC" /> ma
        długość 8 oraz
        <InlineMath math="\tg \alpha = \frac{2}{5}" />. Pole tego trójkąta jest równe:
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-11_14-15-21.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="12" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{37}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{62}{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{64}{5}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zrozumienie zadania</h2>
      <p className="mb-2">
        Mamy trójkąt prostokątny <InlineMath math="ABC" />, gdzie <InlineMath math="AC" /> jest
        przyprostokątną o długości 8. Kąt <InlineMath math="\alpha" /> jest kątem przy wierzchołku{' '}
        <InlineMath math="A" />, a <InlineMath math="\tg \alpha = \frac{2}{5}" />. Pole trójkąta
        można obliczyć, znając długości obu przyprostokątnych.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie długości drugiej przyprostokątnej
      </h2>
      <p className="mb-2">
        tggens kąta <InlineMath math="\alpha" /> to stosunek przeciwprostokątnej do
        przyprostokątnej:
      </p>
      <BlockMath math="\tg \alpha = \frac{BC}{AC} = \frac{2}{5}" />
      <p className="mb-2">
        Podstawiamy znaną długość <InlineMath math="AC = 8" />:
      </p>
      <BlockMath math="\frac{BC}{8} = \frac{2}{5}" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="BC = 8 \cdot \frac{2}{5} = \frac{16}{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pola trójkąta</h2>
      <p className="mb-2">Pole trójkąta prostokątnego to połowa iloczynu przyprostokątnych:</p>
      <BlockMath math="P = \frac{1}{2} \cdot AC \cdot BC = \frac{1}{2} \cdot 8 \cdot \frac{16}{5} = \frac{64}{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole tego trójkąta jest równe <InlineMath math="\frac{64}{5}" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
