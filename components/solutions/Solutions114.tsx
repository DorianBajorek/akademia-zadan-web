import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution114 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Pole prostokąta <InlineMath math="ABCD" /> jest równe 90. Na bokach <InlineMath math="AB" /> i <InlineMath math="CD" /> wybrano – odpowiednio – punkty <InlineMath math="P" /> i <InlineMath math="R" />, takie,  
        <BlockMath math="\frac{|AP|}{|PB|} = \frac{|CR|}{|RD|} = \frac{3}{2}" />  
        Pole czworokąta <InlineMath math="APCR" /> jest równe:
      </div>
      <div className="mb-6 flex justify-center">
        <img src="https://akademiazadan.pl//media/task_images/Screenshot_from_2025-03-12_21-02-28.png" alt="Fragment paraboli" className="rounded-lg" 
            width={300} 
            height={300}  />
      </div>


      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="36" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="40" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="54" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="60" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Podział boków prostokąta</h2>
      <p className="mb-2">
        Stosunek podziału boków <InlineMath math="AB" /> i <InlineMath math="CD" /> wynosi <InlineMath math="\frac{3}{2}" />. Oznacza to, że:
      </p>
      <BlockMath math="|AP| = \frac{3}{5}|AB| \quad \text{oraz} \quad |PB| = \frac{2}{5}|AB|" />
      <BlockMath math="|CR| = \frac{3}{5}|CD| \quad \text{oraz} \quad |RD| = \frac{2}{5}|CD|" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości boków</h2>
      <p className="mb-2">
        Oznaczmy długość boku <InlineMath math="AB" /> jako <InlineMath math="a" />, a długość boku <InlineMath math="AD" /> jako <InlineMath math="b" />. Pole prostokąta wynosi:
      </p>
      <BlockMath math="a \cdot b = 90" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pola czworokąta <InlineMath math="APCR" /></h2>
      <p className="mb-2">
        Czworokąt <InlineMath math="APCR" /> jest trapezem, którego podstawy to <InlineMath math="AP" /> i <InlineMath math="CR" />, a wysokość to <InlineMath math="b" />. Pole trapezu obliczamy ze wzoru:
      </p>
      <BlockMath math="P = \frac{1}{2} \cdot (|AP| + |CR|) \cdot b" />
      <p className="mb-2">
        Podstawiamy wartości:
      </p>
      <BlockMath math="P = \frac{1}{2} \cdot \left(\frac{3}{5}a + \frac{3}{5}a\right) \cdot b = \frac{1}{2} \cdot \frac{6}{5}a \cdot b = \frac{3}{5}a \cdot b" />
      <p className="mb-2">
        Wiemy, że <InlineMath math="a \cdot b = 90" />, więc:
      </p>
      <BlockMath math="P = \frac{3}{5} \cdot 90 = 54" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole czworokąta <InlineMath math="APCR" /> jest równe <InlineMath math="54" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution114;