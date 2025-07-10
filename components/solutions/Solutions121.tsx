import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution121 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W pewnym banku prowizja od udzielanych kredytów hipotecznych przez cały styczeń była równa{' '}
        <InlineMath math="4\%" />. Na początku lutego ten bank obniżył wysokość prowizji od
        wszystkich kredytów o <InlineMath math="1" /> punkt procentowy. Oznacza to, że prowizja od
        kredytów hipotecznych w tym banku zmniejszyła się o:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="1\%" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="25\%" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="33\%" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="75\%" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie zmiany prowizji</h2>
      <p className="mb-2">
        Początkowa prowizja wynosiła <InlineMath math="4\%" />. Bank obniżył prowizję o{' '}
        <InlineMath math="1" /> punkt procentowy, więc nowa prowizja wynosi:
      </p>
      <BlockMath math="4\% - 1\% = 3\%" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie procentowej zmiany</h2>
      <p className="mb-2">
        Aby obliczyć, o ile procent zmniejszyła się prowizja, stosujemy wzór na procentową zmianę:
      </p>
      <BlockMath math="\text{Procentowa zmiana} = \left( \frac{\text{Stara wartość} - \text{Nowa wartość}}{\text{Stara wartość}} \right) \cdot 100\%" />
      <p className="mb-2">Podstawiamy wartości:</p>
      <BlockMath math="\text{Procentowa zmiana} = \left( \frac{4\% - 3\%}{4\%} \right) \cdot 100\% = \left( \frac{1\%}{4\%} \right) \cdot 100\% = 25\%" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prowizja od kredytów hipotecznych zmniejszyła się o <InlineMath math="25\%" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution121;
