import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiony jest fragment paraboli będącej wykresem funkcji kwadratowej <InlineMath math="f" />. Wierzchołkiem tej paraboli jest punkt <InlineMath math="W = (2, -4)" />. Liczby <InlineMath math="0" /> i <InlineMath math="4" /> to miejsca zerowe funkcji <InlineMath math="f" />. Zbiorem wartości funkcji <InlineMath math="f" /> jest przedział
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, 0)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\langle 0, 4 \rangle" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\langle -4, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\langle 4, +\infty)" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-12_22-21-31_OshIHwR_5ulMnc2_DOTX6vB.png" 
            alt="Wykres funkcji kwadratowej" 
            className="rounded-lg" 
            width={350} 
            height={350}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza podstawowych informacji</h2>
      <p className="mb-2">
        Mamy następujące dane o funkcji kwadratowej:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>Wierzchołek paraboli: <InlineMath math="W = (2, -4)" /></li>
        <li>Miejsca zerowe: <InlineMath math="x_1 = 0" /> i <InlineMath math="x_2 = 4" /></li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Określenie kierunku ramion paraboli</h2>
      <p className="mb-2">
  Ponieważ miejsca zerowe <InlineMath math="0" /> i <InlineMath math="4" /> znajdują się po przeciwnych stronach wierzchołka (wierzchołek jest w <InlineMath math="x = 2" />, czyli dokładnie pośrodku), oraz wartość w wierzchołku jest ujemna (<InlineMath math="-4" />), oznacza to, że ramiona paraboli są skierowane do góry (bo funkcja przyjmuje wartości większe od <InlineMath math="-4" />).
</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wyznaczenie zbioru wartości</h2>
      <p className="mb-2">
        Dla funkcji kwadratowej z ramionami skierowanymi do góry:
      </p>
      <BlockMath math="\text{Zbiór wartości } = \langle y_w, +\infty)" />
      <p className="mb-2">
        Gdzie <InlineMath math="y_w" /> to druga współrzędna wierzchołka. W naszym przypadku:
      </p>
      <BlockMath math="\text{Zbiór wartości } = \langle -4, +\infty)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Weryfikacja odpowiedzi</h2>
      <p className="mb-2">
        Porównujemy z podanymi opcjami:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>A: <InlineMath math="(-\infty, 0)" /> - niepoprawny</li>
        <li>B: <InlineMath math="\langle 0, 4 \rangle" /> - niepoprawny</li>
        <li>C: <InlineMath math="\langle -4, +\infty)" /> - poprawny</li>
        <li>D: <InlineMath math="\langle 4, +\infty)" /> - niepoprawny</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiorem wartości funkcji jest przedział <InlineMath math="\langle -4, +\infty)" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;