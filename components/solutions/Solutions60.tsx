import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono wykres funkcji <InlineMath math="f" />. Zbiór wartości funkcji{' '}
        <InlineMath math="f" /> to:
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="/solutionsImg/arkusz-18-8.png"
          alt="Trójkąt prostokątny ABC"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-2;2)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\langle-2;2)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\langle-2;2\rangle" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="(-2;2\rangle" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza wykresu</h2>
      <p className="mb-2">
        Zbiór wartości to zbiór "igreków". Musimy wskazać nasz przedział od najniższego punktu do
        najwyższego. Widzimy na naszym wykresie, że nasz wykres zaczyna się na dole w{' '}
        <InlineMath math="-2" /> a kończy się w <InlineMath math="2" />. Musimy zdecydować się jaki
        nawais wybrać. Łatwo zauważyć, że dla <InlineMath math="-2" /> musimy dać nawais otwarty
        ponieważ nieisnieje taki argument dla którego osiągana jest ta wartość. Dla{' '}
        <InlineMath math="-2" /> mamy otwarte kółko więc naswias musimy dać otwarty. W przypadku{' '}
        <InlineMath math="2" /> mimo, że również nawias jest otwarty to mimo wszsytko isteniej
        argument np <InlineMath math="x=1" /> gdzie osiągana jest wartość <InlineMath math="2" />{' '}
        Więc dla liczby <InlineMath math="2" /> dajemy nawias domknięty.
      </p>
      <BlockMath math="\langle -2, 2\rangle" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór wartości funkcji <InlineMath math="f" /> to <InlineMath math="\langle -2, 2\rangle" />{' '}
        (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
