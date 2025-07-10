import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Cztery liczby: <InlineMath math="2, 3, a, 8" />, tworzące zestaw danych, są uporządkowane
        rosnąco. Mediana tego zestawu czterech danych jest równa medianie zestawu pięciu danych:{' '}
        <InlineMath math="5, 3, 6, 8, 2" />. Zatem:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = 7" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = 6" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = 5" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = 4" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie mediany zestawu pięciu danych
      </h2>
      <p className="mb-2">
        Zestaw pięciu danych: <InlineMath math="5, 3, 6, 8, 2" />. Aby obliczyć medianę, sortujemy
        liczby rosnąco:
      </p>
      <BlockMath math="2, 3, 5, 6, 8" />
      <p className="mb-2">
        Mediana to środkowa wartość w uporządkowanym zestawie. Dla pięciu liczb jest to trzecia
        liczba:
      </p>
      <BlockMath math="\text{Mediana} = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyznaczenie mediany zestawu czterech danych
      </h2>
      <p className="mb-2">
        Zestaw czterech danych: <InlineMath math="2, 3, a, 8" />. Ponieważ liczby są już
        uporządkowane rosnąco, mediana jest średnią dwóch środkowych liczb:
      </p>
      <BlockMath math="\text{Mediana} = \frac{3 + a}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Porównanie median</h2>
      <p className="mb-2">Z treści zadania wiemy, że mediana obu zestawów jest równa. Zatem:</p>
      <BlockMath math="\frac{3 + a}{2} = 5" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="3 + a = 10" />
      <BlockMath math="a = 10 - 3 = 7" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="a" /> wynosi <InlineMath math="7" /> (odpowiedź <strong>A</strong>
        ).
      </p>
    </div>
  );
};

export default Solution;
