import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W pudełku jest 40 kul. Wśród nich jest 35 kul białych, a pozostałe to kule czerwone. Prawdopodobieństwo wylosowania każdej kuli jest takie samo. Z pudełka losujemy jedną kulę. Prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy kulę czerwoną, jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{8}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{5}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{1}{40}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{1}{35}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie liczby kul czerwonych</h2>
      <p className="mb-2">
        W pudełku jest 40 kul, z czego 35 to kule białe. Zatem liczba kul czerwonych wynosi:
      </p>
      <BlockMath math="40 - 35 = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie prawdopodobieństwa</h2>
      <p className="mb-2">
        Prawdopodobieństwo wylosowania kuli czerwonej obliczamy jako stosunek liczby kul czerwonych do liczby wszystkich kul:
      </p>
      <BlockMath math="P(\text{czerwona}) = \frac{\text{liczba kul czerwonych}}{\text{liczba wszystkich kul}} = \frac{5}{40}" />
      <p className="mb-2">
        Upraszczamy ułamek:
      </p>
      <BlockMath math="\frac{5}{40} = \frac{1}{8}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawdopodobieństwo wylosowania kuli czerwonej wynosi <InlineMath math="\frac{1}{8}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;