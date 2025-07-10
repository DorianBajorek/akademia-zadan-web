import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Podstawą graniastosłupa prostego jest prostokąt o bokach długości <InlineMath math="3" /> i{' '}
        <InlineMath math="4" />. Kąt <InlineMath math="\alpha" />, jaki przekątna tego
        graniastosłupa tworzy z jego podstawą, jest równy <InlineMath math="45^\circ" /> (zobacz
        rysunek). Wysokość graniastosłupa jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="5" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="3\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="5\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{5\sqrt{3}}{3}" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_20-05-42.png"
          alt="Graniastosłup"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie przekątnej podstawy</h2>
      <p className="mb-2">Przekątna prostokąta w podstawie wynosi:</p>
      <BlockMath math="d = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Analiza kąta nachylenia przekątnej
      </h2>
      <p className="mb-2">
        Kąt <InlineMath math="45^\circ" /> między przekątną graniastosłupa a podstawą oznacza, że
        wysokość <InlineMath math="H" /> jest równa przekątnej podstawy:
      </p>
      <BlockMath math="\tan 45^\circ = \frac{H}{d} = 1 \implies H = d = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja geometryczna</h2>
      <p className="mb-2">Tworzymy trójkąt prostokątny:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Przyprostokątna pozioma: przekątna podstawy <InlineMath math="d = 5" />
        </li>
        <li>
          Przyprostokątna pionowa: wysokość graniastosłupa <InlineMath math="H" />
        </li>
        <li>Przeciwprostokątna: przekątna graniastosłupa</li>
      </ul>
      <p className="mb-2">
        Dla kąta <InlineMath math="45^\circ" /> przy podstawie, obie przyprostokątne muszą być
        równe.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wysokość graniastosłupa wynosi <InlineMath math="5" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
