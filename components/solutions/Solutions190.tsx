import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest okrąg o środku <InlineMath math="S = (2, 3)" /> i promieniu <InlineMath math="r = 5" />. Który z podanych punktów leży na tym okręgu?
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="A = (-1, 7)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="B = (2, -3)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="C = (3, 2)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="D = (5, 3)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Równanie okręgu</h2>
      <p className="mb-2">
        Równanie okręgu o środku <InlineMath math="S = (a, b)" /> i promieniu <InlineMath math="r" /> ma postać:
      </p>
      <BlockMath math="(x - a)^2 + (y - b)^2 = r^2" />
      <p className="mb-2">
        Dla danego okręgu:
      </p>
      <BlockMath math="(x - 2)^2 + (y - 3)^2 = 25" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie punktów</h2>
      <p className="mb-2">
        Sprawdzamy, które z podanych punktów spełniają równanie okręgu.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Punkt A = (-1, 7)</h3>
      <p className="mb-2">
        Podstawiamy współrzędne punktu A do równania okręgu:
      </p>
      <BlockMath math="(-1 - 2)^2 + (7 - 3)^2 = (-3)^2 + (4)^2 = 9 + 16 = 25" />
      <p className="mb-2">
        Punkt A leży na okręgu.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Punkt B = (2, -3)</h3>
      <p className="mb-2">
        Podstawiamy współrzędne punktu B do równania okręgu:
      </p>
      <BlockMath math="(2 - 2)^2 + (-3 - 3)^2 = (0)^2 + (-6)^2 = 0 + 36 = 36" />
      <p className="mb-2">
        Punkt B nie leży na okręgu.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Punkt C = (3, 2)</h3>
      <p className="mb-2">
        Podstawiamy współrzędne punktu C do równania okręgu:
      </p>
      <BlockMath math="(3 - 2)^2 + (2 - 3)^2 = (1)^2 + (-1)^2 = 1 + 1 = 2" />
      <p className="mb-2">
        Punkt C nie leży na okręgu.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Punkt D = (5, 3)</h3>
      <p className="mb-2">
        Podstawiamy współrzędne punktu D do równania okręgu:
      </p>
      <BlockMath math="(5 - 2)^2 + (3 - 3)^2 = (3)^2 + (0)^2 = 9 + 0 = 9" />
      <p className="mb-2">
        Punkt D nie leży na okręgu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Punkt <InlineMath math="A = (-1, 7)" /> leży na okręgu (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;