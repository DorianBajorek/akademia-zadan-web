import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Pole figury <InlineMath math="F_1" /> złożonej z dwóch stycznych zewnętrznie kół o
        promieniach <InlineMath math="1" /> i <InlineMath math="3" /> jest równe polu figury{' '}
        <InlineMath math="F_2" /> złożonej z dwóch stycznych zewnętrznie kół o promieniach długości{' '}
        <InlineMath math="r" />. Długość <InlineMath math="r" /> promienia jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_14-25-01.png"
          alt="Dwa koła"
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie pola figury F₁</h2>
      <p className="mb-2">
        Figura <InlineMath math="F_1" /> składa się z dwóch kół o promieniach 1 i 3:
      </p>
      <BlockMath math="P_{F_1} = \pi \cdot 1^2 + \pi \cdot 3^2 = \pi + 9\pi = 10\pi" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie pola figury F₂</h2>
      <p className="mb-2">
        Figura <InlineMath math="F_2" /> składa się z dwóch kół o promieniu <InlineMath math="r" />:
      </p>
      <BlockMath math="P_{F_2} = \pi r^2 + \pi r^2 = 2\pi r^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Przyrównanie pól i rozwiązanie równania
      </h2>
      <p className="mb-2">Z warunku równości pól:</p>
      <BlockMath math="10\pi = 2\pi r^2" />
      <BlockMath math="r^2 = 5" />
      <BlockMath math="r = \sqrt{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość promienia <InlineMath math="r" /> wynosi <InlineMath math="\sqrt{5}" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
