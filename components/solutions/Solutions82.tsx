import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W trójkącie <InlineMath math="ABC" /> bok <InlineMath math="BC" /> ma długość <InlineMath math="13" />, a wysokość <InlineMath math="CD" /> tego trójkąta dzieli bok <InlineMath math="AB" /> na odcinki o długościach <InlineMath math="|AD| = 3" /> i <InlineMath math="|BD| = 12" />. Długość boku <InlineMath math="AC" /> jest równa
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_14-18-27.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={300} 
            height={300}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt{34}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{13}{4}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="2\sqrt{14}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="3\sqrt{45}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie wysokości CD</h2>
      <p className="mb-2">
        Z twierdzenia Pitagorasa dla trójkąta <InlineMath math="CDB" />:
      </p>
      <BlockMath math="CD^2 + BD^2 = BC^2" />
      <BlockMath math="CD^2 + 12^2 = 13^2" />
      <BlockMath math="CD^2 = 169 - 144 = 25" />
      <BlockMath math="CD = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości AC</h2>
      <p className="mb-2">
        Z twierdzenia Pitagorasa dla trójkąta <InlineMath math="ADC" />:
      </p>
      <BlockMath math="AD^2 + CD^2 = AC^2" />
      <BlockMath math="3^2 + 5^2 = AC^2" />
      <BlockMath math="9 + 25 = AC^2" />
      <BlockMath math="AC = \sqrt{34}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Długość boku <InlineMath math="AC" /> wynosi <InlineMath math="\sqrt{34}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;