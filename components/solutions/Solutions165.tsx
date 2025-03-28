import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Podstawą ostrosłupa jest kwadrat <InlineMath math="KLMN" /> o boku długości 4. Wysokością tego ostrosłupa jest krawędź <InlineMath math="NS" />, a jej długość też jest równa 4 (zobacz rysunek). Kąt <InlineMath math="\alpha" />, jaki tworzą krawędzie <InlineMath math="KS" /> i <InlineMath math="MS" />, spełnia warunek
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\alpha = 45^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="45^\circ < \alpha < 60^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\alpha > 60^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\alpha = 60^\circ" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_20-04-14.png" 
            alt="Ostrosłup" 
            className="rounded-lg" 
            width={350} 
            height={350}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie długości krawędzi bocznych</h2>
      <p className="mb-2">
        Obliczmy długości krawędzi <InlineMath math="KS" /> i <InlineMath math="MS" />:
      </p>
      <BlockMath math="|KS| = \sqrt{4^2 + 4^2} = \sqrt{16 + 16} = \sqrt{32} = 4\sqrt{2}" />
      <BlockMath math="|MS| = \sqrt{4^2 + 4^2} = \sqrt{16 + 16} = \sqrt{32} = 4\sqrt{2}" />
      <p className="mb-2">
        Długość krawędzi podstawy <InlineMath math="KM" /> to przekątna kwadratu:
      </p>
      <BlockMath math="|KM| = 4\sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza trójkąta KMS</h2>
      <p className="mb-2">
        Zauważmy, że:
      </p>
      <BlockMath math="|KS| = |MS| = |KM| = 4\sqrt{2}" />
      <p className="mb-2">
        Wszystkie boki trójkąta <InlineMath math="KMS" /> są równej długości, co oznacza że jest to trójkąt równoboczny. W trójkącie równobocznym wszystkie kąty wewnętrzne wynoszą <InlineMath math="60^\circ" />.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Ponieważ trójkąt <InlineMath math="KMS" /> jest równoboczny, kąt <InlineMath math="\alpha" /> wynosi <InlineMath math="60^\circ" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;