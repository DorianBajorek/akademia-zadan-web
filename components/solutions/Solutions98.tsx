import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja kwadratowa <InlineMath math="f" /> jest określona wzorem <InlineMath math="f(x) = a(x - 1)(x - 3)" />. Na rysunku przedstawiono fragment paraboli będącej wykres tej funkcji.  
        Wierzchołkiem tej paraboli jest punkt <InlineMath math="W = (2, 1)" />. Współczynnik <InlineMath math="a" /> we wzorze funkcji <InlineMath math="f(x) = a(x - 1)(x - 3)" /> jest równy:
      </div>

      <div className="mb-6 flex justify-center">
        <img src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-11_19-50-35_3MDs8BW.png" alt="Fragment paraboli" className="rounded-lg" 
            width={300} 
            height={300}  />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="-1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Podstawienie współrzędnych wierzchołka do funkcji</h2>
      <p className="mb-2">
        Wierzchołek paraboli <InlineMath math="W = (2, 1)" /> należy do wykresu funkcji, więc podstawiamy <InlineMath math="x = 2" /> i <InlineMath math="f(x) = 1" /> do wzoru funkcji:
      </p>
      <BlockMath math="1 = a(2 - 1)(2 - 3)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie współczynnika <InlineMath math="a" /></h2>
      <p className="mb-2">
        Obliczamy wartość wyrażenia:
      </p>
      <BlockMath math="1 = a(1)(-1)" />
      <BlockMath math="1 = -a" />
      <BlockMath math="a = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Współczynnik <InlineMath math="a" /> jest równy <InlineMath math="-1" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;