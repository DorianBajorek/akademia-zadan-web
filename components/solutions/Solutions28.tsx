import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest graniastosłup prawidłowy czworokątny, w którym krawędź podstawy ma długość{' '}
        <InlineMath math="15" />. Przekątna graniastosłupa jest nachylona do płaszczyzny podstawy
        pod kątem <InlineMath math="\alpha" /> takim, że{' '}
        <InlineMath math="\cos \alpha = \frac{\sqrt{2}}{3}" />. Długość przekątnej tego
        graniastosłupa jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="15\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="45" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="5\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="10" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie przekątnej podstawy</h2>
      <p className="mb-2">
        Podstawą graniastosłupa jest kwadrat o boku długości <InlineMath math="15" />. Przekątna
        podstawy <InlineMath math="d_p" />, korzystając ze wzoru na przekątną kwadratu{' '}
        <InlineMath math="d = a \sqrt{2}" /> wynosi:
      </p>
      <BlockMath math="d_p = 15\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Związek między przekątną graniastosłupa a przekątną podstawy
      </h2>
      <p className="mb-2">
        Przekątna graniastosłupa <InlineMath math="d_g" />, przekątna podstawy{' '}
        <InlineMath math="d_p" /> i wysokość graniastosłupa <InlineMath math="h" /> tworzą trójkąt
        prostokątny. Kąt <InlineMath math="\alpha" /> jest kątem między przekątną graniastosłupa a
        przekątną podstawy. Zatem:
      </p>
      <BlockMath math="\cos \alpha = \frac{d_p}{d_g}" />
      <p className="mb-2">Podstawiamy znane wartości:</p>
      <BlockMath math="\frac{\sqrt{2}}{3} = \frac{15\sqrt{2}}{d_g}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Obliczenie długości przekątnej graniastosłupa
      </h2>
      <p className="mb-2">
        Rozwiązujemy równanie względem <InlineMath math="d_g" />:
      </p>
      <BlockMath math="d_g = \frac{15\sqrt{2} \cdot 3}{\sqrt{2}} = 45" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość przekątnej tego graniastosłupa jest równa <InlineMath math="45" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
