import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution6 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Rozważamy wszystkie kody czterocyfrowe utworzone tylko z cyfr <InlineMath math="1, 3, 6, 8" />, przy czym w każdym kodzie każda z tych cyfr występuje dokładnie jeden raz. Liczba wszystkich takich kodów jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="10" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="24" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="16" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wybór pierwszej cyfry</h2>
      <p className="mb-2">
        Pierwszą cyfrę kodu możemy wybrać na <strong>4 sposoby</strong>, ponieważ mamy do dyspozycji cyfry: <InlineMath math="1, 3, 6, 8" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wybór drugiej cyfry</h2>
      <p className="mb-2">
        Po wybraniu pierwszej cyfry, pozostają nam <strong>3 cyfry</strong>. Dlatego drugą cyfrę możemy wybrać na <strong>3 sposoby</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wybór trzeciej cyfry</h2>
      <p className="mb-2">
        Po wybraniu pierwszej i drugiej cyfry, pozostają nam <strong>2 cyfry</strong>. Trzecią cyfrę możemy więc wybrać na <strong>2 sposoby</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Wybór czwartej cyfry</h2>
      <p className="mb-2">
        Po wybraniu pierwszych trzech cyfr, pozostaje nam tylko <strong>1 cyfra</strong>. Czwartą cyfrę możemy więc wybrać na <strong>1 sposób</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 5: Zastosowanie zasady mnożenia</h2>
      <p className="mb-2">
        Zgodnie z zasadą mnożenia, liczba wszystkich możliwych kodów czterocyfrowych wynosi:
      </p>
      <BlockMath math="4 \cdot 3 \cdot 2 \cdot 1 = 24" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba wszystkich możliwych kodów czterocyfrowych to <InlineMath math="24" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution6;