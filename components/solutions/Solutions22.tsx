import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution22 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Jednym z miejsc zerowych funkcji kwadratowej <InlineMath math="f" /> jest liczba{' '}
        <InlineMath math="-5" />. Pierwsza współrzędna wierzchołka paraboli, będącej wykresem
        funkcji <InlineMath math="f" />, jest równa <InlineMath math="3" />. Drugim miejscem zerowym
        funkcji <InlineMath math="f" /> jest liczba:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="11" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="-1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="-13" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wykorzystanie własności paraboli</h2>
      <p className="mb-2">
        Wierzchołek paraboli znajduje się na prostej <InlineMath math="x = 3" />. Miejsca zerowe
        funkcji kwadratowej są symetryczne względem wierzchołka. Jeśli jedno miejsce zerowe to{' '}
        <InlineMath math="-5" />, to drugie miejsce zerowe można znaleźć, korzystając z symetrii.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie drugiego miejsca zerowego
      </h2>
      <p className="mb-2">
        Odległość między miejscem zerowym <InlineMath math="-5" /> a wierzchołkiem{' '}
        <InlineMath math="3" /> wynosi:
      </p>
      <BlockMath math="| -5 - 3 | = 8" />
      <p className="mb-2">
        Drugie miejsce zerowe znajduje się w tej samej odległości od wierzchołka, ale po przeciwnej
        stronie:
      </p>
      <BlockMath math="3 + 8 = 11" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Drugim miejscem zerowym funkcji <InlineMath math="f" /> jest liczba <InlineMath math="1" />{' '}
        (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution22;
