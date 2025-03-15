import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution45 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wysokość trójkąta równobocznego jest równa <InlineMath math="6\sqrt{3}" />. Pole tego trójkąta jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="3\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="4\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="27\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="36\sqrt{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Związek między wysokością a bokiem trójkąta równobocznego</h2>
      <p className="mb-2">
        W trójkącie równobocznym wysokość <InlineMath math="h" /> jest związana z długością boku <InlineMath math="a" /> wzorem:
      </p>
      <BlockMath math="h = \frac{a\sqrt{3}}{2}" />
      <p className="mb-2">
        Podstawiamy znaną wysokość:
      </p>
      <BlockMath math="6\sqrt{3} = \frac{a\sqrt{3}}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości boku</h2>
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć długość boku <InlineMath math="a" />:
      </p>
      <BlockMath math="6\sqrt{3} = \frac{a\sqrt{3}}{2}" />
      <BlockMath math="a\sqrt{3} = 12\sqrt{3}" />
      <BlockMath math="a = 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pola trójkąta</h2>
      <p className="mb-2">
        Pole trójkąta równobocznego obliczamy ze wzoru:
      </p>
      <BlockMath math="P = \frac{a^2\sqrt{3}}{4}" />
      <p className="mb-2">
        Podstawiamy długość boku <InlineMath math="a = 12" />:
      </p>
      <BlockMath math="P = \frac{12^2\sqrt{3}}{4} = \frac{144\sqrt{3}}{4} = 36\sqrt{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole tego trójkąta jest równe <InlineMath math="36\sqrt{3}" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution45;