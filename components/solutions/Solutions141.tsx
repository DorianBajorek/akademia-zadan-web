import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution141 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Mediana zestawu sześciu danych liczb: 4, 8, 21, <InlineMath math="a" />, 16, 25, jest równa
        14. Zatem:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = 7" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = 12" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = 14" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = 20" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uporządkowanie liczb</h2>
      <p className="mb-2">
        Aby znaleźć medianę, musimy uporządkować liczby w kolejności rosnącej. Mamy zestaw liczb: 4,
        8, 21, <InlineMath math="a" />, 16, 25.
      </p>
      <p className="mb-2">
        Najpierw uporządkujmy znane liczby: 4, 8, 16, 21, 25. Teraz musimy umieścić{' '}
        <InlineMath math="a" /> w odpowiednim miejscu, aby cały zestaw był uporządkowany.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie mediany</h2>
      <p className="mb-2">
        Mediana dla sześciu liczb to średnia arytmetyczna trzeciej i czwartej liczby w
        uporządkowanym zestawie. Z treści zadania wiemy, że mediana wynosi 14.
      </p>
      <p className="mb-2">Oznacza to, że:</p>
      <BlockMath math="\frac{\text{trzecia liczba} + \text{czwarta liczba}}{2} = 14" />
      <p className="mb-2">Zatem:</p>
      <BlockMath math="\text{trzecia liczba} + \text{czwarta liczba} = 28" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Rozważenie możliwych wartości <InlineMath math="a" />
      </h2>
      <p className="mb-2">
        Musimy rozważyć różne możliwości wartości <InlineMath math="a" />, aby określić, która z
        nich spełnia warunek mediany.
      </p>
      <p className="mb-2">
        Rozważmy różne przedziały dla <InlineMath math="a" />:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>
            Przypadek 1: <InlineMath math="a \leq 4" />
          </strong>
          <br />
          Uporządkowany zestaw: <InlineMath math="a" />, 4, 8, 16, 21, 25.
          <br />
          Trzecia i czwarta liczba: 8 i 16.
          <br />
          Mediana: <InlineMath math="\frac{8 + 16}{2} = 12" />.
        </li>
        <li>
          <strong>
            Przypadek 2: <InlineMath math="4 < a \leq 8" />
          </strong>
          <br />
          Uporządkowany zestaw: 4, <InlineMath math="a" />, 8, 16, 21, 25.
          <br />
          Trzecia i czwarta liczba: 8 i 16.
          <br />
          Mediana: <InlineMath math="\frac{8 + 16}{2} = 12" />.
        </li>
        <li>
          <strong>
            Przypadek 3: <InlineMath math="8 < a \leq 16" />
          </strong>
          <br />
          Uporządkowany zestaw: 4, 8, <InlineMath math="a" />, 16, 21, 25.
          <br />
          Trzecia i czwarta liczba: <InlineMath math="a" /> i 16.
          <br />
          Mediana: <InlineMath math="\frac{a + 16}{2} = 14" />.<br />
          Rozwiązanie: <InlineMath math="a = 12" />.
        </li>
        <li>
          <strong>
            Przypadek 4: <InlineMath math="16 < a \leq 21" />
          </strong>
          <br />
          Uporządkowany zestaw: 4, 8, 16, <InlineMath math="a" />, 21, 25.
          <br />
          Trzecia i czwarta liczba: 16 i <InlineMath math="a" />.<br />
          Mediana: <InlineMath math="\frac{16 + a}{2} = 14" />.<br />
          Rozwiązanie: <InlineMath math="a = 12" /> (ale <InlineMath math="a > 16" />, więc ten
          przypadek nie ma rozwiązania).
        </li>
        <li>
          <strong>
            Przypadek 5: <InlineMath math="21 < a \leq 25" />
          </strong>
          <br />
          Uporządkowany zestaw: 4, 8, 16, 21, <InlineMath math="a" />, 25.
          <br />
          Trzecia i czwarta liczba: 16 i 21.
          <br />
          Mediana: <InlineMath math="\frac{16 + 21}{2} = 18.5" />.
        </li>
        <li>
          <strong>
            Przypadek 6: <InlineMath math="a > 25" />
          </strong>
          <br />
          Uporządkowany zestaw: 4, 8, 16, 21, 25, <InlineMath math="a" />.<br />
          Trzecia i czwarta liczba: 16 i 21.
          <br />
          Mediana: <InlineMath math="\frac{16 + 21}{2} = 18.5" />.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Wnioski</h2>
      <p className="mb-2">
        Jedynym przypadkiem, w którym mediana wynosi 14, jest przypadek, gdy{' '}
        <InlineMath math="8 < a \leq 16" />. Wtedy:
      </p>
      <BlockMath math="\frac{a + 16}{2} = 14" />
      <p className="mb-2">Rozwiązując to równanie:</p>
      <BlockMath math="a = 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="a" /> wynosi <InlineMath math="12" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution141;
