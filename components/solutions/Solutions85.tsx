import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution85 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W każdym <InlineMath math="n" />-kącie wypukłym (<InlineMath math="n \geq 3" />) liczba przekątnych jest równa <InlineMath math="\frac{n(n-3)}{2}" />. Wielokątem wypukłym, w którym liczba przekątnych jest o 25 większa od liczby boków, jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> siedmiokąt</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> dziesięciokąt</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> dwunastokąt</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> piętnastokąt</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Ustalenie równania</h2>
      <p className="mb-2">
        Zgodnie z treścią zadania, liczba przekątnych jest o 25 większa od liczby boków:
      </p>
      <BlockMath math="\frac{n(n-3)}{2} = n + 25" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Mnożymy obie strony przez 2, aby pozbyć się ułamka:
      </p>
      <BlockMath math="n(n - 3) = 2n + 50" />
      <p className="mb-2">
        Rozwijamy i porządkujemy równanie:
      </p>
      <BlockMath math="n^2 - 3n = 2n + 50" />
      <BlockMath math="n^2 - 5n - 50 = 0" />
      <p className="mb-2">
        Rozwiązujemy równanie kwadratowe:
      </p>
      <BlockMath math="n = \frac{5 \pm \sqrt{25 + 200}}{2} = \frac{5 \pm \sqrt{225}}{2} = \frac{5 \pm 15}{2}" />
      <p className="mb-2">
        Ponieważ <InlineMath math="n \geq 3" />, wybieramy dodatnie rozwiązanie:
      </p>
      <BlockMath math="n = \frac{5 + 15}{2} = 10" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wielokątem wypukłym, w którym liczba przekątnych jest o 25 większa od liczby boków, jest <strong>dziesięciokąt</strong> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution85;