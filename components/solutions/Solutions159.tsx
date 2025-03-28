import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Przyprostokątna <InlineMath math="LM" /> trójkąta prostokątnego <InlineMath math="KLM" /> ma długość 3, a przeciwprostokątna <InlineMath math="KL" /> ma długość <InlineMath math="8" /> (zobacz rysunek). Wtedy miara <InlineMath math="\alpha" /> kąta ostrego <InlineMath math="LKM" /> tego trójkąta spełnia warunek
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="27^\circ < \alpha \leq 30^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="24^\circ < \alpha \leq 27^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="21^\circ < \alpha \leq 24^\circ" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="18^\circ < \alpha \leq 21^\circ" /></p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_19-58-06.png" 
            alt="Trójkąt prostokątny ABC" 
            className="rounded-lg" 
            width={350} 
            height={350}  
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie drugiej przyprostokątnej</h2>
      <p className="mb-2">
        Z twierdzenia Pitagorasa obliczamy długość przyprostokątnej <InlineMath math="KM" />:
      </p>
      <BlockMath math="KM = \sqrt{KL^2 - LM^2} = \sqrt{8^2 - 3^2} = \sqrt{64 - 9} = \sqrt{55} \approx 7.416" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie kąta α</h2>
      <p className="mb-2">
        Korzystamy z funkcji trygonometrycznych:
      </p>
      <BlockMath math="\sin \alpha = \frac{LM}{KL} = \frac{3}{8} = 0.375" />
      <BlockMath math="\alpha  \approx 22.02^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja przedziału</h2>
      <p className="mb-2">
        Wartość kąta <InlineMath math="22.02^\circ" /> znajduje się w przedziale:
      </p>
      <BlockMath math="21^\circ < \alpha \leq 24^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Dodatkowa weryfikacja</h2>
      <p className="mb-2">
        Możemy też obliczyć tangens kąta:
      </p>
      <BlockMath math="\tan \alpha = \frac{LM}{KM} = \frac{3}{\sqrt{55}} \approx 0.404" />
      <BlockMath math="\alpha  \approx 22^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miara kąta <InlineMath math="\alpha" /> spełnia warunek <InlineMath math="21^\circ < \alpha \leq 24^\circ" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;