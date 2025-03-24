import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ile jest wszystkich liczb naturalnych czterocyfrowych mniejszych od <InlineMath math="2018" /> i podzielnych przez <InlineMath math="5" />?
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="402" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="403" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="203" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="204" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na \( n \)-ty wyraz ciągu arytmetycznego</h2>
      <p className="mb-2">
        Wzór na \( n \)-ty wyraz ciągu arytmetycznego jest dany wzorem:
      </p>
      <BlockMath math="a_n = a_1 + (n - 1) \cdot r" />
      <p className="mb-2">
        gdzie:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li><InlineMath math="a_n" /> —  n -ty wyraz ciągu,</li>
        <li><InlineMath math="a_1" /> — pierwszy wyraz ciągu,</li>
        <li><InlineMath math="r" /> — różnica ciągu,</li>
        <li><InlineMath math="n" /> — liczba wyrazów.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Przekształcenie wzoru, aby wyznaczyć \( n \)</h2>
      <p className="mb-2">
        Chcemy wyznaczyć  n , więc przekształcamy wzór:
      </p>
      <BlockMath math="a_n = a_1 + (n - 1) \cdot r" />
      <p className="mb-2">
        Odejmujemy <InlineMath math="a_1" /> od obu stron:
      </p>
      <BlockMath math="a_n - a_1 = (n - 1) \cdot r" />
      <p className="mb-2">
        Następnie dzielimy obie strony przez <InlineMath math="r" />:
      </p>
      <BlockMath math="\frac{a_n - a_1}{r} = n - 1" />
      <p className="mb-2">
        Na koniec dodajemy 1 do obu stron, aby wyznaczyć \( n \):
      </p>
      <BlockMath math="n = \frac{a_n - a_1}{r} + 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Podstawienie wartości do wzoru</h2>
      <p className="mb-2">
        W naszym zadaniu:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Pierwszy wyraz ciągu <InlineMath math="a_1 = 1000" /> (najmniejsza liczba czterocyfrowa podzielna przez 5),</li>
        <li> n -ty wyraz ciągu <InlineMath math="a_n = 2015" /> (największa liczba czterocyfrowa mniejsza od 2018 i podzielna przez 5),</li>
        <li>Różnica ciągu <InlineMath math="r = 5" /> (bo co 5 liczba jest podzielna przez 5).</li>
      </ul>
      <p className="mb-2">
        Podstawiamy te wartości do wzoru:
      </p>
      <BlockMath math="n = \frac{a_n - a_1}{r} + 1 = \frac{2015 - 1000}{5} + 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie wartości</h2>
      <p className="mb-2">
        Obliczamy różnicę w liczniku:
      </p>
      <BlockMath math="2015 - 1000 = 1015" />
      <p className="mb-2">
        Następnie dzielimy przez różnicę ciągu <InlineMath math="r = 5" />:
      </p>
      <BlockMath math="\frac{1015}{5} = 203" />
      <p className="mb-2">
        Na koniec dodajemy 1:
      </p>
      <BlockMath math="n = 203 + 1 = 204" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba czterocyfrowych liczb naturalnych mniejszych od <InlineMath math="2018" /> i podzielnych przez <InlineMath math="5" /> wynosi <InlineMath math="204" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;