import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution162 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest trapez prostokątny <InlineMath math="KLMN" />, którego podstawy mają długości{' '}
        <InlineMath math="|KL| = a" />, <InlineMath math="|MN| = b, \, a > b" />. Kąt{' '}
        <InlineMath math="KLM" /> ma miarę <InlineMath math="60^\circ" />. Długość ramienia{' '}
        <InlineMath math="LM" /> tego trapezu jest równa:
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_20-01-27.png"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a - b" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2(a - b)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a + \frac{1}{2}b" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{a+b}{2}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza trapezu</h2>
      <p className="mb-2">
        Trapez <InlineMath math="KLMN" /> jest prostokątny, więc ramię <InlineMath math="LM" /> jest
        prostopadłe do podstaw. Kąt <InlineMath math="KLM" /> ma miarę{' '}
        <InlineMath math="60^\circ" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości ramienia</h2>
      <p className="mb-2">
        Różnica długości podstaw wynosi <InlineMath math="a - b" />. Ponieważ kąt{' '}
        <InlineMath math="KLM" /> wynosi <InlineMath math="60^\circ" />, możemy użyć funkcji
        trygonometrycznych do obliczenia długości ramienia <InlineMath math="LM" />:
      </p>
      <BlockMath math="\cos(60^\circ) = \frac{\text{przyległa}}{\text{przeciwprostokątna}}" />
      <p className="mb-2">Podstawiamy wartości:</p>
      <BlockMath math="\cos(60^\circ) = \frac{a - b}{|LM|}" />
      <p className="mb-2">
        Wiemy, że <InlineMath math="\cos(60^\circ) = \frac{1}{2}" />, więc:
      </p>
      <BlockMath math="\frac{1}{2} = \frac{a - b}{|LM|}" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="|LM| = 2(a - b)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość ramienia <InlineMath math="LM" /> wynosi <InlineMath math="2(a - b)" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution162;
