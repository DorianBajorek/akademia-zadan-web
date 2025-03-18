import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution34 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba:  
        <BlockMath math="4 \log_4 2 + 2 \log_4 8" />
        jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="6 \log_4 10" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="16" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="5" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="6 \log_4 16" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zastosowanie wzoru na logarytm potęgi</h2>
      <p className="mb-2">
        Wykorzystujemy wzór na logarytm potęgi:
      </p>
      <BlockMath math="k \log_a b = \log_a b^k" />
      <p className="mb-2">
        Stosujemy go do obu składników wyrażenia:
      </p>
      <BlockMath math="4 \log_4 2 = \log_4 2^4 = \log_4 16" />
      <BlockMath math="2 \log_4 8 = \log_4 8^2 = \log_4 64" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Dodawanie logarytmów</h2>
      <p className="mb-2">
        Wykorzystujemy wzór na dodawanie logarytmów o tej samej podstawie:
      </p>
      <BlockMath math="\log_a b + \log_a c = \log_a (b \cdot c)" />
      <p className="mb-2">
        Dodajemy oba logarytmy:
      </p>
      <BlockMath math="\log_4 16 + \log_4 64 = \log_4 (16 \cdot 64)" />
      <p className="mb-2">
        Obliczamy iloczyn w nawiasie:
      </p>
      <BlockMath math="16 \cdot 64 = 1024" />
      <BlockMath math="\log_4 1024" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczamy logarytm</h2>
      <p className="mb-2">
       Zgodnie z defincją logarytmu szukamy takiego <InlineMath math="x" />, że po podniesieniu liczby <InlineMath math="4" /> do tej potęgi to otrzymamy <InlineMath math="1024" />
      </p>
      <p className="mb-2">
        Dlatego:
      </p>
      <BlockMath math="4^x = 1024" />
      <p className="mb-2">
        Doprowadzamy teraz do tej samej podstawy. Widzimy, że lewą i prawą stronę można zapisać o podstawie 2:
      </p>
      <BlockMath math="(2^2)^x = 2^{10}" />
      <BlockMath math="2^{2x} = 2^{10}" />
      <p className="mb-2">
        Jeśli podstawy logarytmu są równe to logarytmy są równe, gdy ich wykładniki są takie same.
      </p>
      <BlockMath math="2x = 10" />
      <BlockMath math="x = 5" />
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia <InlineMath math="4 \log_4 2 + 2 \log_4 8" /> jest równa <InlineMath math="5" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution34;