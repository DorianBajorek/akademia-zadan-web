import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Pudełko w kształcie prostopadłościanu ma wymiary{' '}
        <InlineMath math="5\ \text{dm} \times 3\ \text{dm} \times 2\ \text{dm}" /> (zobacz rysunek).
        Przekątna <InlineMath math="KL" /> tego prostopadłościanu jest – z dokładnością do{' '}
        <InlineMath math="0,01\ \text{dm}" /> – równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="5,83\ \text{dm}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="6,16\ \text{dm}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="3,61\ \text{dm}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="5,39\ \text{dm}" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_22-05-45.png"
          alt="Prostopadłościan o bokach 5x3x2"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wzór na przekątną prostopadłościanu
      </h2>
      <p className="mb-2">
        Długość przekątnej prostopadłościanu o wymiarach <InlineMath math="a \times b \times c" />{' '}
        obliczamy ze wzoru:
      </p>
      <BlockMath math="d = \sqrt{a^2 + b^2 + c^2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie wartości</h2>
      <p className="mb-2">Podstawiamy wymiary pudełka:</p>
      <BlockMath math="d = \sqrt{5^2 + 3^2 + 2^2} = \sqrt{25 + 9 + 4} = \sqrt{38}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie wartości przybliżonej</h2>
      <p className="mb-2">Obliczamy wartość pierwiastka z dokładnością do 0.01 dm:</p>
      <BlockMath math="\sqrt{38} \approx 6,1644\ \text{dm}" />
      <BlockMath math="d \approx 6,16\ \text{dm}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Weryfikacja odpowiedzi</h2>
      <p className="mb-2">Porównujemy z podanymi odpowiedziami:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          <InlineMath math="6,16\ \text{dm}" /> odpowiada odpowiedzi B
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Przekątna <InlineMath math="KL" /> wynosi w przybliżeniu{' '}
        <InlineMath math="6,16\ \text{dm}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
