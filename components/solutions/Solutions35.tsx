import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Cena działki po kolejnych dwóch obniżkach, za każdym razem o 10% w odniesieniu do ceny obowiązującej w danym momencie, jest równa 78 732 zł.  
        Cena tej działki przed obiema obniżkami była, w zaokrągleniu do 1 zł, równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> 98 732 zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> 97 200 zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> 95 266 zł</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> 94 478 zł</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie ceny przed obniżkami</h2>
      <p className="mb-2">
        Oznaczmy początkową cenę działki jako <InlineMath math="P" />. Po pierwszej obniżce o 10% cena wynosi:
      </p>
      <BlockMath math="P_1 = P \cdot (1 - 0.10) = 0.90P" />
      <p className="mb-2">
        Po drugiej obniżce o 10% cena wynosi:
      </p>
      <BlockMath math="P_2 = P_1 \cdot (1 - 0.10) = 0.90P \cdot 0.90 = 0.81P" />
      <p className="mb-2">
        Zgodnie z treścią zadania, cena po dwóch obniżkach wynosi 78 732 zł:
      </p>
      <BlockMath math="0.81P = 78\,732" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć początkową cenę <InlineMath math="P" />:
      </p>
      <BlockMath math="P = \frac{78\,732}{0.81} \approx 97\,200" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Cena działki przed obiema obniżkami była, w zaokrągleniu do 1 zł, równa <InlineMath math="97\,200" /> zł (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;