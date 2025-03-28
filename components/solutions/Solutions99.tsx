import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja kwadratowa <InlineMath math="f" /> jest określona wzorem <InlineMath math="f(x)=a(x-1)(x-3)" />. Na rysunku przedstawiono fragment paraboli będącej wykres tej funkcji. Wierzchołkiem tej paraboli jest punkt <InlineMath math="W=(2,1)" />. Największa wartość funkcji <InlineMath math="f" /> w przedziale <InlineMath math="\langle 1, 4 \rangle" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="-3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="0" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_19-50-35_muKwh4s.png" 
            alt="Wykres funkcji kwadratowej" 
            className="rounded-lg" 
            width={400} 
            height={400}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie współczynnika a</h2>
      <p className="mb-2">
        Mamy postać iloczynową funkcji kwadratowej:
      </p>
      <BlockMath math="f(x) = a(x-1)(x-3)" />
      <p className="mb-2">
        Wierzchołek paraboli jest w punkcie <InlineMath math="W=(2,1)" />. Podstawiamy współrzędne wierzchołka:
      </p>
      <BlockMath math="f(2) = a(2-1)(2-3) = a \cdot 1 \cdot (-1) = -a = 1" />
      <BlockMath math="a = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zapisanie pełnego wzoru funkcji</h2>
      <p className="mb-2">
        Po podstawieniu wartości <InlineMath math="a" />:
      </p>
      <BlockMath math="f(x) = -1(x-1)(x-3) = -x^2 + 4x - 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Analiza wartości w przedziale</h2>
      <p className="mb-2">
        W przedziale <InlineMath math="\langle 1, 4 \rangle" /> funkcja osiąga:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>Wartość w wierzchołku: <InlineMath math="f(2) = 1" /></li>
        <li>Wartości na krańcach przedziału: <InlineMath math="f(1) = 0" /> i <InlineMath math="f(4) = -3" /></li>
      </ul>
      <p className="mb-2">
        Ponieważ parabola jest skierowana ramionami w dół <InlineMath math="(a = -1)"/>, największą wartością w przedziale jest wartość w wierzchołku.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Największa wartość funkcji w przedziale wynosi <InlineMath math="1" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;