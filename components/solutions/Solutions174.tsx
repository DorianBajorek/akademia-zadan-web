import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba osobników pewnego zagrożonego wyginięciem gatunku zwierząt wzrosła w stosunku do
        liczby tych zwierząt z 31 grudnia 2011 r. o <InlineMath math="120\%" /> i obecnie jest równa{' '}
        <InlineMath math="8910" />. Ile zwierząt liczyła populacja tego gatunku w ostatnim dniu 2011
        roku?
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="4050" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="1782" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="7425" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="7128" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie wzrostu populacji</h2>
      <p className="mb-2">
        Populacja wzrosła o <InlineMath math="120\%" />, co oznacza, że obecna liczba zwierząt
        stanowi <InlineMath math="220\%" /> (czyli <InlineMath math="100\% + 120\% = 220\%" />)
        populacji z 31 grudnia 2011 roku.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Ustalenie równania</h2>
      <p className="mb-2">
        Oznaczmy liczbę zwierząt z 31 grudnia 2011 roku jako <InlineMath math="x" />. Zgodnie z
        warunkami zadania:
      </p>
      <BlockMath math="220\% \cdot x = 8910" />
      <p className="mb-2">Zamieniamy procent na ułamek:</p>
      <BlockMath math="2.2 \cdot x = 8910" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć <InlineMath math="x" />:
      </p>
      <BlockMath math="x = \frac{8910}{2.2}" />
      <p className="mb-2">Obliczamy wartość:</p>
      <BlockMath math="x = 4050" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Populacja tego gatunku w ostatnim dniu 2011 roku liczyła <InlineMath math="4050" /> zwierząt
        (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
