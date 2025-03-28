import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Promień <InlineMath math="AS" /> podstawy walca jest równy wysokości <InlineMath math="OS" /> tego walca. Sinus kąta <InlineMath math="OAS" /> (zobacz rysunek) jest równy
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-43-34.png" 
            alt="Walec" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{\sqrt{3}}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{\sqrt{2}}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przyjęcie oznaczeń</h2>
      <p className="mb-2">
        Przyjmijmy:
      </p>
      <BlockMath math="AS = r \quad \text{(promień podstawy)}" />
      <BlockMath math="OS = h = r \quad \text{(z założenia zadania)}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza trójkąta OAS</h2>
      <p className="mb-2">
        Trójkąt <InlineMath math="OAS" /> jest prostokątny w punkcie <InlineMath math="S" />, ponieważ wysokość walca jest prostopadła do podstawy.
      </p>
      <p className="mb-2">
        Przeciwprostokątna <InlineMath math="OA" /> obliczamy z twierdzenia Pitagorasa:
      </p>
      <BlockMath math="OA = \sqrt{AS^2 + OS^2} = \sqrt{r^2 + r^2} = r\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie sinusa kąta OAS</h2>
      <p className="mb-2">
        Szukamy <InlineMath math="\sin(\angle OAS)" />:
      </p>
      <BlockMath math="\sin(\angle OAS) = \frac{\text{przyprostokątna naprzeciw kąta}}{\text{przeciwprostokątna}} = \frac{OS}{OA} = \frac{r}{r\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Sinus kąta <InlineMath math="OAS" /> wynosi <InlineMath math="\frac{\sqrt{2}}{2}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;