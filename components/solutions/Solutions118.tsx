import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono fragment wykresu funkcji liniowej <InlineMath math="f" />{' '}
        określonej wzorem <InlineMath math="f(x) = ax + b" />. Współczynniki <InlineMath math="a" />{' '}
        oraz <InlineMath math="b" /> we wzorze funkcji <InlineMath math="f(x) = ax + b" /> spełniają
        zależność
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a + b > 0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a + b = 0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a \cdot b > 0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a \cdot b < 0" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_20-35-49.png"
          alt="Wykres funkcji liniowej"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza wykresu</h2>
      <p className="mb-2">Z wykresu odczytujemy własności funkcji liniowej:</p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          Punkt przecięcia z osią <InlineMath math="y" /> leży nad osią <InlineMath math="OX" />, co
          oznacza, że <InlineMath math="b>0" />{' '}
        </li>
        <li>
          Funkcja jest malejąca co oznacza, że <InlineMath math="a<0" />
        </li>
      </ul>
      Jeśli <InlineMath math="b>0" /> i <InlineMath math="a<0" />, to <InlineMath math="ab<0" />.
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Współczynniki spełniają zależność <InlineMath math="a \cdot b < 0" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
