import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dwa stożki o takich samych podstawach połączono podstawami w taki sposób jak na rysunku.
        Stosunek wysokości tych stożków jest równy <InlineMath math="3 : 2" />. Objętość stożka o
        krótszej wysokości jest równa <InlineMath math="12\ \text{cm}^3" />. Objętość bryły
        utworzonej z połączonych stożków jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="20\ \text{cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="30\ \text{cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="39\ \text{cm}^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="52,5\ \text{cm}^3" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-19_17-53-26.png"
          alt="Dwa stożki"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Ustalenie stosunku wysokości i objętości
      </h2>
      <p className="mb-2">
        Mamy dwa stożki o tym samym promieniu podstawy <InlineMath math="r" /> i różnych
        wysokościach. Stosunek wysokości wynosi:
      </p>
      <BlockMath math="h_1 : h_2 = 3 : 2" />
      <p className="mb-2">
        Objętość stożka o krótszej wysokości <InlineMath math="h_2" /> wynosi{' '}
        <InlineMath math="V_2 = 12\ \text{cm}^3" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie objętości drugiego stożka
      </h2>
      <p className="mb-2">Objętość stożka wyraża się wzorem:</p>
      <BlockMath math="V = \frac{1}{3}\pi r^2 h" />
      <p className="mb-2">
        Ponieważ stożki mają tę samą podstawę, stosunek ich objętości jest równy stosunkowi ich
        wysokości:
      </p>
      <BlockMath math="\frac{V_1}{V_2} = \frac{h_1}{h_2} = \frac{3}{2}" />
      <p className="mb-2">Obliczamy objętość większego stożka:</p>
      <BlockMath math="V_1 = \frac{3}{2} \times V_2 = \frac{3}{2} \times 12\ \text{cm}^3 = 18\ \text{cm}^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Obliczenie całkowitej objętości bryły
      </h2>
      <p className="mb-2">
        Bryła składa się z obu stożków połączonych podstawami, więc jej objętość to suma objętości:
      </p>
      <BlockMath math="V_{\text{całkowita}} = V_1 + V_2 = 18\ \text{cm}^3 + 12\ \text{cm}^3 = 30\ \text{cm}^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Objętość bryły wynosi <InlineMath math="30\ \text{cm}^3" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
